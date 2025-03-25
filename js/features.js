// 功能扩展工具类
class FeatureExtender {
    constructor() {
        this.leaderboard = new Map();
        this.achievements = new Map();
        this.gameProgress = new Map();
        this.init();
    }

    init() {
        this.initLeaderboard();
        this.initAchievements();
        this.initGameProgress();
        this.setupAutoSave();
    }

    // 排行榜功能
    initLeaderboard() {
        const savedLeaderboard = localStorage.getItem('leaderboard');
        if (savedLeaderboard) {
            this.leaderboard = new Map(JSON.parse(savedLeaderboard));
        }
    }

    updateLeaderboard(gameId, playerName, score) {
        if (!this.leaderboard.has(gameId)) {
            this.leaderboard.set(gameId, []);
        }

        const gameScores = this.leaderboard.get(gameId);
        gameScores.push({
            playerName,
            score,
            date: new Date().toISOString()
        });

        // 按分数排序并只保留前10名
        gameScores.sort((a, b) => b.score - a.score);
        if (gameScores.length > 10) {
            gameScores.length = 10;
        }

        this.leaderboard.set(gameId, gameScores);
        localStorage.setItem('leaderboard', JSON.stringify([...this.leaderboard]));
        this.displayLeaderboard(gameId);
    }

    displayLeaderboard(gameId) {
        const leaderboardElement = document.querySelector('.game-leaderboard');
        if (!leaderboardElement) return;

        const scores = this.leaderboard.get(gameId) || [];
        const html = scores.map((score, index) => `
            <div class="leaderboard-item">
                <span class="rank">#${index + 1}</span>
                <span class="player">${score.playerName}</span>
                <span class="score">${score.score}</span>
                <span class="date">${new Date(score.date).toLocaleDateString()}</span>
            </div>
        `).join('');

        leaderboardElement.innerHTML = html || '<p>No scores yet!</p>';
    }

    // 成就系统
    initAchievements() {
        const savedAchievements = localStorage.getItem('achievements');
        if (savedAchievements) {
            this.achievements = new Map(JSON.parse(savedAchievements));
        }

        // 定义成就
        this.defineAchievements();
    }

    defineAchievements() {
        const defaultAchievements = {
            'firstWin': {
                title: 'First Victory',
                description: 'Win your first game',
                icon: '🏆',
                earned: false
            },
            'highScore': {
                title: 'High Scorer',
                description: 'Score over 1000 points',
                icon: '🌟',
                earned: false
            },
            'speedRunner': {
                title: 'Speed Runner',
                description: 'Complete a level in under 1 minute',
                icon: '⚡',
                earned: false
            }
        };

        // 为每个游戏初始化成就
        document.querySelectorAll('.game-card').forEach(game => {
            const gameId = game.dataset.gameId;
            if (!this.achievements.has(gameId)) {
                this.achievements.set(gameId, {...defaultAchievements});
            }
        });
    }

    checkAchievements(gameId, stats) {
        const achievements = this.achievements.get(gameId);
        if (!achievements) return;

        let earned = false;

        // 检查各项成就条件
        if (!achievements.firstWin.earned && stats.won) {
            achievements.firstWin.earned = true;
            earned = true;
        }

        if (!achievements.highScore.earned && stats.score > 1000) {
            achievements.highScore.earned = true;
            earned = true;
        }

        if (!achievements.speedRunner.earned && stats.time < 60) {
            achievements.speedRunner.earned = true;
            earned = true;
        }

        if (earned) {
            this.achievements.set(gameId, achievements);
            localStorage.setItem('achievements', JSON.stringify([...this.achievements]));
            this.displayAchievementNotification(achievements);
        }
    }

    displayAchievementNotification(achievement) {
        const notification = document.createElement('div');
        notification.className = 'achievement-notification';
        notification.innerHTML = `
            <div class="achievement-icon">${achievement.icon}</div>
            <div class="achievement-info">
                <h3>${achievement.title}</h3>
                <p>${achievement.description}</p>
            </div>
        `;

        document.body.appendChild(notification);
        setTimeout(() => {
            notification.classList.add('show');
            setTimeout(() => {
                notification.classList.remove('show');
                setTimeout(() => {
                    notification.remove();
                }, 300);
            }, 3000);
        }, 100);
    }

    // 游戏进度保存
    initGameProgress() {
        const savedProgress = localStorage.getItem('gameProgress');
        if (savedProgress) {
            this.gameProgress = new Map(JSON.parse(savedProgress));
        }

        // 设置自动保存
        this.setupAutoSave();
    }

    setupAutoSave() {
        setInterval(() => {
            this.saveGameProgress();
        }, 60000); // 每分钟自动保存一次
    }

    saveGameProgress(gameId, progress) {
        if (!gameId || !progress) return;

        this.gameProgress.set(gameId, {
            ...progress,
            lastSaved: new Date().toISOString()
        });

        localStorage.setItem('gameProgress', JSON.stringify([...this.gameProgress]));
        this.displayGameProgress(gameId);
    }

    loadGameProgress(gameId) {
        return this.gameProgress.get(gameId);
    }

    displayGameProgress(gameId) {
        const progressElement = document.querySelector('.game-progress');
        if (!progressElement) return;

        const progress = this.loadGameProgress(gameId);
        if (!progress) {
            progressElement.innerHTML = '<p>No saved progress</p>';
            return;
        }

        progressElement.innerHTML = `
            <div class="progress-info">
                <h3>Game Progress</h3>
                <p>Level: ${progress.level}</p>
                <p>Score: ${progress.score}</p>
                <p>Last Saved: ${new Date(progress.lastSaved).toLocaleString()}</p>
            </div>
            <button class="load-progress-btn">Continue Game</button>
        `;

        // 添加加载进度按钮事件
        const loadButton = progressElement.querySelector('.load-progress-btn');
        if (loadButton) {
            loadButton.addEventListener('click', () => {
                this.loadGame(gameId, progress);
            });
        }
    }

    loadGame(gameId, progress) {
        const gameFrame = document.querySelector('.game-frame iframe');
        if (!gameFrame) return;

        // 向游戏发送加载进度消息
        gameFrame.contentWindow.postMessage({
            type: 'LOAD_PROGRESS',
            progress: progress
        }, '*');
    }
}

// 初始化功能扩展
const featureExtender = new FeatureExtender();

// 导出功能扩展器
export default featureExtender; 