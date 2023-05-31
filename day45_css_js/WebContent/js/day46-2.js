/** day46-2* */
import getType, {userRandom} from './getType.js';

//산술 연산자
console.log(1 + 2);
console.log(5 - 7);
console.log(3 * 4);
console.log(10 / 2);
console.log('----------------------------')

//할당 연산자
let x = 2;
x = x + 1;
console.log(x);
console.log('----------------------------')

//비교 연산자
const z = 1;
const y = 1;
console.log(y == z);  //동등
console.log(y === z); //일치 자료형 type까지 비교
console.log('----------------------------')
function isEqual(x,y){
	return x === y;
	
}
console.log(isEqual(1,1))
console.log(isEqual(1,2))
console.log(isEqual(2,'2'))
console.log(y !== z)
// >,<.<=,>=
console.log('----------------------------')

//논리 연산자
const c = 1 === 1; //1===1 비교해서 c에 대입
const d = 'AB' === 'AB';
const e = false;

console.log(c);
console.log(d);
console.log(e);
console.log('&&:',c && d && e);
console.log('||:',c || d || e);
console.log('----------------------------')

//삼항 연산자
const f = 1 < 2; //f
if(f) console.log('참');
else console.log('거짓');
console.log(f ? '참' : '거짓');



console.log(Math.random() * 10); //0-10 출력

const func = userRandom();

if(func === 0){
	console.log('func is 2');
}else if(func === 9){
	console.log('func is 9');
}else {
	console.log('rest....');
}


console.log('----------------------------')
console.log(typeof'Hello World!');
console.log(typeof 123);
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof {});
console.log(typeof []);
console.log('----------------------------')
/*
function getType(data){
	return Object.prototype.toString.call(data).slice(8, -1)
}
*/
console.log(getType(123));
console.log(getType(false));
console.log(getType({}));
console.log(getType([]));
console.log(getType(null));

//_________________________________________________
console.log('----------------------------')
const a = 'DaeBo!';
//split: 문자를 인수 기준으로 쪼개서 배열로 반환
//reverse: 배열을 뒤집기
//join: 배열을 인수 기준으로 문자로 병합해 반환

const b = a.split('').reverse().join(''); //메소드 체이닝
console.log(a);
console.log(b);

const boxEl = document.querySelector('.box');
console.log(boxEl);
//Getter, 값을 얻는 용도
console.log(boxEl.textContent);

//Setter 값을 세팅(지정)하는 용도
boxEl.textContent = 'Yuna'
console.log(boxEl.textContent);