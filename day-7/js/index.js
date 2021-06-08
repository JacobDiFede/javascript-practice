// primitve 
const title = 'My First App';
const version = 1.0;
const production = false;

let username = '';
let score = 0;
let isVip = true;


// grouping/ compound/ complex
const array = [];
const object = {};

const users = [];

const user0 = {
    firstName: 'James',
    lastName: 'James',
    isVip: true
};

const user1 = {
    firstName: 'Joan',
    lastName: 'Jones',
    isVip: true
};

const user2 = {
    firstName: 'Jimmy',
    lastName: 'James',
    isVip: true
};

const user3 = user0;
users.push(user0);
users.push(user1);
users.push(user2);
users.push(user3);
const removedUsers = users.splice(0, 0, user3, user2);





console.log(users);


for (let property in user1) {
    console.log(property);
    console.log(user1[property])
}

let i = 0; 

do {
    console.log('i', i);
    i++;
} while(i < 4)

while(i < 4) {
    console.log('i', i);
    i++;
}

const whatIsReturned = users.map(function(user) {
    console.log(users);
})

console.log(whatIsReturned);