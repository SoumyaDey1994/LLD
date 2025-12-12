class LegacyButton {
  display() {
    console.log(`Display Legacy Button`);
  }

  attachClick(cb) {
    console.log(`Attaching click handler to legacy button`);
    this._onClick = cb;
  }

  simulateClick() {
    this._onClick && this._onClick();
  }
}

class ButtonAdapter {
  constructor(button) {
    this.button = button;
  }

  render() {
    this.button?.display();
  }

  onClick(cb) {
    this.button.attachClick(cb);
  }

  click() {
    this.button.simulateClick();
  }
}

const legacyBtn = new LegacyButton();

const btnAdapter = new ButtonAdapter(legacyBtn);

btnAdapter.onClick(() => console.log(`Button Clicked`));
btnAdapter.render();
btnAdapter.click();
