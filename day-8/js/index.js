// let variable1 = ["first thing", "second thing", "third thing", "fourth thing", "fifth thing"];
// let variable2 = ["sixth thing", "seventh thing"];
// console.log(variable[0]);
// console.log(variable.length);
// console.log(variable1.slice(0,3));
// console.log(variable1);
// let variable3 = variable1.concat(variable2);
// console.log(variable3);
// console.log(variable1.indexOf("second thing"));
// if(variable1.indexOf("dog") == -1) {
//     console.log("No Dog Found");
// }

const object = {
    age: 40,
    isActive: true,
    firstName: 'Joe',
    lastName: 'Jones',
    'my favorite colors': ['Green'],
    favoriteFoods: ['Pizza', 'Burgers', function() {console.log(this)}],
    style: {
        hairColor: 'brown',
        eyes: 'green',
        Test() {
            console.log(this);
            return 2;
        }
    },
    // greet: greet
    
};
// function greet() {
//     console.log('Hello My Name Is', this.firstName);
// }
// console.log( object['my favorite colors'], object.isActive)
//     object.greet();
//         greet();

//     object.favoriteFoods[2]()

    function makeSandwich() {
        const step1 = 'get bread';
        const step2 = 'put meat';
        const step3 = 'squeeze mustard'
        const step4 = 'place top bread';
        return {};
    }

    makeSandwich();
    makeSandwich();
    makeSandwich();

    class User {
        element = document.createElement('li');
        constructor(age, isActive, firstName, lastName) {
            this.age = age;
            this.isActive = isActive;
            this.firstName = firstName;
            this.lastName = lastName;
            document.body.appendChild(this.element);
            this.element.innerHTML = this.fullName;
        }
        greet() {
            console.log('Hello my name is', this.firstName, this.lastName);
        }

        get fullName() {
            return this.firstName + ' ' + this.lastName;
        }
    }

    const user1 = new User(55, true, 'Max', 'Jones');
    const user2 = new User(33, false, 'Moe', 'James');
    console.log(user1, object);
    user1.greet();
    user2.greet();
    console.log(user1.fullName)

    const dog = {
        name: 'Spot',
        legs: 4,
        furColor: 'brown',
        speak() {
            console.log('woof');
        }
    }
    const li = document.createElement('li');

    li.innerHTML = dog.name;
    li.innerHTML = JSON.stringify(dog);
    document.body.appendChild(li);