"use strict";
// let myMoney = 50;
// // myMoney = 'Fifty Taka'; --> we cannot do this in TS
// myMoney = 10;
// // myMoney = false;
// let age :number = 50;
let age;
age = 50;
age = 150;
let club = 'Manchester United';
console.log(club);
console.log(age);
// const isFamous: boolean;
const isFamous = false;
console.log(isFamous);
// function
function add(num1, num2) {
    return num1 + num2;
}
add(2, 76);
// add('adam', 'sand');
/*
function add(num1: number | string, num2: number | string) {
    return num1 + num2;
}

add(2, 76);
add('adam', 'sand');
*/
function fullName(firstName, lastName) {
    return firstName + ' ' + lastName;
}
const user1 = fullName('Marry', 'Jane');
console.log(user1);
function doubleItAndConsole(num) {
    const result = num * 2;
    console.log(result);
}
const output = doubleItAndConsole(10);
console.log(output);
// Arrow function
let multiply2;
multiply2 = (x, y) => x * y;
console.log(multiply2(25, 8));
const multiply = (x, y) => x * y;
console.log(multiply(25, 6));
// Array
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.push(11);
// numbers.push('Twenty Two'); --> we cannot do that in TS
const friends = [
    'Avijit',
    'Taisir',
    'Afridi',
    'Fahim',
    'Shimul',
    'Saifullah',
];
let megaName = '';
for (let i = 0; i < friends.length; i++) {
    const friend = friends[i];
    if (friend.length > megaName.length) {
        megaName = friend;
    }
}
console.log('Friend with the largestName', megaName);
// Object
const friend = {
    name: 'Samuel Johnson',
    age: 61,
};
friend.age = 57;
// friend.age = 'Thirty Two'; --> We cnannot do thgis in TS
// let player: {
// 	club: string;
// 	salary: number;
// };
// player = {
// 	club: 'Manchester United',
// 	salary: 454000,
// };
let player = {
    club: 'Manchester United',
    salary: 454000,
};
const messi = {
    name: 'Leo Messi',
    club: 'PSG',
    salary: 4500000,
    wife: 'Some Name',
    isPlaying: true,
};
const ronaldo = {
    name: 'Christiano Ronaldo',
    club: 'MANU',
    salary: 6000000,
    isPlaying: true,
};
function getBonus(player) {
    return player.salary * 0.1;
}
const poorPLayer = {
    salary: 10000,
};
getBonus(poorPLayer);
getBonus(messi);
// Class in TS
class Person {
    constructor(name, father) {
        this.name = name;
        this._partner = name;
        this.fatherName = father;
    }
    getName() {
        return this.name;
    }
}
const sam = new Person('Samuel', 'David');
console.log('Name:', sam.name, sam.fatherName);
sam.name = 'Ben'; // We can update the value of a class
const samName = sam.getName();
// sam.fatherName = 'Ben Carson' --> We cannot do this if ity is readonly
