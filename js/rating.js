// 游戏评分和评论系统
class RatingSystem {
    constructor() {
        this.ratings = new Map();
        this.comments = new Map();
        this.init();
    }

    init() {
        // 从localStorage加载评分和评论数据
        const ratingData = localStorage.getItem('ratingData');
        if (ratingData) {
            const data = JSON.parse(ratingData);
            this.ratings = new Map(Object.entries(data.ratings));
            this.comments = new Map(Object.entries(data.comments));
        }
    }

    // 添加评分
    addRating(gameId, rating, userId) {
        if (!this.ratings.has(gameId)) {
            this.ratings.set(gameId, []);
        }
        
        const gameRatings = this.ratings.get(gameId);
        const existingRating = gameRatings.find(r => r.userId === userId);
        
        if (existingRating) {
            existingRating.rating = rating;
        } else {
            gameRatings.push({ userId, rating });
        }
        
        this.saveData();
        this.updateGameRating(gameId);
        return true;
    }

    // 添加评论
    addComment(gameId, comment, userId, username) {
        if (!this.comments.has(gameId)) {
            this.comments.set(gameId, []);
        }
        
        const gameComments = this.comments.get(gameId);
        gameComments.push({
            id: Date.now(),
            userId,
            username,
            comment,
            date: new Date().toISOString()
        });
        
        this.saveData();
        this.updateGameComments(gameId);
        return true;
    }

    // 获取游戏评分
    getGameRating(gameId) {
        const gameRatings = this.ratings.get(gameId) || [];
        if (gameRatings.length === 0) return 0;
        
        const sum = gameRatings.reduce((acc, curr) => acc + curr.rating, 0);
        return (sum / gameRatings.length).toFixed(1);
    }

    // 获取用户评分
    getUserRating(gameId, userId) {
        const gameRatings = this.ratings.get(gameId) || [];
        const userRating = gameRatings.find(r => r.userId === userId);
        return userRating ? userRating.rating : 0;
    }

    // 获取游戏评论
    getGameComments(gameId) {
        return this.comments.get(gameId) || [];
    }

    // 保存数据到localStorage
    saveData() {
        localStorage.setItem('ratingData', JSON.stringify({
            ratings: Object.fromEntries(this.ratings),
            comments: Object.fromEntries(this.comments)
        }));
    }

    // 更新游戏评分显示
    updateGameRating(gameId) {
        const ratingElement = document.querySelector('.game-rating');
        if (ratingElement) {
            const rating = this.getGameRating(gameId);
            ratingElement.innerHTML = `
                <i class="fas fa-star"></i> ${rating}
            `;
        }
    }

    // 更新游戏评论显示
    updateGameComments(gameId) {
        const commentsContainer = document.querySelector('.game-comments');
        if (!commentsContainer) return;

        const comments = this.getGameComments(gameId);
        commentsContainer.innerHTML = comments.map(comment => `
            <div class="comment">
                <div class="comment-header">
                    <span class="comment-author">${comment.username}</span>
                    <span class="comment-date">${new Date(comment.date).toLocaleDateString()}</span>
                </div>
                <div class="comment-content">${comment.comment}</div>
            </div>
        `).join('');
    }
}

// 创建评分系统实例
const ratingSystem = new RatingSystem();

// 评分表单处理
const ratingForm = document.querySelector('.rating-form');
if (ratingForm) {
    ratingForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        if (!userSystem.currentUser) {
            alert('请先登录！');
            return;
        }

        const gameId = parseInt(new URLSearchParams(window.location.search).get('id'));
        const rating = parseInt(this.querySelector('input[name="rating"]:checked').value);
        const comment = this.querySelector('textarea[name="comment"]').value;

        if (rating) {
            ratingSystem.addRating(gameId, rating, userSystem.currentUser.id);
        }

        if (comment) {
            ratingSystem.addComment(gameId, comment, userSystem.currentUser.id, userSystem.currentUser.username);
        }

        this.reset();
        alert('感谢您的评价！');
    });
}

// 初始化评分和评论显示
document.addEventListener('DOMContentLoaded', function() {
    const gameId = parseInt(new URLSearchParams(window.location.search).get('id'));
    if (gameId) {
        ratingSystem.updateGameRating(gameId);
        ratingSystem.updateGameComments(gameId);

        // 如果用户已登录，显示用户评分
        if (userSystem.currentUser) {
            const userRating = ratingSystem.getUserRating(gameId, userSystem.currentUser.id);
            const ratingInput = document.querySelector(`input[name="rating"][value="${userRating}"]`);
            if (ratingInput) {
                ratingInput.checked = true;
            }
        }
    }
}); 