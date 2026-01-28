class Tea {
  constructor() {
    this.price = 10;
    this.description = "Plain Tea";
  }

  getPrice() {
    return this.price;
  }

  getDescription() {
    return this.description;
  }
}

class MilkTea {
  constructor(tea) {
    this.tea = tea;
  }

  getPrice() {
    return 5 + this.tea.getPrice();
  }

  getDescription() {
    return this.tea.getDescription() + " With Milk";
  }
}

class LemonTea {
  constructor(tea) {
    this.tea = tea;
  }

  getPrice() {
    return 3 + this.tea.getPrice();
  }

  getDescription() {
    return this.tea.getDescription() + " With Lime";
  }
}

class JaggeryTea {
  constructor(tea) {
    this.tea = tea;
  }

  getPrice() {
    return 2 + this.tea.getPrice();
  }

  getDescription() {
    return this.tea.getDescription() + " With Jaggery";
  }
}

class GingerTea {
  constructor(tea) {
    this.tea = tea;
  }

  getPrice() {
    return 3 + this.tea.getPrice();
  }

  getDescription() {
    return this.tea.getDescription() + " With Ginger";
  }
}

const tea = new Tea();
const milkTea = new MilkTea(tea);
const ginerJaggeryTea = new JaggeryTea(new GingerTea(milkTea));

console.log(
  ginerJaggeryTea.getDescription() + " : " + ginerJaggeryTea.getPrice(),
);

const gingerLemonTea = new GingerTea(new LemonTea(tea));
console.log(
  gingerLemonTea.getDescription() + " : " + gingerLemonTea.getPrice(),
);
