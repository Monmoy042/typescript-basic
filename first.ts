// let myMoney = 50;
// // myMoney = 'Fifty Taka'; --> we cannot do this in TS
// myMoney = 10;
// // myMoney = false;

// let age :number = 50;
let age: number;
age = 50;
age = 150;
let club: string = 'Manchester United';
console.log(club);
console.log(age);
// const isFamous: boolean;
const isFamous: boolean = false;
console.log(isFamous);

// function
function add(num1: number, num2: number) {
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

function fullName(firstName: string, lastName: string): string {
	return firstName + ' ' + lastName;
}
const user1 = fullName('Marry', 'Jane');
console.log(user1);

function doubleItAndConsole(num: number): void {
	const result = num * 2;
	console.log(result);
}
const output = doubleItAndConsole(10);
console.log(output);

// Arrow function
let multiply2: (x: number, y: number) => number;
multiply2 = (x, y) => x * y;
console.log(multiply2(25, 8));

const multiply = (x: number, y: number): number => x * y;
console.log(multiply(25, 6));

// Array
const numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
numbers.push(11);
// numbers.push('Twenty Two'); --> we cannot do that in TS
const friends: string[] = [
	'Avijit',
	'Taisir',
	'Afridi',
	'Fahim',
	'Shimul',
	'Saifullah',
];
let megaName: string = '';
for (let i = 0; i < friends.length; i++) {
	const friend: string = friends[i];
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

let player: {
	club: string;
	salary: number;
} = {
	club: 'Manchester United',
	salary: 454000,
};

// Interface
interface Player {
	club: string;
	name: string;
	salary: number;
	wife?: string; // optional value
	isPlaying: boolean;
}
const messi: Player = {
	name: 'Leo Messi',
	club: 'PSG',
	salary: 4500000,
	wife: 'Some Name',
	isPlaying: true,
};
const ronaldo: Player = {
	name: 'Christiano Ronaldo',
	club: 'MANU',
	salary: 6000000,
	isPlaying: true,
};

function getBonus(player: { salary: number }) {
	return player.salary * 0.1;
}
const poorPLayer = {
	salary: 10000,
};
getBonus(poorPLayer);
getBonus(messi);

// Class in TS
class Person {
	name: string;
	private _partner: string;
	readonly fatherName: string;
	constructor(name: string, father: string) {
		this.name = name;
		this._partner = name;
		this.fatherName = father;
	}
	getName(): string {
		return this.name;
	}
}

const sam = new Person('Samuel', 'David');
console.log('Name:', sam.name, sam.fatherName);
sam.name = 'Ben'; // We can update the value of a class
const samName: string = sam.getName();
// sam.fatherName = 'Ben Carson' --> We cannot do this if ity is readonly
