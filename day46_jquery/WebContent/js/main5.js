/**main5.js* */
//1번
console.log('------------------1번 방법---------------------')
function sum(x, y){
	console.log(x + y)
}
sum(1, 3)
sum(5, 7)

console.log('------------------2. return type---------------------')
function sum2(x, y){ 
	return x + y;
}
const a = sum2(10, 20)
const b = sum2(5, 10)
	console.log(a + b)

	console.log(sum2(1,1) + sum2(5,10))
	
console.log('------------------3. ---------------------')
const sum3 = function (x,y){ 
	return x + y
}
const c = sum3(1,1)
console.log(c);
console.log(sum3(10,20));

console.log('--------------- 4. arguments------------------')
function sum4(){
	console.log(arguments)
	return arguments[0] //0번 index
}
// console.log(sum4()); 인자값이 없는 경우
// console.log(sum4(7,3)); 
   console.log(sum4(100,7,3));
   
console.log('--------------- 5. Arrow Function------------------')
// () => {}
const sum5 = function(x,y){
	return x + y
}
console.log('sum5: ', sum5(100,200))


const sum6 = (x,y) => {
	return x + y
}
console.log('sum6: ', sum6(1,2))



const sum7_1 = (x,y) => {return x + y}
const sum7_2 = (x,y) =>  x + y


const sum8 = (x) => x + 300 //매개변수 한개
console.log('sum8: ', sum8(5))   //305출력


const sum9 = x => x + 500   //매개변수가 한개(단일항)일 때는 괄호 생략 가능
console.log('sum9: ', sum9(5))   //505출력


const sum10 = () => 1000    //매개변수가 없을 때: return값 1000만 써줌
console.log('sum10: ', sum10())   //1000출력


const sum11 = () => {console.log('hello')}    //매개변수와 return값 없을 때
sum11()   //함수 호출, hello 출력


const arrowFun1 = x => [1,2,3]				 //배열 타입
console.log('arrowFun1: ', arrowFun1(7))


const arrowFun2 = x =>{{name: 'Yuna'}}       //객체 타입
console.log('arrowFun2: ', arrowFun2)