import "../../styles/globals.css";
import { ThemeProvider } from "styled-components";
import LayoutPage from "../components/LayoutPage";
const theme = {
  colors: {
    primary: "red",
    secondary : 'blue'
  },
};
function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <LayoutPage>
        <Component {...pageProps} />
      </LayoutPage>
    </ThemeProvider>
  );
}

export default MyApp;
