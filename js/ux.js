// 用户体验优化工具类
class UXOptimizer {
    constructor() {
        this.transitions = new Map();
        this.touchEvents = {
            startX: 0,
            startY: 0
        };
        this.feedbackQueue = [];
        this.init();
    }

    init() {
        // 初始化过渡动画
        this.initTransitions();
        // 初始化触摸事件
        this.initTouchEvents();
        // 初始化用户反馈
        this.initFeedback();
        // 初始化移动端优化
        this.initMobileOptimizations();
    }

    // 初始化过渡动画
    initTransitions() {
        // 页面加载过渡
        document.body.style.opacity = '0';
        window.addEventListener('load', () => {
            document.body.style.transition = 'opacity 0.5s ease';
            document.body.style.opacity = '1';
        });

        // 滚动动画
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1
        });

        document.querySelectorAll('.animate-on-scroll').forEach(el => {
            observer.observe(el);
        });
    }

    // 初始化触摸事件
    initTouchEvents() {
        document.addEventListener('touchstart', (e) => {
            this.touchEvents.startX = e.touches[0].clientX;
            this.touchEvents.startY = e.touches[0].clientY;
        });

        document.addEventListener('touchend', (e) => {
            const deltaX = e.changedTouches[0].clientX - this.touchEvents.startX;
            const deltaY = e.changedTouches[0].clientY - this.touchEvents.startY;

            // 检测水平滑动
            if (Math.abs(deltaX) > Math.abs(deltaY) && Math.abs(deltaX) > 50) {
                if (deltaX > 0) {
                    history.back();
                } else {
                    history.forward();
                }
            }
        });
    }

    // 初始化用户反馈
    initFeedback() {
        // 添加点击波纹效果
        document.querySelectorAll('.ripple').forEach(button => {
            button.addEventListener('click', (e) => {
                this.addRippleEffect(e, button);
            });
        });

        // 添加加载反馈
        this.initLoadingFeedback();
    }

    // 添加涟漪效果
    addRippleEffect(event, element) {
        const rect = element.getBoundingClientRect();
        const ripple = document.createElement('span');
        ripple.className = 'ripple-effect';
        
        const diameter = Math.max(element.clientWidth, element.clientHeight);
        ripple.style.width = ripple.style.height = `${diameter}px`;
        
        ripple.style.left = `${event.clientX - rect.left - diameter / 2}px`;
        ripple.style.top = `${event.clientY - rect.top - diameter / 2}px`;
        
        element.appendChild(ripple);
        
        ripple.addEventListener('animationend', () => {
            ripple.remove();
        });
    }

    // 初始化移动端优化
    initMobileOptimizations() {
        // 修复移动端100vh问题
        const vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty('--vh', `${vh}px`);

        window.addEventListener('resize', () => {
            const vh = window.innerHeight * 0.01;
            document.documentElement.style.setProperty('--vh', `${vh}px`);
        });

        // 优化滚动性能
        this.optimizeScroll();
    }

    // 优化滚动性能
    optimizeScroll() {
        let ticking = false;
        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    // 更新滚动相关的UI元素
                    this.updateScrollUI();
                    ticking = false;
                });
                ticking = true;
            }
        });
    }

    updateScrollUI() {
        // 更新返回顶部按钮可见性
        const backToTop = document.querySelector('.back-to-top');
        if (backToTop) {
            backToTop.style.display = window.scrollY > 500 ? 'block' : 'none';
        }

        // 更新导航栏样式
        const nav = document.querySelector('.main-nav');
        if (nav) {
            nav.classList.toggle('scrolled', window.scrollY > 50);
        }
    }

    initLoadingFeedback() {
        // 添加全局加载指示器
        const loader = document.createElement('div');
        loader.className = 'global-loader';
        loader.innerHTML = '<div class="loader-spinner"></div>';
        document.body.appendChild(loader);

        // 监听Ajax请求
        this.interceptAjaxRequests();
    }

    interceptAjaxRequests() {
        const originalXHR = window.XMLHttpRequest;
        const self = this;
        
        window.XMLHttpRequest = function() {
            const xhr = new originalXHR();
            const loader = document.querySelector('.global-loader');
            
            xhr.addEventListener('loadstart', () => {
                loader.classList.add('active');
            });
            
            xhr.addEventListener('loadend', () => {
                loader.classList.remove('active');
            });
            
            return xhr;
        };
    }

    showToast(message, type = 'info') {
        const toast = document.createElement('div');
        toast.className = `toast toast-${type}`;
        toast.textContent = message;
        
        document.body.appendChild(toast);
        
        setTimeout(() => {
            toast.classList.add('show');
            setTimeout(() => {
                toast.classList.remove('show');
                setTimeout(() => {
                    toast.remove();
                }, 300);
            }, 3000);
        }, 100);
    }
}

// 创建用户体验优化器实例
const uxOptimizer = new UXOptimizer();

// 导出用户体验优化器
export default uxOptimizer; 