// 游戏详情页面功能实现
document.addEventListener('DOMContentLoaded', function() {
    // 获取URL参数中的游戏ID
    const urlParams = new URLSearchParams(window.location.search);
    const gameId = parseInt(urlParams.get('id'));

    // 获取游戏数据
    const game = games.find(g => g.id === gameId);
    if (!game) {
        window.location.href = '../games.html';
        return;
    }

    // 更新页面标题和描述
    document.title = `${game.title} - Monster Games`;
    document.querySelector('meta[name="description"]').content = game.description;

    // 更新游戏信息
    document.querySelector('.game-title').textContent = game.title;
    document.querySelector('.game-category').textContent = game.category;
    document.querySelector('.game-rating').innerHTML = `
        <i class="fas fa-star"></i> ${game.rating}
    `;
    document.querySelector('.game-players').innerHTML = `
        <i class="fas fa-users"></i> ${game.players} Players
    `;

    // 更新游戏操作按钮
    const shareBtn = document.querySelector('.share-btn');
    const favoriteBtn = document.querySelector('.favorite-btn');

    shareBtn.addEventListener('click', function() {
        if (navigator.share) {
            navigator.share({
                title: game.title,
                text: game.description,
                url: window.location.href
            });
        } else {
            // 复制链接到剪贴板
            navigator.clipboard.writeText(window.location.href);
            alert('链接已复制到剪贴板！');
        }
    });

    favoriteBtn.addEventListener('click', function() {
        this.classList.toggle('active');
        const isFavorite = this.classList.contains('active');
        // 这里可以添加收藏功能的实现
        alert(isFavorite ? '已添加到收藏夹！' : '已从收藏夹移除！');
    });

    // 更新游戏iframe
    const gameFrame = document.querySelector('.game-frame iframe');
    gameFrame.src = game.iframeUrl;

    // 更新游戏说明
    document.querySelector('.game-instructions p').textContent = game.instructions;

    // 更新游戏控制说明
    document.querySelector('.game-controls p').textContent = game.controls;

    // 更新游戏统计信息
    document.querySelector('.game-stats .stats-grid').innerHTML = `
        <div class="stat-item">
            <i class="fas fa-clock"></i>
            <span>平均游戏时间: ${game.avgPlayTime}分钟</span>
        </div>
        <div class="stat-item">
            <i class="fas fa-trophy"></i>
            <span>最高分: ${game.highScore}</span>
        </div>
        <div class="stat-item">
            <i class="fas fa-star"></i>
            <span>评分: ${game.rating}/5</span>
        </div>
        <div class="stat-item">
            <i class="fas fa-users"></i>
            <span>玩家数: ${game.players}</span>
        </div>
    `;

    // 加载相关游戏
    const relatedGames = games
        .filter(g => g.category === game.category && g.id !== game.id)
        .slice(0, 3);

    document.querySelector('.related-games .games-grid').innerHTML = relatedGames.map(g => `
        <div class="game-card">
            <div class="game-image">
                <img src="${g.image}" alt="${g.title}">
                <div class="game-overlay">
                    <a href="game-template.html?id=${g.id}" class="play-button">Play Now</a>
                </div>
            </div>
            <div class="game-info">
                <h3>${g.title}</h3>
                <p>${g.description}</p>
                <div class="game-meta">
                    <span><i class="fas fa-users"></i> ${g.players}</span>
                    <span><i class="fas fa-star"></i> ${g.rating}</span>
                </div>
            </div>
        </div>
    `).join('');

    // 添加全屏功能
    const fullscreenBtn = document.createElement('button');
    fullscreenBtn.className = 'fullscreen-btn';
    fullscreenBtn.innerHTML = '<i class="fas fa-expand"></i>';
    gameFrame.parentElement.appendChild(fullscreenBtn);

    fullscreenBtn.addEventListener('click', function() {
        if (!document.fullscreenElement) {
            gameFrame.parentElement.requestFullscreen();
            this.innerHTML = '<i class="fas fa-compress"></i>';
        } else {
            document.exitFullscreen();
            this.innerHTML = '<i class="fas fa-expand"></i>';
        }
    });

    // 添加游戏加载状态
    gameFrame.addEventListener('load', function() {
        document.querySelector('.game-loading').style.display = 'none';
        gameFrame.style.display = 'block';
    });
}); 