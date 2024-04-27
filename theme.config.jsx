import { useRouter } from "next/router";
export default {
  logo: <strong>우아한 TypeScript with 리액트</strong>,
  project: {
    link: "https://github.com/HOJOON07/wooahan_TS-with-React",
  },
  sidebar: {
    // 시이드바 설정 config
    titleComponent({ title }) {
      if (title.includes("목차")) {
        return (
          <div
            style={{
              fontSize: "1.2rem",
            }}
          >
            {title}
          </div>
        );
      } else if (title.includes("Study")) {
        return (
          <div
            style={{
              fontSize: "1.25rem",
            }}
          >
            {title}
          </div>
        );
      } else if (title.includes("발표")) {
        return (
          <div
            style={{
              fontSize: "1.2rem",
            }}
          >
            {title}
          </div>
        );
      }
      return <> {title}</>;
    },
    defaultMenuCollapseLevel: 1,
  },
  useNextSeoProps() {
    const { asPath } = useRouter();
    if (asPath === "/") {
      return {
        titleTemplate: "우아한 타입스크립트 with 리액트",
      };
    }
  },
  head: (
    <>
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta property="og:title" content="우아한 타입스크립트 with 리액트" />
      <meta
        property="og:description"
        content="우아한 타입스크립트 with 리액트 스터디 문서"
      />
    </>
  ),
};
