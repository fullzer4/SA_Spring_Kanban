import type { AppProps } from 'next/app'
import "@/scss/global.scss"
import { PopupProvider } from '@/context/Popups'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <PopupProvider>
      <Component {...pageProps} />
    </PopupProvider>
  )
}
