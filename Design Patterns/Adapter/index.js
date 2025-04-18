/**
 * The Adapter Pattern is used to convert the interface of a class (or data) into another interface that a client expects. 
 * It allows incompatible interfaces to work together without modifying their source code.
 */

const networkResponse = [
    {category: 'Sales', value: 25000},
    {category: 'Marketing', value: 7000},
    {category: 'Payroll', value: 3000},
    {category: 'Profit', value: 15000}
]

// const targetOutput = {
//     labels: ['Sales', 'Marketing', 'Payroll', 'Profit'],
//     values: [25000, 7000, 3000, 15000]
// }

class ChartDataAdapter {
    constructor(input) {
        this.input = input;
    }

    getChartData() {
        const labels = [], values = [];
        this.input.forEach(item => {
            labels.push(item.category);
            values.push(item.value);
        })

        return {
            labels,
            values
        }
    }
}

function drawChart(data) {
    console.log("Drawing chart with data: " );
    console.log(data);
}

/**
 * Cleint code
 */
const adapter = new ChartDataAdapter(networkResponse);
const chartData = adapter.getChartData();

drawChart(chartData);


