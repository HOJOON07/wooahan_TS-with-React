// ESM import 문을 사용하여 모듈을 불러옵니다.
import withNextra from "nextra";

// withNextra 함수에 설정 객체를 전달합니다.
const nextra = withNextra({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
});

// 기본 내보내기로 nextra 함수의 결과를 내보냅니다.
export default nextra;

// 다른 Next.js 설정이 필요한 경우, 이렇게 내보내기를 할 수 있습니다:
// export default withNextra({ /* other next.js config */ });
