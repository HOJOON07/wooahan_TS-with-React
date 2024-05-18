# 8장. JSX에서 TSX로

## 8.1 리액트 컴포넌트의 타입

### 8.1.1 클래스컴포넌트 타입

- React.Component 와 React.PureComponent 를 상속 받아서 사용
- props 의 상태 타입을 제네릭으로 받는다

### 8.1.2 함수 컴포넌트 타입

- React.FC 와 React.VFC 로 타입을 지정하여 컴포넌트 사용
- v16 까지는 React.VFC 의 경우 children props 가 없다
- v18 에 이르러 React.FC 에서도 children 이 사라져서 별도로 타이핑이 필요

### 8.1.3 Children props 타입 지정

```ts
type PropsWithChildren<P> = P & { children?: ReactNode | undfined };
```

- 보편적으로 ReactNode 또는 undfined 사용

### 8.1.4 render 메서드와 함수 컴포넌트의 반환 타입 - React.ReactElement vs JSX.Element vs React.ReactNode

- ReactNode ⊃ ReactElement ⊃ Jsx.Element 의 포함 관계를 가진다

### 8.1.5 ReactElement, ReactNode, JSX.Element 활용하기

#### ReactElement

- JSX 는 리액트 엘리먼트를 생성하기 위한 문법이며, JSX 문법을 Babel 이 트랜스파일하여 createElement 메서드 호출문으로 리액트 엘리먼트를 생성
- 따라서 ReactElement 타입은 JSX의 createElement 로 인해 생성된 리액트 엘리먼트를 나타내는 타입

```tsx
const element = React.createElement(
  'h1',
  { className: 'greeting' },
  'Hello, world!'
);

// 주의: 다음 구조는 단순화되었다
const element = {
  type: 'h1',
  props: {
    className: 'greeting',
    children: 'Hello, world!',
  },
};

declare global {
  namespace JSX {
    interface Element extends React.ReactElement<any, any> {
      // ...
    }
    // ...
  }
}
```

### ReactNode

- ReactChild 를 포함하여 boolean, null, undefined 등 훨씬 넓은 범주로써 render 함수가 반환 가능한 모든 형태

#### JSX.Element

- ReactElement 의 특정 타입으로 props 와 타입 필드를 any 로 가지는 타입

### 8.1.6 사용 예시

#### ReactNode

- prop 을 활용하여 리액트 컴포넌트가 다양한 형태를 가지게 할 때 유용하다

```tsx
type PropsWithChildren<P = unkown> = P & {
  children?: ReactNode | undefined;
};

interface MyProps {
  // ...
}

type MyComponentProps = PropsWithChildren<MyProps>;
```

#### JSX.Element

- props 를 전달받아 render props 패턴으로 컴포넌트 구현할 때 유용
- icon prop 을 JSX.Element 타입으로 선언하여 해당 prop 이 JSX 문법만 사용하도록 강제

```tsx
interface Props {
  icon: JSX.Element;
}

const Item = ({ icon }: Props) => {
  // prop으로 받은 컴포넌트의 props에 접근할 수 있다
  const iconSize = icon.props.size;

  return <li>{icon}</li>;
};

// icon prop에는 JSX.Element 타입을 가진 요소만 할당할 수 있다
const App = () => {
  return <Item icon={<Icon size={14} />} />;
};
```

#### ReactElement

- JSX.Element 는 암시적으로 props 가 any 타입으로 지정이 되므로, ReactElement 를 사용하여 직접 props 타입을 명시 할 수 있다
- 실제적으로 JSX.Element 를 사용했을 때와 달리 icon.props 에 접근하면 직접 지정한 타입이 추론 된 것 확인 가능

```tsx
interface IconProps {
  size: number;
}

interface Props {
  // ReactElement의 props 타입으로 IconProps 타입 지정
  icon: React.ReactElement<IconProps>;
}

const Item = ({ icon }: Props) => {
  // icon prop으로 받은 컴포넌트의 props에 접근하면, props의 목록이 추론된다
  const iconSize = icon.props.size;

  return <li>{icon}</li>;
};
```

### 8.1.7 리액트에서 기본 HTML 요소 타입 활용하기

#### DetailedHTMLProps 와 ComponentWithoutRef

- DetailedHTMLProps 를 활용하면 아래와 같이 간단하기 HTML 태그의 속성고 호환되는 타입 선언이 가능

```tsx
type NativeButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
>;

type ButtonProps = {
  onClick?: NativeButtonProps['onClick'];
};
```

- ComponentWithoutRef 도 마찬가지로 HTML 의 특정 속성이 호환되는 타입 선언이 가능하다

```tsx
type NativeButtonType = React.ComponentPropsWithoutRef<'button'>;
type ButtonProps = {
  onClick?: NativeButtonType['onClick'];
};
```

#### 언제 ComponentWithoutRef 를 사용하면 좋을까

- 클래스형 컴포넌트와 달리 함수형 컴포넌트의 경우 props 받은 ref 가 button 컴포넌트를 제대로 바라보지 못하는 이슈가 존재
- React.forwardRef 메서드르 활용하면 이러한 제약 극복이 가능
- 반면, ComponentWithoutRef 는 ref 를 포함하지 않아 DetailedHTMLProps, HTMLProps, ComponentPropsWithRef 같이 ref 를 포함하여 위와 같은 이유로 예기치 못한 오류를 발생 시키는 것을 예방할 수 있다

## 8.2 타입스크립트로 리액트 컴포넌트 만들기

### 8.2.1 JSX 로 구현된 Select 컴포넌트

- JSX 로 구성된 컴포넌트의 경우는 각 속성에 어떤 타입을 전달해야 할 지 명확하게 알기 어렵다

### 8.2.2 JSDoc 으로 일부 타입 지정하기

### 8.2.3 props 인터페이스 적용하기

- options 의 타입을 정의하여 option 의 유형을 명확히 하고, onChange 에는 리턴 타입이 void 임을 명시

```tsx
type Option = Record<string, string>; // {[key: string]: string}

interface SelectProps {
  options: Option;
  selectedOption?: string;
  onChange?: (selected?: string) => void;
}

const Select = ({
  options,
  selectedOption,
  onChange,
}: SelectProps): JSX.Element => {
  //...
};
```

### 8.2.4 리액트 이벤트

- 리액트의 이벤트는 브라우저의 일반적인 이벤트가 DOM 에 등록되어 실행되는 것과 달리 ReactNode 에서 실행이 되는 형태이므로 브라우저와 동일하게 작동하지 않는다

### 8.2.5 훅에 타입 추가하기

- 타입을 명확하게 지정하지 않으면 TS 가 타입을 string 등으로 추론하여 입력하면 안되는 값이 입력 될 수 있으므로 명확하게 타입을 지정해야 한다
- keyof typeof 를 사용하여 특정 타입의 키 값을 유니온 값으로 추출하여 사용

```tsx
// 타입이 string 으로 추론되어 원치 않는 값이 넘어가는 경우
const [fruit, changeFruit] = useState('apple');

// error가 아님
const func = () => {
  changeFruit('orange');
};

// keyof typeof 로 타입을 유니온 형태로 강제하는 코드
type Fruit = keyof typeof fruits; // 'apple' | 'banana' | 'blueberry';
const [fruit, changeFruit] = useState<Fruit | undefined>('apple');

// 에러 발생
const func = () => {
  changeFruit('orange');
};
```

\*\* [p.274] 이번에는 제대로 keyof typeof 를 썼군여 ㅋㅋㅋㅋ

### 8.2.6 제네릭 컴포넌트 만들기

- Selct 컴포넌트에 전달되는 props 의 타입을 기반으로 타입이 추론되어, 잘못된 옵션을 전달하면 에러가 발생하는 타입 지정

```tsx
interface SelectProps<OptionType extends Record<string, string>> {
  options: OptionType;
  selectedOption?: keyof OptionType;
  onChange?: (selected?: keyof OptionType) => void;
}

const Select = <OptionType extends Record<string, string>>({
  options,
  selectedOption,
  onChange,
}: SelectProps<OptionType>) => {
  // Select component implementation
};
```

### 8.2.7 HTMLAttributes, ReactProps 적용하기

- className, id 와 같은 속성은 리액트에서 제공하는 타입을 사용하면 더 정확하게 타입 설정이 가능

```tsx
type ReactSelectProps = React.ComponentPropsWithoutRef<'select'>;

interface SelectProps<OptionType extends Record<string, string>> {
  id?: ReactSelectProps['id'];
  className?: ReactSelectProps['className'];
  // ...
}
```

### 8.2.8 styled-components 를 활용한 스타일 정의

- CSS-in-JS 라이브러리인 styled-components 를 활용하면 컴포넌트 스타일에 대한 타입을 추가 가능

```tsx
// 필요한 스타일 정의
const theme = {
  fontSize: {
    default: '16px',
    small: '14px',
    large: '18px',
  },
  color: {
    white: '#FFFFFF',
    black: '#000000',
  },
};

type Theme = typeof theme;
type FontSize = keyof Theme['fontSize'];
type Color = keyof Theme['color'];

// 부모 컴포넌트에서 원하는 스타일 적용을 위해 StyleSelect 컴포넌트에서 SelectStyleProps 타입을 상속
interface SelectStyleProps {
  color: Color;
  fontSize: FontSize;
}

const StyledSelect = styled.select<SelectStyleProps>`
  color: ${({ color }) => theme.color[color]};
  font-size: ${({ fontSize }) => theme.fontSize[fontSize]};
`;

// Partial 을 사용하여 전달한 스타일 타입을 선택적으로 설정이 가능
interface SelectProps extends Partial<SelectStyleProps> {}

const Select = <OptionType extends Record<string, string>>({
  fontSize = 'default',
  color = 'black',
}: SelectProps<OptionType>) => {
  return <StyledSelect fontSize={fontSize} color={color} />;
};
```

### 8.2.9 공변성과 반공변성

- 타입 A 가 B 의 서브 타입일 때 공변성을 가진다고 말한다. 그로 인해 타입은 보통 좁은 타입에서 넓은 타입으로 할당이 가능
- 일반적인 타입들은 공변성을 가지고 있으므로 좁은 타입에서 넓은 타입으로 할당이 가능
- 하지만 제네릭 타입을 가진 함수는 반공변성을 가지게 되어, 역으로 좁은 타입 `T<A>` 를 `T<B>` 에 적용이 불가능

```tsx
type PrintUserInfo<U extends User> = (user: U) => void;

let printUser: PrintUserInfo<User> = (user) => console.log(user.id);

let printMember: PrintUserInfo<Member> = (user) => {
  console.log(user.id, user.nickName);
};

printMember = printUser; // OK.
printUser = printMember; // Error - Property 'nickName' is missing in type 'User' but required in type 'Member'.
```

\*\* [p.280] 좁은 타입을 가지는 함수를 넓은 타입에 적용하려 하면 매개 변수에서 없는 부분이 발생하므로, 문제가 발생하기 때문으로 추측

\*\* [p.280] 그런데 onChange 의 경우는 화살표 함수와 일반 함수의 차이인데 왜? 화살표 함수는 반공변성을 띠고, 일반 함수는 이변성을 띨까?
