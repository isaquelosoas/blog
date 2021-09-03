import '../styles/globals.css'
import { Provider } from 'react-redux'
import { storeWrapper } from './storeConfig/store'




function MyApp({ Component, pageProps }) {
  return (<Component  {...pageProps} />
    )
}

export default storeWrapper.withRedux(MyApp);
