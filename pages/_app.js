import '../styles/globals.css'
import data from '../theme/test.js'

console.log(data)

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />
}

export default MyApp
