import Layout from '@/components/Layout'
import '@/styles/global.css'
import { AppProvider } from 'store'

export default function App({ Component, pageProps }) {
    return (
        <AppProvider>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </AppProvider>  
    )
}