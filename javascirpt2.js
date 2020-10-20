/**
 삼항 연산자

let test = true ? true : false;

Threthy 와 Falsy
! 체크 
!undefined
!null
!0
!''
!NAN
!false

NAN not a number        1  * "fasfas"

단축평가 논리 계산법
const dog = {
    name : '멍멍이'
}

function getName(animal){
    reuturn animal && animal.name;      // 앞이 true 라면 뒤에게 값이된다
}

const name = getName(dog);
console.log(name);          // && 연산자 뒤에 값이 값이된다.        // 객체 안에 값을 체크할때

console.log( dog && dog.name);

const namelessDog = {
    name : '뭉뭉이'
}

function getName(animal){
    const name = animal && animal.name;
    return name || '이름이 없는 동물입니다.'
}

const name = getName(namelessDog);

const name = false || 'hello'       // 문자열이나 숫자나 하나의 값을 처리할때 

// 함수의 기본 파라메터
function calculateCircleArea(r = 1){        // 기본값 지정
    return Math.PI * r * r;
}
const area = calculateCircleArea();

const name = false || 'hello'

함수의 기본 파라메터
function calculatCircleArea = (r = 1 ) =>  Math.PI * r * r;

조건문 더 스마트 하게 쓰기
function isAnimal(text){                    // if 문이 아닌 
    const animals = ["고양이", "개", "거북이", "너구리"];
    return animals.includes(text);
}

const isAnimal = text => ["고양이", "개", "거북이", "너구리"].includes(text);

isAnimal("개")      // true

function getSound(animal){
    const sounds = {
        개 : '멍멍!' ,
        고양이 : '야옹 ~ ' ,
        참새 : '짹짹' ,
        비둘기 : '구구 구 구'
    }

    return sounds[animal] || '...?';
}

console.log(getSound('개'));
console.log(getSound('고양이'));

function makeSound(animal){
    const tasks = {
        개 : () => {
            console.log("멍멍!");
        },
        고양이(){                   // 밑에거보다 위에게 더 나은 코드 최신 자바스크립트 객체안에 함수
            console.log('야옹!');
        },
        비둘기 : function(){

        }
    }

    return sounds[animal] || '...?';
}

 */