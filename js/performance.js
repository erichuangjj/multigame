// 性能优化工具类
class PerformanceOptimizer {
    constructor() {
        this.imageCache = new Map();
        this.gameCache = new Map();
        this.pageCache = new Map();
        this.init();
    }

    init() {
        this.initLazyLoading();
        this.initPageCache();
        this.initGameCache();
        this.cleanupCache();
    }

    // 图片懒加载
    initLazyLoading() {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                        observer.unobserve(img);
                    }
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            observer.observe(img);
        });
    }

    // 页面缓存
    initPageCache() {
        window.addEventListener('beforeunload', () => {
            const pageContent = document.documentElement.outerHTML;
            const url = window.location.href;
            this.pageCache.set(url, {
                content: pageContent,
                timestamp: Date.now()
            });
            localStorage.setItem('pageCache', JSON.stringify(Array.from(this.pageCache.entries())));
        });
    }

    // 游戏缓存
    initGameCache() {
        const cachedGames = localStorage.getItem('gameCache');
        if (cachedGames) {
            this.gameCache = new Map(JSON.parse(cachedGames));
        }
    }

    // 缓存游戏数据
    async cacheGame(gameId, gameData) {
        this.gameCache.set(gameId, {
            data: gameData,
            timestamp: Date.now()
        });
        localStorage.setItem('gameCache', JSON.stringify(Array.from(this.gameCache.entries())));
    }

    // 获取缓存的游戏数据
    getCachedGame(gameId) {
        return this.gameCache.get(gameId)?.data;
    }

    // 预加载游戏资源
    async preloadGameResources(gameId) {
        const game = this.getCachedGame(gameId);
        if (!game) return;

        // 预加载图片
        if (game.images) {
            game.images.forEach(imageUrl => {
                const img = new Image();
                img.src = imageUrl;
            });
        }

        // 预加载脚本
        if (game.scripts) {
            game.scripts.forEach(scriptUrl => {
                const script = document.createElement('script');
                script.src = scriptUrl;
                script.async = true;
                document.head.appendChild(script);
            });
        }
    }

    // 清理过期缓存
    cleanupCache() {
        const MAX_AGE = 24 * 60 * 60 * 1000; // 24小时
        const now = Date.now();

        // 清理页面缓存
        for (const [url, data] of this.pageCache.entries()) {
            if (now - data.timestamp > MAX_AGE) {
                this.pageCache.delete(url);
            }
        }

        // 清理游戏缓存
        for (const [gameId, data] of this.gameCache.entries()) {
            if (now - data.timestamp > MAX_AGE) {
                this.gameCache.delete(gameId);
            }
        }

        // 更新localStorage
        localStorage.setItem('pageCache', JSON.stringify(Array.from(this.pageCache.entries())));
        localStorage.setItem('gameCache', JSON.stringify(Array.from(this.gameCache.entries())));
    }
}

// 创建性能优化器实例
const performanceOptimizer = new PerformanceOptimizer();

// 导出性能优化器
export default performanceOptimizer; 