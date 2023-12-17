import "@/styles/globals.css"
import "@/styles/animation.css"
import "@/styles/cssGrid.css"
import "@/styles/Home.module.css"


import { PortfolioProvider } from "@/contextApi/PortfolioContext"
import ThemeProvider from "@/context/themeContext"


export default function App({ Component, pageProps }) {

  return (
    <PortfolioProvider>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </PortfolioProvider>
  )
}
