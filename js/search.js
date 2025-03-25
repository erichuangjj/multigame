// 搜索功能实现
document.addEventListener('DOMContentLoaded', function() {
    const searchInput = document.querySelector('.search-bar input');
    const searchButton = document.querySelector('.search-bar button');
    const resultsGrid = document.querySelector('.results-grid');
    const noResultsSection = document.querySelector('.no-results');
    const searchStats = document.querySelector('.search-stats');
    const sortSelect = document.querySelector('.sort-select');
    const categoryButtons = document.querySelectorAll('.category-btn');
    const paginationButtons = document.querySelectorAll('.page-btn');

    // 从URL获取搜索参数
    const urlParams = new URLSearchParams(window.location.search);
    const searchQuery = urlParams.get('q') || '';
    const category = urlParams.get('category') || 'all';
    const sort = urlParams.get('sort') || 'relevance';
    const page = parseInt(urlParams.get('page')) || 1;

    // 设置搜索框的值
    searchInput.value = searchQuery;

    // 执行搜索
    function performSearch() {
        const query = searchInput.value.toLowerCase();
        const selectedCategory = document.querySelector('.category-btn.active').dataset.category;
        const selectedSort = sortSelect.value;
        
        // 过滤游戏
        let filteredGames = games.filter(game => {
            const matchesQuery = game.title.toLowerCase().includes(query) ||
                               game.description.toLowerCase().includes(query);
            const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
            return matchesQuery && matchesCategory;
        });

        // 排序结果
        switch(selectedSort) {
            case 'popular':
                filteredGames.sort((a, b) => b.players - a.players);
                break;
            case 'newest':
                filteredGames.sort((a, b) => b.id - a.id);
                break;
            case 'rating':
                filteredGames.sort((a, b) => b.rating - a.rating);
                break;
            case 'name':
                filteredGames.sort((a, b) => a.title.localeCompare(b.title));
                break;
            default: // relevance
                // 保持原始顺序
                break;
        }

        // 更新搜索统计
        const searchTime = (Math.random() * 0.5 + 0.1).toFixed(1);
        searchStats.innerHTML = `
            <span><i class="fas fa-search"></i> Found ${filteredGames.length} games</span>
            <span><i class="fas fa-clock"></i> Search took ${searchTime}s</span>
        `;

        // 显示/隐藏无结果提示
        if (filteredGames.length === 0) {
            noResultsSection.style.display = 'block';
            resultsGrid.innerHTML = '';
        } else {
            noResultsSection.style.display = 'none';
            displayResults(filteredGames);
        }

        // 更新URL
        updateURL(query, selectedCategory, selectedSort, 1);
    }

    // 显示搜索结果
    function displayResults(games) {
        const gamesPerPage = 12;
        const startIndex = (page - 1) * gamesPerPage;
        const endIndex = startIndex + gamesPerPage;
        const pageGames = games.slice(startIndex, endIndex);

        resultsGrid.innerHTML = pageGames.map(game => `
            <div class="game-card">
                <div class="game-image">
                    <img src="${game.image}" alt="${game.title}">
                    <div class="game-overlay">
                        <a href="../game-template.html?id=${game.id}" class="play-button">Play Now</a>
                    </div>
                </div>
                <div class="game-info">
                    <h3>${game.title}</h3>
                    <p>${game.description}</p>
                    <div class="game-meta">
                        <span><i class="fas fa-users"></i> ${game.players}</span>
                        <span><i class="fas fa-star"></i> ${game.rating}</span>
                    </div>
                </div>
            </div>
        `).join('');

        // 更新分页
        updatePagination(games.length, gamesPerPage);
    }

    // 更新分页
    function updatePagination(totalGames, gamesPerPage) {
        const totalPages = Math.ceil(totalGames / gamesPerPage);
        const pageNumbers = document.querySelector('.page-numbers');
        
        let paginationHTML = '';
        
        // 上一页按钮
        document.querySelector('.page-btn:first-child').disabled = page <= 1;
        
        // 页码按钮
        for (let i = 1; i <= totalPages; i++) {
            if (i === 1 || i === totalPages || (i >= page - 1 && i <= page + 1)) {
                paginationHTML += `
                    <button class="page-btn ${i === page ? 'active' : ''}" 
                            onclick="updatePage(${i})">${i}</button>
                `;
            } else if (i === page - 2 || i === page + 2) {
                paginationHTML += '<span>...</span>';
            }
        }
        
        pageNumbers.innerHTML = paginationHTML;
        
        // 下一页按钮
        document.querySelector('.page-btn:last-child').disabled = page >= totalPages;
    }

    // 更新URL
    function updateURL(query, category, sort, page) {
        const params = new URLSearchParams();
        if (query) params.set('q', query);
        if (category !== 'all') params.set('category', category);
        if (sort !== 'relevance') params.set('sort', sort);
        if (page > 1) params.set('page', page);
        
        const newURL = `${window.location.pathname}${params.toString() ? '?' + params.toString() : ''}`;
        window.history.pushState({}, '', newURL);
    }

    // 更新页面
    window.updatePage = function(newPage) {
        const query = searchInput.value;
        const category = document.querySelector('.category-btn.active').dataset.category;
        const sort = sortSelect.value;
        updateURL(query, category, sort, newPage);
        window.location.reload();
    };

    // 事件监听器
    searchButton.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', function(e) {
        if (e.key === 'Enter') performSearch();
    });
    
    sortSelect.addEventListener('change', performSearch);
    
    categoryButtons.forEach(button => {
        button.addEventListener('click', function() {
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            performSearch();
        });
    });

    // 初始化搜索
    if (searchQuery || category !== 'all' || sort !== 'relevance' || page > 1) {
        performSearch();
    }
}); 