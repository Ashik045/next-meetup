import Navbar from '../components/Navbar/Navbar'
import { ContextProvider } from '../context/Context'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
  return (
    <>
      <ContextProvider>
        <Navbar />
        <Component {...pageProps} />
      </ContextProvider>
    </>
  )
}

export default MyApp
