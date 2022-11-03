import Footer from "../../components/Footer/Footer";
import Nav from "../../components/Nav/Nav";
import "./Layout.scss";

const Layout = ({children}) => {
  return (
    <div className="layout">
        <nav className="layout__nav">
            <Nav />
        </nav>
        <main className="layout__main">{children}</main>
        <footer className="layout__footer">
          <Footer />
        </footer>
    </div>
  )
}

export default Layout