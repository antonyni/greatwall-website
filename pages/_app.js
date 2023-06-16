import '@/styles/globals.css'
import Layout from "../components/Layout"
import {themeOptions} from "../theme";
import { createTheme,ThemeProvider } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';


export default function App({ Component, pageProps }) {
  const newTheme = createTheme(themeOptions);
  return (
  <ThemeProvider theme={newTheme}>
  <CssBaseline />
  <Layout>
  <Component {...pageProps} />
  </Layout>
  </ThemeProvider>
  );
}
