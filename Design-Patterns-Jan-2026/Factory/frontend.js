const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

class LightThemeButtoon {
  constructor() {
    this.background = "blue";
    this.color = "white";
  }

  render() {
    console.log(
      `Rendering button of light theme: color:${this.color}, background:${this.background}`,
    );
  }
}

class DarkThemeButtoon {
  constructor() {
    this.background = "white";
    this.color = "blue";
  }

  render() {
    console.log(
      `Rendering button of dark theme: color:${this.color}, background:${this.background}`,
    );
  }
}

class ButtonFactory {
  static createButton(theme) {
    switch (theme.toLowerCase()) {
      case THEME.LIGHT:
        return new LightThemeButtoon();
      case THEME.DARK:
        return new DarkThemeButtoon();
      default:
        throw new Error(`Unsupported theme ${theme}`);
    }
  }
}

const lightBtn = ButtonFactory.createButton("Light");
const darkBtn = ButtonFactory.createButton("Dark");

lightBtn.render();
darkBtn.render();
