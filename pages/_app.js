import "../styles/globals.css";
import "mapbox-gl/dist/mapbox-gl.css";
import Router from "next/router";
import ProgressBar from "@badrap/bar-of-progress";

const progress = new ProgressBar({
  size: 4,
  color: "#fd5861",
  delay: 100,
});

Router.events.on("routeChangeStart", progress.start);

Router.events.on("routeChangeComplete", progress.finish);

Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;