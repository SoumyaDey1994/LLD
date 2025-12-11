const THEME = {
  LIGHT: "light",
  DARK: "dark",
  SYSTEM: "system",
};

class LightThemeButton {
  render() {
    console.log("Rendering Light Theme Button");
  }
}

class DarkThemeButton {
  render() {
    console.log("Rendering Dark Theme Button");
  }
}

class SystemThemeButton {
  render() {
    console.log("Rendering Button as per System Theme");
  }
}

class ButtonFactory {
  static createButton(theme) {
    switch (theme.toLowerCase()) {
      case THEME.LIGHT:
        return new LightThemeButton();
      case THEME.DARK:
        return new DarkThemeButton();
      case THEME.SYSTEM:
        return new SystemThemeButton();
      default:
        throw Error(`Unknown theme ${theme}`);
    }
  }
}

const lightBtn = ButtonFactory.createButton("light");
const darkBtn = ButtonFactory.createButton("dark");
const systemBtn = ButtonFactory.createButton("system");

lightBtn.render();
darkBtn.render();
systemBtn.render();
