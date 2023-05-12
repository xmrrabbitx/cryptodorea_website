import { SessionProvider } from "next-auth/react"
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import Layout from './components/Layout'
import LayoutDash from './components/dashboard/LayoutDash'

export default function App({ Component, pageProps:{...pageProps}, router }: AppProps) {
  
  if (router.pathname.startsWith('/dashboard')) {
    
    return <LayoutDash><Component {...pageProps} /></LayoutDash>

  }else{

    return <Layout>
                <Component {...pageProps} />
            </Layout>

  }
 
 
  
}
