import "@styles/index.scss";

import PageChangeTransition from "@components/layout/transitions/PageChangeTransition";
import DesktopSideContentTransition from "@components/layout/transitions/DesktopSideContentTransition";
import NextPageTransition from "@components/layout/transitions/NextPageTransition";
import { Provider } from "react-redux";
import store from "@redux/store";
import Layout from "@components/layout";
import CircleLinesMouseMoveBackgroundAnimation from "@components/layout/CircleLinesMouseMoveBackgroundAnimation";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <CircleLinesMouseMoveBackgroundAnimation />
      <Layout>
        <DesktopSideContentTransition />
        <PageChangeTransition>
          <Component {...pageProps} />
        </PageChangeTransition>
        <NextPageTransition />
      </Layout>
    </Provider>
  );
}

export default MyApp;
