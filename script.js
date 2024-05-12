const account = {
    balance: 0,
    transactions: [],

    deposit(amount) {
        this.balance += amount;
        this.transactions.push({ type: 'deposit', amount: amount });
        console.log(`Deposit of $${amount} successful. Current balance: $${this.balance}`);
    },

    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds!");
            return;
        }
        this.balance -= amount;
        this.transactions.push({ type: 'withdrawal', amount: amount });
        console.log(`Withdrawal of $${amount} successful. Current balance: $${this.balance}`);
    },

    getTransactionHistory() {
        console.log("Transaction History:");
        this.transactions.forEach((transaction, index) => {
            console.log(`${index + 1}. Type: ${transaction.type}, Amount: $${transaction.amount}`);
        });
    }
};

account.deposit(100);
account.withdraw(50);
account.withdraw(80);
account.getTransactionHistory();
//1

const user = {
    name: 'John',
    age: 30,
    hobby: 'reading',
    premium: true,
};

const {name, age, hobby, premium} = user;
const updatedUser = { ...user, mood: 'happy', hobby: 'skydiving', premium: false };

for (const[key, value] of Object.entries(updatedUser)) {
    console.log(`${key}: ${value}`)
}
//2


function countProps({ ...obj }) {
    return Object.keys(obj).length;
}

const userOne = {
    name: 'John',
    age: 30,
    hobby: 'reading',
};

console.log(countProps(userOne));
//3

function findBestEmployee(employees) {
    let maxTasks = 0;
    let bestEmployee = '';

    for (const [employee, tasks] of Object.entries(employees)) {
        if (tasks > maxTasks) {
            maxTasks = tasks;
            bestEmployee = employee;
        }
    }

    return bestEmployee;
}

const employees = {
    John: 10,
    Bob: 20,
    Alice: 15
};

console.log(findBestEmployee(employees));
//4

function getAllPropValues(arr, prop) {
    const propValues = [];

    for (const { [prop]: value } of arr) {
        if (value !== undefined) {
            propValues.push(value);
        }
    }

    return propValues;
}

const products = [
    { name: 'apple', price: 10 },
    { name: 'banana', price: 15 },
    { name: 'orange', price: 20 }
];

console.log(getAllPropValues(products, 'name'));
console.log(getAllPropValues(products, 'price'));
//5

function calculateTotalPrice(allProducts, productName) {
    let totalPrice = 0;

    for (const { name, price, quantity } of allProducts) {
        if (name === productName) {
            totalPrice += price * quantity;
        }
    }

    return totalPrice;
}

const productsTwo = [
    { name: 'apple', price: 10, quantity: 2 },
    { name: 'banana', price: 15, quantity: 3 },
    { name: 'orange', price: 20, quantity: 1 }
];

console.log(calculateTotalPrice(productsTwo, 'apple'));
console.log(calculateTotalPrice(productsTwo, 'banana'));
console.log(calculateTotalPrice(productsTwo, 'orange'));
//6