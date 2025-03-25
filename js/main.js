// 示例游戏数据
const featuredGames = [
    {
        id: 1,
        title: '示例游戏1',
        description: '这是一个精彩的HTML5游戏',
        image: 'images/game1.jpg',
        url: 'games/game1.html'
    },
    // 可以添加更多游戏
];

// 加载热门游戏
function loadFeaturedGames() {
    const gameGrid = document.querySelector('.game-grid');
    if (!gameGrid) return;

    featuredGames.forEach(game => {
        const gameCard = createGameCard(game);
        gameGrid.appendChild(gameCard);
    });
}

// 创建游戏卡片
function createGameCard(game) {
    const card = document.createElement('div');
    card.className = 'game-card';
    
    card.innerHTML = `
        <img src="${game.image}" alt="${game.title}">
        <h3>${game.title}</h3>
        <p>${game.description}</p>
        <a href="${game.url}" class="play-button">开始游戏</a>
    `;
    
    return card;
}

// 页面加载完成后执行
document.addEventListener('DOMContentLoaded', () => {
    loadFeaturedGames();
}); 