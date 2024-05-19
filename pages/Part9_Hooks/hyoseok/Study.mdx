# 9장. 훅

## 9.1 리액트 훅

- 리액트 훅 추가 이전에는 프로젝트 규모가 커질 수록 생명 주기 함수에서만 로직을 구현해야 했기 때문에, 비슷한 로직을 재사용 할 수 없는 문제 그리고 사이드 이펙트가 발생
- 리액트 훅의 도입으로 비지니스 로직을 재사용하거나 테스트 하는 것이 용이해짐

### 9.1.1 useState

- useState 와 타입 스크립트를 사용하면 잘못된 속성의 추가로 인하여 예기치 못한 사이드 이펙트가 생기는 것을 방지할 수 있다

```tsx
import { useState } from "react";

interface Member {
  name: string;
  age: number;
}

const MemberList = () => {
  const [memberList, setMemberList] = useState<Member[]>([]);

  // member의 타입이 Member 타입으로 보장된다
  const sumAge = memberList.reduce((sum, member) => sum + member.age, 0);

  const addMember = () => {
  // 🚨 Error: Type ‘Member | { name: string; agee: number; }’
  // is not assignable to type ‘Member’
    setMemberList([
      ...memberList,
      {
        name: "DokgoBaedal",
        agee: 11,
      },
    ]);
  };

  return (
    // ...
  );
};
```

### 9.1.2 의존성 배열을 사용하는 훅

#### useEffect 와 useLayoutEffect

```tsx
function useEffect(effect: EffectCallback, deps?: DependencyList): void;
type DependencyList = ReadonlyArray<any>;
// Destructor 는 컴포넌트 마운트가 해제 될 때 실행되는 함수, deps 배열의 변경에 따라 실행이 반복
type EffectCallback = () => void | Destructor;
```

#### useMemo 와 useCallback

```tsx
type DependencyList = ReadonlyArray<any>;

function useMemo<T>(factory: () => T, deps: DependencyList | undefined): T;
function useCallback<T extends (...args: any[]) => any>(
  callback: T,
  deps: DependencyList
): T;
```

### 9.1.3 useRef

#### 자식 컴포넌트에 ref 전달하기

- forwardRef 를 사용
- ForwardedRef 에는 MutableRefObject 만 올 수 있으므로 RefObject 보다 넓은 타입이기 때문에 부모 컴포넌트에서의 ref 선언과 상관 없이 자식 컴포넌트가 ref 를 사용 가능

```tsx
type ForwardedRef<T> =
  | ((instance: T | null) => void)
  | MutableRefObject<T | null>
  | null;
```

#### useImperativeHandle

- 해당 훅을 활용하면 부모 컴포넌트에서 ref 를 통해 자식 컴포넌트에서 정의한 커스터마이징 메서드를 호출 가능

```tsx
// useImperativeHandle 를 사용한 메서드 커스터마이징
type CreateFormHandle = Pick<HTMLFormElement, 'submit'>;

type CreateFormProps = {
  defaultValues?: CreateFormValue;
};

const JobCreateForm: React.ForwardRefRenderFunction<
  CreateFormHandle,
  CreateFormProps
> = (props, ref) => {
  // useImperativeHandle Hook을 사용해서 submit 함수를 커스터마이징한다
  useImperativeHandle(ref, () => ({
    submit: () => {
      /* submit 작업을 진행 */
    },
  }));

  // ...
};

// 자식 ref 를 불러와서 커스터마이징 된 메서드를 사용
const CreatePage: React.FC = () => {
  // `CreateFormHandle` 형태를 가진 자식의 ref를 불러온다
  const refForm = useRef<CreateFormHandle>(null);

  const handleSubmitButtonClick = () => {
    // 불러온 ref의 타입에 따라 자식 컴포넌트에서 정의한 함수에 접근할 수 있다
    refForm.current?.submit();
  };

  // ...
};
```

#### useRef 의 여러 가지 특성

## 9.2 커스텀 훅

### 9.2.1 나만의 훅 만들기

```tsx
import { useState } from 'react';

const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return { value, onChange };
};
```

### 9.2.2 타입스크립트로 커스텀 훅 강화하기

```tsx
import { useState, useCallback, ChangeEvent } from 'react';

// ✅ initialValue에 string 타입을 정의
const useInput = (initialValue: string) => {
  const [value, setValue] = useState(initialValue);

  // ✅ 이벤트 객체인 e에 ChangeEvent<HTMLInputElement> 타입을 정의
  const onChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  }, []);

  return { value, onChange };
};

export default useInput;
```
