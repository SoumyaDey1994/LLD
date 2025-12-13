class Button {
  constructor(config) {
    this.config = config;
  }

  render() {
    console.log(`Rendering Button having below attributes: `);
    console.log(`Type: ${this.config.type}`);
    console.log(`Text: ${this.config.text}`);
    console.log(`Icon: ${this.config.icon}`);
    console.log(`Styles: ${JSON.stringify(this.config.styles)}`);
  }
}

class ButtonBuilder {
  constructor(type) {
    this.config = {
      type,
      text: "",
      icon: null,
      styles: { hover: {} },
    };
  }

  setText(text) {
    this.config.text = text;
    return this;
  }

  setIcon(icon) {
    this.config.icon = icon;
    return this;
  }

  setStyles(styles) {
    this.config.styles = styles;
    return this;
  }

  setHoverEffects(effects) {
    this.config.styles.hover = { ...effects, cursor: "pointer" };
  }

  build() {
    return new Button(this.config);
  }
}

const buttonBuilder = new ButtonBuilder("submit");
buttonBuilder
  .setText("Save")
  .setIcon("save.svg")
  .setStyles({
    padding: "10px auto",
    color: "white",
    background: "blue",
    border: "1px solid blue",
  })
  .setHoverEffects({
    color: "blue",
    background: "white",
  });

const button = buttonBuilder.build();
button.render();
