# 7장. 비동기 호출

## 7.1 API 요청

### 7.1.1 fetch 로 API 요청하기

- 비동기 호출 코드는 변경 요구에 취약하며, 정책이 추가 될 때마다 비동기 코드를 수정해야하는 번거로움이 발생

### 7.1.2 서비스 레이어로 분리하기

- 변경이 될 수 있다는 점을 감안하여 비동기 호출 코드는 컴포넌트 영역에서 분리하여 서비스 레이어에서 처리가 필요

### 7.1.3 Axios 활용하기

- fetch 는 내장 라이브러리의 한계가 있어서 다양한 기능을 제공하는 Axios 를 사용

```ts
const apiRequester: AxiosInstance = axios.create({
  baseURL: 'https://api.baemin.com',
  timeout: 5000,
});

const fetchCart = (): AxiosPromise<FetchCartResponse> =>
  apiRequester.get<FetchCartResponse>('cart');

const postCart = (
  postCartRequest: PostCartRequest
): AxiosPromise<PostCartResponse> =>
  apiRequester.post<PostCartResponse>('cart', postCartRequest);
```

- API Entry 가 2개 이상인 경우 각 서버의 기본 URL 을 호출하는 인스턴스를 따로 구성하여 사용

```ts
const apiRequester: AxiosInstance = axios.create(defaultConfig);
const orderApiRequester: AxiosInstance = axios.create({
  baseURL: 'https://api.baemin.or/',
  ...defaultConfig,
});
const orderCartApiRequester: AxiosInstance = axios.create({
  baseURL: 'https://cart.baemin.order/',
  ...defaultConfig,
});
```

### 7.1.4 Axios 인터셉터 사용하기

- 서버에 따라 헤더를 설정해야하는 로직을 위해 Axios 인터셉터를 사용
- 또한 Class 로 구성된 API Builder 를 사용하여 데이터 체인을 사용하여 각각의 통신에 따른 요청, 에러처리, 데이터 리턴 등을 편리하게 사용
- 단, 보일러플레이트 코드가 길다는 단점이 존재한다

```ts
const fetchJobNameList = async (name?: string, size?: number) => {
  const api = APIBuilder.get('/apis/web/jobs')
    .withCredentials(true); // 이제 401 에러가 나는 경우, 자동으로 에러를 탐지하는 인터셉터를 사용하게 된다
    .params({ name, size }) // body가 없는 axios 객체도 빌더 패턴으로 쉽게 만들 수 있다
    .build();

  const { data } = await api.call<Response<JobNameListResponse>>();
  return data;
};
```

### 7.1.5 API 응답 타입 지정하기

- 서버에서 오는 응답을 통일함에 있어서 Update, Create 같이 응답이 없을 수 있는 API 가 존재하므로 따로 처리가 필요
- 따라서, 응답에 대한 타입은 apiRequester 가 모르게 관리되어야 한다

### 7.1.6 뷰 모델(View Model) 사용하기

- 새로운 프로젝트의 경우 백엔드 서버의 스펙이 자주 변경되므로 뷰 모델을 사용하여 API 변경에 따른 범위를 한정해야 한다
- 뷰 모델을 만들면 API 응답이 변경되어도 UI 에 영향을 안주는 형태로 개발이 가능하다

- 뷰 모델 적용 전 코드

```ts
interface ListResponse {
  items: ListItem[];
}

const fetchList = async (filter?: ListFetchFilter): Promise<ListResponse> => {
  const { data } = await api
    .params({ ...filter })
    .get('apis/get-list-summaries')
    .call<Response<ListResponse>>();
  return { data };
};
```

- 뷰 모델 적용 후 코드

```ts
interface JobListResponse {
  jobItems: JobListItemResponse[];
}

class JobListItem {
  constructor(item: JobListItemResponse) {
    /* JobListItemResponse에서 JobListItem 객체로 변환해주는 코드 */
  }
}

class JobList {
  readonly totalItemCount: number;
  readonly items: JobListItemResponse[];
  constructor({ jobItems }: JobListResponse) {
    this.totalItemCount = jobItems.length;
    this.items = jobItems.map((item) => new JobListItem(item));
  }
}

const fetchJobList = async (
  filter?: ListFetchFilter
): Promise<JobListResponse> => {
  const { data } = await api
    .params({ ...filter })
    .get('/apis/get-list-summaries')
    .call<Response<JobListResponse>>();
  return new JobList(data);
};
```

- 단, 각각의 API 에 따라 뷰 모델도 1개씩 추가를 해야하는 문제가 발생한다
- 따라서, API 응답의 변경에 따라 클라이언트 코드를 수정하는 비용을 줄이면서도 도메인의 일관성을 지킬 수 있는 절충안을 찾아야 한다
- 백엔드 개발자와의 상의를 통해 API 응답 변화를 최대한 줄이기, 뷰 모델에 추가한 값을 getter 알기 등 다양한 방법 적용이 가능하다

### 7.1.7 Superstruct 를 사용해 런타임에서 응답 타입 검증하기

- Superstruct 라이브러리를 사용하면 런타임 데이터 유효성 검사가 가능하여 런타임 오류를 해결 가능

```ts
import { Infer, number, object, string } from 'superstruct';

const User = object({
  id: number(),
  email: string(),
  name: string(),
});

type User = Infer<typeof User>;

type User = { id: number; email: string; name: string };

function isUser(user: User) {
  assert(user, User);
  console.log('적절한 유저입니다.');
}

const userA = {
  id: 4,
  email: 'test@gg.com',
  name: 'lhs',
};

const userB = {
  id: 4,
  email: 'test@gg.com',
  name: 5,
};

isUser(userA); // 적절한 유저입니다
isUser(userB); // ERR 발생
```

### 7.1.8 실제 API 응답 시의 Superstruct 활용 사례

- 타입 스크립트의 타입은 컴파일 타입에서 타입을 검증
- Superstruct 를 사용하여 실제로 통신이 이루어 졌을 때 응답 데이터의 타입을 검증

```ts
import { assert } from 'superstruct';

function isListItem(listItems: ListItem[]) {
  listItems.forEach((listItem) => assert(listItem, ListItem));
}
```

## 7.2 API 상태 관리하기

### 7.2.1 상태 관리 라이브러리에서 호출하기

- 상태 관리 라이브러리를 이용하여 API 상태 관리가 가능하다
- Redux 를 이용하면 보일러 플레이트가 길어지는 문제는 발생하지만 API 상태 관리가 가능
- MobX 같은 라이브러리는 비동기 상태 관리를 위한 기능을 제공
- 하지만 상태 관리 라이브러리를 통해 API 를 관리하면 액션이 추가될 때마다 스토어 코드가 길어지며, 전역 상태 관리자가 모든 비동기 통신에 관여하므로 문제가 발생할 가능성이 높아진다

### 7.2.2 훅으로 호출하기

- React-query 나 useSwr 같은 훅을 사용하면 상태 변경 라이브러리를 사용하는 방식보다 간단하게 API 관리가 가능
- 최근에는 비동기 통신 관리를 상태 관리 라이브러리에서 React-query 같은 라이브러리로 변경하는 추세
- 장점 : 액션이 추가 될 수록 스토어와 보일러 플레이트 코드가 길어지는 것을 막을 수 있음
- 단점 : React-query 는 전역 상태 관리 라이브러리가 아니므로 전역 관리로 얻을 수 있는 장점을 얻을 수 없다

\*\* [p.223] API 상태 관리에서 상태 관리 라이브러리 vs React-query 어떤 것을 선호하시나요?

## 7.3 API 에러 핸들링

### 7.3.1 타입 가드 활용하기

- Axios 에서 제공하는 isAxiosError 라는 타입 가드를 사용하면 에러에 대한 처리가 가능하다

```ts
interface ErrorResponse {
  status: string;
  serverDateTime: string;
  errorCode: string;
  errorMessage: string;
}

function isServerError(error: unknown): error is AxiosError<ErrorResponse> {
  return axios.isAxiosError(error);
}

const onClickDeleteHistoryButton = async (id: string) => {
  try {
    await axios.post('https://....', { id });
    alert('주문 내역이 삭제되었습니다.');
  } catch (error: unknown) {
    if (isServerError(e) && e.response && e.response.data.errorMessage) {
      // 서버 에러일 때의 처리임을 명시적으로 알 수 있다 setErrorMessage(e.response.data.errorMessage);
      return;
    }
    setErrorMessage('일시적인 에러가 발생했습니다. 잠시 후 다시 시도해주세요');
  }
};
```

### 7.3.2 에러 서브클래싱하기

- 서버 에러 이외에도 인증 정보 에러, 네트워크 에러, 타임 아웃 에러 같은 다양한 에러를 명시적으로 표기하기 위해 서브 클래싱을 활용 가능

- 에러 객체를 상속하여 에러를 서브 클래싱

```ts
class OrderHttpError extends Error {
  private readonly privateResponse: AxiosResponse<ErrorResponse> | undefined;
  constructor(message?: string, response?: AxiosResponse<ErrorResponse>) {
    super(message);
    this.name = 'OrderHttpError';
    this.privateResponse = response;
  }
  get response(): AxiosResponse<ErrorResponse> | undefined {
    return this.privateResponse;
  }
}
class NetworkError extends Error {
  constructor(message = '') {
    super(message);
    this.name = 'NetworkError';
  }
}
class UnauthorizedError extends Error {
  constructor(message: string, response?: AxiosResponse<ErrorResponse>) {
    super(message, response);
    this.name = 'UnauthorizedError';
  }
}
```

- 위와 같이 에어를 서브 클래싱하여 표현하면 명시적으로 에러를 처리 가능

### 7.3.3 인터셉터를 활용한 에러 처리

- Axios 의 인터셉터 기능을 활용하여 HTTP 에 일관된 에러 처리 로직을 적용할 수 있다

```ts
const httpErrorHandler = (
  error: AxiosError<ErrorResponse> | Error
): Promise<Error> => {
  (error) => {
    // 401 에러인 경우 로그인 페이지로 이동
    if (error.response && error.response.status === 401) {
      window.location.href = `${backOfficeAuthHost}/login?targetUrl=${window.location.href}`;
    }
    return Promise.reject(error);
  };
};

orderApiRequester.interceptors.response.use(
  (response: AxiosResponse) => response,
  httpErrorHandler
);
```

\*\* [p.230] Axios 인터셉터 기능 확인할 것!

### 7.3.4 에러 바운더리를 활용한 에러 처리

- 리액트 컴포넌트 트리에서 발생한 에러를 처리하는 에러 바운더리 컴포넌트를 통해 하위 컴포넌트에서 발새한 예상치 못한 에러를 캐치하여 부모 컴포넌트에서 처리가 가능
- 이를 통해 에러에 대한 공통된 처리가 가능

```ts
import React, { ErrorInfo } from 'react';
import ErrorPage from 'pages/ErrorPage';

interface ErrorBoundaryProps {}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    this.setState({ hasError: true });

    console.error(error, errorInfo);
  }

  render(): React.ReactNode {
    const { children } = this.props;
    const { hasError } = this.state;

    return hasError ? <ErrorPage /> : children;
  }
}

const App = () => {
  return (
    <ErrorBoundary>
      <OrderHistoryPage />
    </ErrorBoundary>
  );
};
```

- OrderHistoryPage 컴포넌트에서 발생한 에러를 ErrorBoundary 에서 처리하고 에러 페이지를 노출할 수 있으며, 다양한 하위 컴포넌트에 적용이 가능하다

\*\* [p.232] ErrorBoundary 잘 만들어 놓으면 매우 좋을 것 같습니다!

### 7.3.5 상태 관리 라이브러리에서의 에러 처리

- 상태 관리 라이브러리의 경우 각각의 라이브러리 특성에 맞추어 에러를 핸들링하는 방식으로 에러 페이지를 띄우는 역할을 한다

### 7.3.6 React-Query 를 활용한 에러 처리

- 라이브러리 자체에서 제공하는 에러 상태를 반환하여 간단하게 에러를 처리할 수 있다

### 7.3.7 그 밖의 에러 처리

- 커스텀 에러의 경우 별도의 핸들러를 구현하여 에러를 처리
- 일관적인 로직으로 에러를 처리하고 싶은 경우 Axios 의 인터셉터를 활용하여 200, 400, 500 번대의 에러를 하나의 방법으로 묶어서 처리가 가능하다

```ts
export const apiRequester: AxiosInstance = axios.create({
  baseURL: orderApiBaseUrl,
  ...defaultConfig,
});

export const httpSuccessHandler = (response: AxiosResponse) => {
  if (response.data.status !== 'SUCCESS') {
    throw new CustomError(response?.data.message, response);
  }

  return response;
};

apiRequester.interceptors.response.use(httpSuccessHandler, httpErrorHandler);

const createOrder = (data: CreateOrderData) => {
  try {
    const response = apiRequester.post('https://...', data);

    successHandler(response);
  } catch (error) {
    // status가 SUCCESS가 아닌 경우 에러로 전달된다
    errorHandler(error);
  }
};
```

## 7.4 API 모킹

- 프론트 개발을 하다보면 API 가 완성되기 전에 모킹을 활용하여 개발하는 케이스가 발생
- 배민에서는 axios-mock-adapter, NextApiHandler 등을 사용하여 API 를 모킹

## 7.4.1 JSON 파일 불러오기

- 간단한 조회의 경우 json 파일을 간단히 만들어 사용한다
- 다만 실제 API 주소를 사용하는 것이 아니므로 추후에 경로 변경 필요

```ts
// mock/service.ts
const SERVICES: Service[] = [
  {
    id: 0,
    name: '배달의민족',
  },
  {
    id: 1,
    name: '만화경',
  },
];

export default SERVICES;

// api.ts
const getServices = ApiRequester.get('/mock/service.ts');
```

### 7.4.2 NextApiHandler 활용하기

- Next.js 를 사용하고 있으면 NextApiHandler 를 활용

```ts
// api/mock/brand
import { NextApiHandler } from 'next';

const BRANDS: Brand[] = [
  {
    id: 1,
    label: '배민스토어',
  },
  {
    id: 2,
    label: '비마트',
  },
];

const handler: NextApiHandler = (req, res) => {
  // request 유효성 검증
  res.json(BRANDS);
};

export default handler;
```

### 7.4.3 API 요청 핸들러에 분기 추가하기

- 개발시에는 목업 함수를 활용하고, 실제로 필요한 경우에만 API 를 요청하는 형태로 개발이 가능하다

```ts
const mockFetchBrands = (): Promise<FetchBrandsResponse> =>
  new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 'SUCCESS',
        message: null,
        data: [
          {
            id: 1,
            label: '배민스토어',
          },
          {
            id: 2,
            label: '비마트',
          },
        ],
      });
    }, 500);
  });

const fetchBrands = () => {
  if (useMock) {
    return mockFetchBrands();
  }

  return requester.get('/brands');
};
```

### 7.4.3 axios-mock-adapter 로 모킹하기

- axios-mock-adapter 를 활용하면 Axios 요청을 가로채서 응답을 해주는 기능으로 활용이 가능하다
- 상태 코드, 응답 지연 시간 및 다양한 메서드에 따른 요청도 가능하다

```ts
// mock/index.ts
import axios from "axios";
import MockAdapter from "axios-mock-adapter";
import fetchOrderListSuccessResponse from "fetchOrderListSuccessResponse.json";

interface MockResult {
  status?: number;
  delay?: number;
  use?: boolean;
}

const mock = new MockAdapter(axios, { onNoMatch: "passthrough" });

export const fetchOrderListMock = () =>
  mock.onGet(/\/order\/list/).reply(200, fetchOrderListSuccessResponse);

// fetchOrderListSuccessResponse.json
{
    "data": [
        {
            "orderNo": "ORDER1234", "orderDate": "2022-02-02", "shop": {
            "shopNo": "SHOP1234",
            "name": "가게이름1234" },
            "deliveryStatus": "DELIVERY"
        },
    ]
}
```

### 7.4.5 목업 사용 여부 제어하기

- 플래그를 사용하여 dev 환경과 실제 배포 환경에 대한 설정을 간단하게 변경이 가능하다
- 로컬 개발시에는 목업을 사용하고, dev 서버가 필요할 때에는 간단하게 설정 변경 가능

```ts
const useMock = Object.is(REACT_APP_MOCK, 'true');

const mockFn = ({ status = 200, time = 100, use = true }: MockResult) =>
  use &&
  mock.onGet(/\/order\/list/).reply(
    () =>
      new Promise((resolve) =>
        setTimeout(() => {
          resolve([
            status,
            status === 200 ? fetchOrderListSuccessResponse : undefined,
          ]);
        }, time)
      )
  );

if (useMock) {
  mockFn({ status: 200, time: 100, use: true });
}
```

- 더 나아가 스크립트 실행 시점에 해당 부분을 적용하기 위해 package.json 에 명령어를 추가하는 방식도 사용 가능하다

```json
// package.json

{
  "scripts": {
    "start:mock": "REACT_APP_MOCK=true npm run start",
    "start": "REACT_APP_MOCK=false npm run start"
  }
}
```

- axios-mock-adapter 를 사용하면 실제로 통신이 발생하는 것이 아니므로 API 의 흐름을 파악하고 싶다면 react-query-devtools, redux-text-tool 같은 별도의 도구 사용이 필요하다
- 네트워크 요청을 확인하고 싶은 경우라면 Cypress 같은 웹훅을 사용하면 된다

\*\* [p.248] 책이 나온 시점을 고려하면 배민에서는 아마도 지금쯤이면 확실히 React-query 를 사용하지 않을까 싶습니다! + 고객 지향 서비스에서는 번들 사이즈가 작은 swr 을 사용하는 관점도 흥미롭네요
\*\* 그리고 이번 챕터의 경우 사실상 타입에 대한 내용은 거의 없었지만, 트랜드를 주도하는 배민에서는 이런 기술을 사용하는구나 하는 관점에서는 오히려 좋았던 부분이 많았습니다. 다음에 배민에서 프론트 책을 낸다면, 본인들이 특정 카테고리에 사용하는 라이브러리와 기법 등을 소개하고 추후에는 이런것을 적용 예정이다! 이런 내용을 써주면 프론트 신입 개발자 혹은 이직을 고민하는 사람들에게 큰 길잡이 + 도움이 되는 책이 되지 않을까 싶네요!
