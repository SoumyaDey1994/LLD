// Singleton class ThemeManager
class ThemeManager {
    constructor() {
        if(ThemeManager.instance)
            throw new Error(`Please use getInstance() menthod`);
        
        this.theme = 'light';
        ThemeManager.instance = this;
    }

    setTheme(theme) {
        this.theme = theme;
    }

    getTheme() {
        return this.theme;
    }

    static getInstance() {
        if(!this.instance) {
            ThemeManager.instance = new ThemeManager();
        }
        return ThemeManager.instance;
    }
}

const themeManager = ThemeManager.getInstance();
console.log(`Default theme: ${themeManager.getTheme()}`);

themeManager.setTheme('dark');
console.log(`New theme: ${themeManager.getTheme()}`);

// const manager = new ThemeManager(); // throws error



