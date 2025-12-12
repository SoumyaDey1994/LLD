class LightThemeButton {
  render() {
    console.log(`Rendering Button for light theme`);
  }
}

class LightThemeDropdown {
  render() {
    console.log(`Rendering Dropdown for light theme`);
  }
}

class DarkThemeButton {
  render() {
    console.log(`Rendering Button for dark theme`);
  }
}

class DarkThemeDropdown {
  render() {
    console.log(`Rendering Dropdown for dark theme`);
  }
}

class LightThemeFactory {
  getButton() {
    return new LightThemeButton();
  }

  getDropdown() {
    return new LightThemeDropdown();
  }
}

class DarkThemeFactory {
  getButton() {
    return new DarkThemeButton();
  }

  getDropdown() {
    return new DarkThemeDropdown();
  }
}

class UiComponentFactory {
  static getThemeFactory(theme) {
    switch (theme.toLowerCase()) {
      case "light":
        return new LightThemeFactory();
      case "dark":
        return new DarkThemeFactory();
      default:
        throw new Error(`Unknown theme: ${theme}`);
    }
  }
}

const lightTheme = UiComponentFactory.getThemeFactory("light");
const darkTheme = UiComponentFactory.getThemeFactory("dark");

let button = lightTheme.getButton();
let dropdown = lightTheme.getDropdown();

button.render();
dropdown.render();

button = darkTheme.getButton();
dropdown = darkTheme.getDropdown();

button.render();
dropdown.render();
