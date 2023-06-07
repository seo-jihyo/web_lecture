/** main.js */

console.log(location.origin)

const Person = {
	name : 'Yuna'
	, age : 22
	, email: 'kingsmile@sjcu.ac.kr'
	, address : 'Busan'
}

//const [] = []
const { name, age, email, address, phone='010-9999-8877' } = Person 
console.log(`user Name : ${name} 입니다`)
console.log(` ${name} 의 나이는 ${age} 세입니다`)
console.log(` ${name} 의 메일 주소는 ${email} 입니다`)
console.log(address)
console.log('phone ', phone)  // undefined

const { irum, nae } = Person
console.log(irum)
console.log(Person.address) 

console.log('============================')
const keys = Object.keys(Person)
console.log(keys)   //  ['name', 'age', 'email']
console.log(Person['name']) 
console.log(Person['email'])
console.log(Person.email) 

const values = keys.map(key => Person[key]) 
console.log(values)  //['Yuna', 22, 'kingsmile@sjcu.ac.kr']


/*
function Person {
      key ='value'
      ,key = 222
      method = function(){ }
}

const Person = {
	 key : 'value'
      ,key : 222
      , method : function(){
	
	}
}

*/

console.log('--------------------------------')
const numbers = [1, 2, 3, 4, 5, 6 ]
const fruits = [ 'Apple11', 'Banana21', 'Cherry31', 'Orange41' ]

let [x, y] = [10, 20]  // 구조분해할당
let [x1, y2, ...rest] = [10, 20, 3,4,5,6,7]

const [ff, g, h, i, j] = fruits
console.log('============================')
console.log(fruits)   // ['Apple', 'Banana', 'Cherry']
console.log(...fruits); //  Apple Banana Cherry

console.log('*****************************************')
/*
//function toObject(xx, yy, zz) {
	function toObject(xx, yy, ...zz) {
	return {
		xx: xx
		,yy: yy
		,zz: zz
	}
}

function toObject(xx, yy, ...zz) {
	return {
		xx
		,yy
		,zz
	}
}
*/
// arrow function 
const toObject = (xx, yy, ...zz) => ( {	xx	  ,yy	 ,zz } )
console.log(toObject(...fruits));  //  Apple Banana Cherry Orange
/*
xx: "Apple"
yy: "Banana"
zz: (2) ['Cherry', 'Orange']
*/
//console.log(toObject(fruits[0], fruits[1], fruits[2]));

console.log('*****************************************')
const [  ,  z ] = fruits    // Banana
//const [ , ,  z ] = fruits    // Cherry
console.log(ff, z)
console.log('============================')
console.log(fruits)
console.log(ff) //
console.log(i)  //

// .splice()

fruits.splice(2, 0, 'Orange')
console.log(fruits)

console.log('--------------------------------')
//numbers.splice(2, 2)  // 
numbers.splice(2, 0, 99) 
console.log(numbers)

numbers.splice(2, 1, 99) 
console.log(numbers)

// .push()  .unshift()  .reverse()
// 원본 수정됨. 
numbers.push(7)
console.log(numbers)

numbers.unshift(0)
console.log(numbers)

numbers.reverse()
fruits.reverse()

console.log(numbers)
console.log(fruits)


console.log('--------------------------------')
// .includes()
const e = numbers.includes(3)
console.log(e)

const f = fruits.includes('DoYeon')
console.log(f)

console.log('--------------------------------')
// .find(),  .findIndex()
const c = fruits.find( item => {
	return /^C/.test(item)
	//return item
})
console.log(c)

const d = fruits.findIndex( item =>  /^C/.test(item) )
console.log(d)


console.log('--------------------------------')
// .filter()
//const a = numbers.map(function(num){
const a = numbers.map( num => {
	//console.log(num)
	return num < 3 
})
console.log(a)
/*
const b = numbers.filter( num => {
	return num < 3 
})
*/
//const b = numbers.filter( num => {	return num < 3 } )
const b = numbers.filter( num => num > 3  )
console.log(b)
console.log(numbers)












