class Button {
  constructor(type, text) {
    this.type = type;
    this.text = text;
    this.styles = {};
  }

  render() {
    console.log(`Button type: ${this.type}, text: ${this.text}`);
    console.log(`Button styles: `, this.styles);
  }
}

class IconButton {
  constructor(button, icon) {
    this.button = button;
    this.icon = icon;
  }

  render() {
    this.button.render();
    console.log(`Icon: `, this.icon);
  }
}

function withStyles(button, styles) {
  const { color, background, padding, border } = styles;
  button.styles = {
    ...button.styles,
    color,
    background,
    padding,
    border,
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

function withIcon(button, icon) {
  return new IconButton(button, icon);
}

let btn = new Button("submit", "Play");
btn = withStyles(btn, {
  color: "black",
  background: "white",
  border: "1px solid grey",
  padding: "10px auto",
});

btn = withHoverEffect(btn, {
  hoverColor: "white",
  hoverBackground: "black",
});

btn = withIcon(btn, "play.svg");
btn.render();
