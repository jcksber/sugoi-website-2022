import { DAppProvider } from '@usedapp/core'

import "@fortawesome/fontawesome-svg-core/styles.css";
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {

  const config = {
  }
  return (
    <DAppProvider config={config}>
      <Component {...pageProps} />
    </DAppProvider>
  )
}

export default MyApp
