class Tea {
  constructor() {
    this.price = 10;
    this.description = "Milk Tea";
  }

  getDescription() {
    return this.description;
  }

  getPrice() {
    return this.price;
  }
}

class JaggeryTea {
  constructor(tea) {
    this.tea = tea;
  }

  getDescription() {
    return "Jaggery + " + this.tea.getDescription();
  }

  getPrice() {
    return 5 + this.tea.getPrice();
  }
}

class GingerTea {
  constructor(tea) {
    this.tea = tea;
  }

  getDescription() {
    return "Ginger + " + this.tea.getDescription();
  }

  getPrice() {
    return 2 + this.tea.getPrice();
  }
}

class ElaichiTea {
  constructor(tea) {
    this.tea = tea;
  }

  getDescription() {
    return "Elaichi + " + this.tea.getDescription();
  }

  getPrice() {
    return 3 + this.tea.getPrice();
  }
}

let tea = new Tea();

tea = new GingerTea(tea);
tea = new JaggeryTea(tea);
console.log(`Description: ${tea.getDescription()}`);
console.log(`Price: ${tea.getPrice()}`);

tea = new ElaichiTea(tea);
console.log(`Description: ${tea.getDescription()}`);
console.log(`Price: ${tea.getPrice()}`);

tea = new JaggeryTea(tea);
tea = new ElaichiTea(tea);
console.log(`Description: ${tea.getDescription()}`);
console.log(`Price: ${tea.getPrice()}`);
