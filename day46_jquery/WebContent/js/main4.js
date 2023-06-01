/**main4.js**/
/*함수

  function name(){}
  function name(val1, val2){}
  function name(){ return value;}
*/

console.log("즉시 실행 함수 1. ()()////////2. ( x() )---------------------------------");
const xy = 7;
function double(){ //함수 정의부
	console.log(xy * 2);
}
double(); //함수 호출
//화살표함수로 변경: const double = () => { console.log(xy * 2); }
console.log("-----------------------------------------");

// 호출 없이 즉시 실행()(매개변수)
(function square(x){
	console.log(x * x);
}(2));
console.log("-----------------------------------------");

(function(){
	console.log(xy * 2);
}());

console.log("-----------------------------------------");

var y = 789;
function scope() { //함수 정의부
	if(true) {
		console.log(y)
	}
}
scope();
console.log("-----------------변수의 유효범위 -----------------------");
console.log("------------------var---------------------");
//var는 함수레벨, var를 쓸 경우 원치 않은 곳에 정의된게 출력됨
function scope() { //함수 정의부
	if(true) {
		var y2 = 7890;
		console.log(y2)
	}
		console.log(y2) // var: 블럭을 벗어나도 출력됨
}
scope();
console.log("------------------let을 써야 하는 이유-----------------------");
//let, const는 블럭레벨,
function scope() { //함수 정의부
	if(true) {
		let y3 = 111;
		console.log(y3)
	}
	//	console.log(y3) //블럭을 벗어나면 출력되지 않는 게 정상
}
scope();
console.log("-----------------형변환------------------------");
//참: true, {}, [],1, 2, 'false'(문자열), -12, '3.45', 12.34, ...
//거짓: false, ' ', '', null, undefined, 0, -0, NaN
/*
if( 0 ){   // 0=false 출력 안됨
	console.log(123);
} 
*/
if( !0 ){ //!= false이므로 출력됨
	console.log(123);
} 

if( 'false' ){ //문자열이므로 출력됨
	console.log(12345);
	}
console.log("-----------------------------------------");
	
const a = 1;
const b = 1;
console.log(a == b);
console.log("-----------------------------------------");



console.log("------화살표 함수   (매개변수) => {해야할함수 } vs function(){ } --------");

/* function double() { 
      console.log( xy * 2 );
}
*/
//화살표 함수로
const double = ( ) => { console.log( xy * 2 ); }

const double2 =  x  => {
//const double2 = ( x ) => {
//const double2 = function(x, y) {
	//return x * 2;
	return x * y ;
}

const double3 = (x) => { return x * 2 };

//const double4 =  x, y => {  X
const double4 = (x, y) => {
	//return x * 2;
	return x * y ;
}
console.log("-----------------------------------------");