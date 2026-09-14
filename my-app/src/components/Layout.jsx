import SiteFooter from './SiteFooter.jsx'
import SiteHeader from './SiteHeader.jsx'
import IntroLoader from './IntroLoader.jsx'

function Layout({ children }) {
  return (
    <div className="site-shell">
      <IntroLoader />
      <SiteHeader />
      {children}
      <SiteFooter />
    </div>
  )
}

export default Layout
