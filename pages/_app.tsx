import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import { Inter } from 'next/font/google'
import { createContext } from 'react'

const inter = Inter({ subsets: ['latin'] })
const ThemeContext = createContext('dark')

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeContext.Provider value="dark">
      <div className={inter.className}>
        <Component {...pageProps} />
      </div>
    </ThemeContext.Provider>
  )
}
