# 2장. 타입

## 2.1 타입이란

### 2.1.4 강타입과 약타입

- 암묵적 타입 변환 여부에 따라 결정
- 강타입 : 암묵적 변환 X / C++, Java, JS
- 약타입 : 암묵적 변환 O / Python, Ruby, TS

## 2.2 타입 스크립트의 타입 시스템

### 2.2.1 타입 어노테이션 방식

\*\* [p.42] 애너테이션? 어노테이션? ㅋㅋㅋㅋ

- 변수 이름 뒤에 : type 을 붙여서 명시

```ts
let isDone: boolean = false;
let list: number[] = [1, 2, 3];
let x: [string, number];
```

### 2.2.2 구조적 타이핑

- TS 는 다른 언어와 달리 구조를 기반으로 타입을 구분

```ts
interface Developer {
  faceValue: number;
}

interface BankNote {
  faceValue: number;
}

let developer: Developer = { faceValue: 52 };
let bankNote: BankNote = { faceValue: 10000 };

developer = bankNote; // OK
bankNote = developer; // OK
```

### 2.2.3 구조석 서브타이핑

- 이름이 다른 객체라도 가진 속성이 동일하다면 타입 스크립트는 서로 호환이 가능한 동일한 타입으로 판단

```ts
interface Pet {
  name: string;
}

interface Cat {
  name: string;
  age: number;
}

let pet: Pet;
let cat: Cat = { name: 'Kitty', age: 2 };

pet = cat; // OK
```

- 클래스로 구현한 코드

```ts
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }
}

class Developer {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}

function greet(p: Person) {
  console.log(`Hello, I'm ${p.name}`);
}

const developer = new Developer('tetz', 40);

greet(developer); // Hello, I'm tetz
```

### 2.2.4 자바스크립트를 닮은 타입스크립트

- 타입스크립트는 타입을 좀 더 강하게 강제하지만, 결국 자바스크립트의 슈퍼셋이므로 객체의 비교에 있어서 명목적 타이핑이 아닌 덕 타이핑을 기반으로 한다
- 다만, 타입스크립트는 컴파일 단계에서 타이핑을 검사하여 런타임에 타이핑을 검사하는 자바스크립트의 덕 타이핑의 문제를 해결한다

### 2.2.5 구조적 타이핑의 결과

- 구조적 타이핑은 결국 강제에 있어서 한계를 가지기 때문에 문제 발생이 가능, 따라서 타입스크립트는 명목적 타이핑 언어의 특징을 가미한 유니온 같은 방법을 채택하였다

### 2.2.6 타입스크립트의 점진적 타입 확인

- 컴파일 타입에 타입을 검사하지만, 피룡에 따라 타입 선언 생략을 허용하는 방식
- 생략 된 경우는 동적으로 검사를 수행하고 필요에 따라 암시적 타입 변환이 일어난다

### 2.2.7 자바스크립트 슈퍼엣으로서의 타입스크립트

### 2.2.8 값 vs 타입

- 값과 타입은 타입스크립트에서 별도의 네임스페이스에 존재하여 서로 이름이 같아도 문제가 발생하지 않는다
- 타입스크립트가 컴파일이 완료 되면 타입으로만 사용되는 요소는 정보가 사라진다

\*\* [p. 62]const enum? 개념 잡기

### 2.2.9 타입을 확인하는 방법

- TS 의 type 키워드는 독특한 특성을 가진다
- JS 의 typeof 는 해당 데이터의 타입 값을 값으로 반환하지만, TS 의 type 은 해당 데이터의 값을 타입으로 반환하며 해당 타입은 JS 로 컴파일시 사라진다
- 타입 단언(as) 를 사용하여 타입을 강제 가능

## 2.3 원시 타입

### 2.3.1 boolean

### 2.3.2 undefined

### 2.3.3 null

\*\* [p.69] 의도적으로 빈 값 예시 무직 실화냐?

### 2.3.4 number

### 2.3.5 bigInt

- ES2020 에서 도입, TS 3.2 부터 사용 가능
- 2^53 - 1 보다 큰 수 처리 가능
- number 와 상호 작용 불가능

### 2.3.6 string

### 2.3.7 symbol

- ES2015 에서 도입, 어느 값과도 중복이 불가능한 유일한 값 생성 가능

### 2.3.8 tsconfig 에 따른 설정

- null, undefined 의 경우 strictNullChecks 옵션에 따라 개발자가 명시적으로 해당 타입에 null, undefined 를 포함해야만 사용이 가능

## 2.4 객체 타입

### 2.4.1 object

- 객체계의 any 타입이기 때문에 가급적 사용하지 않기를 권장
- JS 의 클래스, 함수, 배열, 정규 표현식 등등이 전부 객체이기 때문에 이 모든 것과 호환되는 이슈 발생

### 2.4.2 {}

- 객체 리터럴 방식으로 객체 생성시 사용, 선언된 구조와 일치해야만 사용 가능
- 빈 객체 지정을 위해 사용이 가능하나, 제대로된 사용 방법으로는 유틸리티 타입으로 사용하는 편이 바람직

### 2.4.3 array

- TS 는 배열을 array 라는 별도의 타입으로 다룬다
- Array 키워드 또는 [] 를 통해 선언, 단 튜플도 [] 로 선언하므로 주의 필요

### 2.4.4 type 과 interface 키워드

- 둘 다 같은 기능을 하므로 팀의 컨벤션에 따라 다르게 사용한다

#### type

- 모든 타입 선언 가능
- 기호(&)를 통한 상속 가능
- 선언적 상속 불가능
- computed value 사용 가능

```ts
interface Person {
  name: string;
  age: number;
}

type Student = Person & {
  // 확장(상속)
  school: string;
};

// 선언적 확장 불가능
interface Person {
  gender: string; // ❗️Error: Duplicate identifier 'Person'.
}

// computed value 사용 가능
type Subjects = 'Math' | 'Science' | 'Sociology';

type Grades = {
  [key in Subjects]: string;
};
```

#### interface

- 객체에 대한 타입만 선언 가능
- 상속 가능
- 선언적 상속 가능
- computed value 사용 불가능

```ts
interface Person {
  name: string;
  age: number;
}

interface Student extends Person {
  // 확장(상속)
  school: string;
}

interface Person {
  // 선언적 확장
  gender: string;
}

// computed value 사용 불가능
type Subjects = 'math' | 'science' | 'sociology';

interface Grades {
  [key in Subjects]: string; // ❗️Error: A mapped type may not declare properties or methods.
}
```

#### 결론

- type : 단순한 원시값, 튜플, 유니언 타입 선언에 사용 / computed value 필요시 사용
- interface : 객체 타입 선언에 사용 / 확장이 필요한 경우 사용

\*\* [p. 76] 배민에서 이정도로 팀별로 컨벤션이 갈릴 줄이야.... 역시 This is JS!!!! ㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋㅋ 다들 어찌 생각하시나요? 최근 자바를 배워서 그런가 interface 를 객체 지향적으로 쓴다는 말이 더 와닿긴 하네요

### 2.4.5 function

- 함수는 객체이나 JS, TS 에서는 별도로 function 타입을 제공
- 호출 시그니쳐 : 함수 타입을 지정하는 문법

```ts
type add = (a: number, b: number) => number;
```
