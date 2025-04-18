class Tea {
    getDescription() {
        return "Tea";
    }

    getCost() {
        return 10;
    }
}

class MilkTea {
    constructor(tea) {
        this.tea = tea;
    }
    getDescription() {
        return this.tea.getDescription() + " with milk";
    }

    getCost() {
        return this.tea.getCost() + 2;
    }
}

class TeaWithSugar {
    constructor(tea) {
        this.tea = tea;
    }

    getDescription() {
        return this.tea.getDescription() + " with sugar";
    }

    getCost() {
        return this.tea.getCost() + 1;
    }
}

class TeaWithJaggery {
    constructor(tea) {
        this.tea = tea;
    }

    getDescription() {
        return this.tea.getDescription() + " with jaggery";
    }

    getCost() {
        return this.tea.getCost() + 3;
    }
}
/**
 * Cleint code
 */

let tea = new Tea();
console.log(tea.getDescription());
console.log("Cost: " +tea.getCost());

tea = new TeaWithJaggery(new MilkTea(tea));
console.log(tea.getDescription());
console.log("Cost: " +tea.getCost());

let tea2 = new Tea();
tea2 = new TeaWithSugar(tea2);
console.log(tea2.getDescription());
console.log("Cost: " +tea2.getCost());
