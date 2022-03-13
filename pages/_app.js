import "@styles/index.scss";

import MobilePageChangeTransition from "@components/layout/PageChangeTransition";
import { useRouter } from "next/router";
import { Provider } from "react-redux";
import store from "@redux/store";
import Layout from "@components/layout";
import DesktopSideContentTransition from "@components/layout/DesktopSideContentTransition";
import CircleLinesMouseMoveBackgroundAnimation from "@components/layout/CircleLinesMouseMoveBackgroundAnimation";

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <Provider store={store}>
      <CircleLinesMouseMoveBackgroundAnimation />
      <Layout>
        <DesktopSideContentTransition />
        <MobilePageChangeTransition location={router.pathname}>
          <Component {...pageProps} />
        </MobilePageChangeTransition>
      </Layout>
    </Provider>
  );
}

export default MyApp;
