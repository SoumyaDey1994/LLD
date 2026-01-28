class Button {
  constructor(type, text) {
    this.type = type;
    this.text = text;
    this.styles = {};
  }

  render() {
    console.log(`Rendering Button: ${this.text}`);
    console.log(`Effects: `, this.styles);
  }
}

class IconButton {
  constructor(button) {
    this.button = button;
    this.icon = null;
  }

  setIcon(icon) {
    this.icon = icon;
  }

  render() {
    console.log(`Button Icon: ${this.icon}`);
    this.button.render();
  }
}

function withStyles(button, styles) {
  const { color, background, width, margin, padding } = styles;

  button.styles = {
    ...button.styles,
    width,
    margin,
    padding,
    background,
    color,
  };

  return button;
}

function withHoverEffect(button, hoverEffects) {
  const { hoverColor, hoverBackground } = hoverEffects;

  button.styles = {
    ...button.styles,
    hover: {
      color: hoverColor,
      background: hoverBackground,
      cursor: "pointer",
    },
  };

  return button;
}

let btn = new Button("button", "Run");
btn = withStyles(btn, {
  width: "200px",
  color: "white",
  background: "blue",
  margin: "5px",
  padding: "10px",
});

btn = withHoverEffect(btn, {
  hoverColor: "blue",
  hoverBackground: "white",
});
btn.render();

const btnWithIcon = new IconButton(btn);
btnWithIcon.setIcon(`Play.svg`);
btnWithIcon.render();
