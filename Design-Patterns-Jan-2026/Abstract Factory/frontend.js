const THEME = {
  LIGHT: "light",
  DARK: "dark",
};

class LightThemeButton {
  constructor() {
    this.background = "black";
    this.color = "white";
  }

  render() {
    console.log(
      `Rendering Button in Light Theme - color:${this.color}, background:${this.background}`,
    );
  }
}

class LightThemeDropdown {
  constructor() {
    this.background = "black";
    this.color = "white";
  }

  render() {
    console.log(
      `Rendering Dropdown in Light Theme - color:${this.color}, background:${this.background}`,
    );
  }
}

class DarkThemeButton {
  constructor() {
    this.background = "white";
    this.color = "black";
  }

  render() {
    console.log(
      `Rendering Button in Dark Theme - color:${this.color}, background:${this.background}`,
    );
  }
}

class DarkThemeDropdown {
  constructor() {
    this.background = "white";
    this.color = "black";
  }

  render() {
    console.log(
      `Rendering Dropdown in Dark Theme - color:${this.color}, background:${this.background}`,
    );
  }
}

class LightThemeComponents {
  getButton() {
    return new LightThemeButton();
  }

  getDropdown() {
    return new LightThemeDropdown();
  }
}

class DarkThemeComponents {
  getButton() {
    return new DarkThemeButton();
  }

  getDropdown() {
    return new DarkThemeDropdown();
  }
}

class ThemeFactory {
  static getThemeProvider(theme) {
    switch (theme.toLowerCase()) {
      case THEME.LIGHT:
        return new LightThemeComponents();
      case THEME.DARK:
        return new DarkThemeComponents();
      default:
        throw new Error("Unsupported theme: ", theme);
    }
  }
}

const lightThemeComponent = ThemeFactory.getThemeProvider("Light");
let button = lightThemeComponent.getButton();
button.render();

let dropdown = lightThemeComponent.getDropdown();
dropdown.render();

const darkThemeComponent = ThemeFactory.getThemeProvider("Dark");
button = darkThemeComponent.getButton();
button.render();

dropdown = darkThemeComponent.getDropdown();
dropdown.render();
