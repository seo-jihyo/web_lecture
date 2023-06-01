/** main6.js **/
//호이스팅 (Hoisting)
//함수 선언부가 유효범위 최상단으로 끌어올려지는 현상

/* 기본 함수 모양
const a = 7
const method = function(){ //
	console.log(a * 2)
}  // 선정의
method(); //후호출
*/

/* 표현식 형태 호이스팅? 
함수 표현식 형태는 호이스팅 안됨, 함수 선언문 형태는 호이스팅 발생
const a = 7
method(); //후호출

const method = function(){
	console.log(a * 2)
}  // 선정의
*/
console.log('----------------hoisting, 호출이 최상단----------------')
const a = 7

method(); //선호출

function method(){
	console.log(a * 5)
} // 후정의
console.log('------------------타이머함수-----------------')
/*
setTimeout (함수, 시간) : 일정 시간 후 함수 실행
setInterval(함수, 시간) : 일정 시간 간격마다 함수 실행
clearTimeout(): 설정된 Timeout 함수를 종료
clearInterval(): 설정된 Interval 함수를 종료
*/
setTimeout(function(){
	console.log('DaeBo!')
}, 3000);

//Arrow 함수로 변경해보기
setTimeout( () => {console.log('DaeBo!')}, 3000);

const timer = setTimeout( () => {console.log('DaeBo!')}, 3000); //변수에 저장

//값 가져와서 변수에 저장하고 이벤트 발생시켜서 출력하기
const h3El = document.querySelector('h3')
h3El.addEventListener('click', function(){
	alert('Daebo');
})
//ArrowFunction
/*const h3Elarrow = document.querySelector('h3')
h3El.addEventListener('click',()=>{
	alert('Daebo');
	clearTimeout(timer);
})
*/
//Interval
/*
const timer2 = setInterval( () => {console.log('DaeBo!')}, 3000); //변수에 저장
h3El.addEventListener('click',()=>{
	clearTimeout(timer2);
})
*/
/*
function timeout(){
setTimeout(()=>{
	console.log('DaeBo!')
	},3000) //3초 뒤 찍힘
}

timeout();
console.log('Done!') // done이 먼저 찍히고
*/
function timeout(callback){
setTimeout(()=>{
	console.log('DaeBo!')
	callback()
	},3000) //3초 뒤 찍힘
}

timeout(()=>{
console.log('Done!') // done이 먼저 찍히고
});