import { SessionProvider } from "next-auth/react"
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './components/Layout'


export default function App({ Component, pageProps:{session,...pageProps} }: AppProps) {
  return <Layout>
    <SessionProvider session={session}>
      <Component {...pageProps} />
    </SessionProvider>
      </Layout>
}
