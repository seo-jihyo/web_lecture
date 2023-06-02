/** main7.js */

const person = {
	firstName: 'JiHyo'
	,lastName: 'Seo'
	,getFullName: function(){
		return `${this.firstName} ${this.lastName}`
	}
	,setFirstName:function(data){
		this.firstName = data;
	}
}

console.log(person)
console.log(person.lastName);
person.setFirstName('Yuna');
console.log(person)



const any = {
	firstName: 'Any'
	,lastName: 'Kim'
	,getFullName: function(){
		return `${this.firstName} ${this.lastName}`
	}
	,setFirstName:function(data){
		this.firstName = data;
	}
}
console.log(any);
console.log(any.firstName);
any.setFirstName('joy')
console.log(any)
console.log(any.getFullName())

function User(first,last){
	this.firstName = first;
	this.LastName = last;
}

const saram = User('person', 'any');
console.log(saram);

//this
//일반(Normar) 함수는 호출 위치에서 this 정의
//화살표 (Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의
/*
function User(name) {
	this.name = name;
}
*/
/*
User.prototype.arrow = () => {
	console.log(this.name);
}
*/
/*
const jihyo = {
	name : 'JiHyo',
	normal: function(){
		console.log(this.name);
	}
}
*/
/*
const jihyo = {
	name : 'JiHyo',
	normal: function(){
		console.log(this.name);
	},
	
	arrow: () => {
		console.log(this.name);
	}
}
*/
/*
const jihyo2 = new User('jiji')
jihyo.normal()
jihyo.arrow()
*/