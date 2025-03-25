// 用户系统功能实现
class UserSystem {
    constructor() {
        this.currentUser = null;
        this.favorites = new Set();
        this.init();
    }

    init() {
        // 从localStorage加载用户数据
        const userData = localStorage.getItem('userData');
        if (userData) {
            const data = JSON.parse(userData);
            this.currentUser = data.user;
            this.favorites = new Set(data.favorites);
        }

        // 初始化UI
        this.updateUI();
    }

    // 用户登录
    login(username, password) {
        // 这里应该调用后端API进行验证
        // 示例实现
        if (username && password) {
            this.currentUser = {
                id: 1,
                username: username,
                email: `${username}@example.com`
            };
            this.saveData();
            this.updateUI();
            return true;
        }
        return false;
    }

    // 用户注册
    register(username, email, password) {
        // 这里应该调用后端API进行注册
        // 示例实现
        if (username && email && password) {
            this.currentUser = {
                id: 1,
                username: username,
                email: email
            };
            this.saveData();
            this.updateUI();
            return true;
        }
        return false;
    }

    // 用户登出
    logout() {
        this.currentUser = null;
        this.saveData();
        this.updateUI();
    }

    // 添加游戏到收藏夹
    addToFavorites(gameId) {
        if (this.currentUser) {
            this.favorites.add(gameId);
            this.saveData();
            this.updateUI();
            return true;
        }
        return false;
    }

    // 从收藏夹移除游戏
    removeFromFavorites(gameId) {
        if (this.currentUser) {
            this.favorites.delete(gameId);
            this.saveData();
            this.updateUI();
            return true;
        }
        return false;
    }

    // 检查游戏是否在收藏夹中
    isFavorite(gameId) {
        return this.favorites.has(gameId);
    }

    // 保存数据到localStorage
    saveData() {
        localStorage.setItem('userData', JSON.stringify({
            user: this.currentUser,
            favorites: Array.from(this.favorites)
        }));
    }

    // 更新UI显示
    updateUI() {
        const loginBtn = document.querySelector('.login-btn');
        const registerBtn = document.querySelector('.register-btn');
        const userMenu = document.querySelector('.user-menu');
        const favoriteBtn = document.querySelector('.favorite-btn');

        if (this.currentUser) {
            // 已登录状态
            if (loginBtn) loginBtn.style.display = 'none';
            if (registerBtn) registerBtn.style.display = 'none';
            if (userMenu) {
                userMenu.style.display = 'flex';
                userMenu.querySelector('.username').textContent = this.currentUser.username;
            }
            if (favoriteBtn) {
                favoriteBtn.classList.toggle('active', this.isFavorite(currentGameId));
            }
        } else {
            // 未登录状态
            if (loginBtn) loginBtn.style.display = 'block';
            if (registerBtn) registerBtn.style.display = 'block';
            if (userMenu) userMenu.style.display = 'none';
            if (favoriteBtn) favoriteBtn.classList.remove('active');
        }
    }
}

// 创建用户系统实例
const userSystem = new UserSystem();

// 登录表单处理
const loginForm = document.querySelector('.login-form');
if (loginForm) {
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = this.querySelector('input[name="username"]').value;
        const password = this.querySelector('input[name="password"]').value;
        
        if (userSystem.login(username, password)) {
            alert('登录成功！');
            window.location.reload();
        } else {
            alert('登录失败，请检查用户名和密码！');
        }
    });
}

// 注册表单处理
const registerForm = document.querySelector('.register-form');
if (registerForm) {
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const username = this.querySelector('input[name="username"]').value;
        const email = this.querySelector('input[name="email"]').value;
        const password = this.querySelector('input[name="password"]').value;
        
        if (userSystem.register(username, email, password)) {
            alert('注册成功！');
            window.location.reload();
        } else {
            alert('注册失败，请检查输入信息！');
        }
    });
}

// 登出按钮处理
const logoutBtn = document.querySelector('.logout-btn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', function() {
        userSystem.logout();
        window.location.reload();
    });
}

// 收藏按钮处理
const favoriteBtn = document.querySelector('.favorite-btn');
if (favoriteBtn) {
    favoriteBtn.addEventListener('click', function() {
        if (!userSystem.currentUser) {
            alert('请先登录！');
            return;
        }
        
        const gameId = parseInt(new URLSearchParams(window.location.search).get('id'));
        if (userSystem.isFavorite(gameId)) {
            userSystem.removeFromFavorites(gameId);
            this.classList.remove('active');
        } else {
            userSystem.addToFavorites(gameId);
            this.classList.add('active');
        }
    });
} 