// Benefits of Functions

// Names (helpful)
// Reusablility 
// Delay Usage ( callbacks, promises, observables )

// Scope (encapsulation)

let manager = 'main execution context manager';

function dataDepartment() {
    let profit = 100;
    const manager = 'data manager';
    let lastSale= null;
    console.log(manager)
    return function createEmployee(name) {

        const employee = {
            name: name,
            makeSale() {
                console.log('props to ', name, 'for making a sale!')
                profit += 10;
                console.log(lastSale, 'made the last sale');
                lastSale = name;
                return name;
            },
            readProfit() {
                console.log(profit);
                return profit;
            }

        }
            return employee
    }
}

const createEmployee = dataDepartment();
const dataGuy = createEmployee('dataGuy');
const dataEmployee = createEmployee('De');
const thirdEmployee = createEmployee('Te');


dataEmployee.readProfit();
dataEmployee.makeSale();
dataEmployee.readProfit();
dataGuy.readProfit();
dataGuy.makeSale();
dataGuy.readProfit();
thirdEmployee.readProfit();
thirdEmployee.makeSale();
thirdEmployee.readProfit();

const noScope = () => {
    console.log(manager);
    return 1;
}


function greeting(name, age) {
    console.log('hello', name, age);
}
greeting('Jacob', '18')