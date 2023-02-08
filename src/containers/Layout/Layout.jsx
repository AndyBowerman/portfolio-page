import Nav from "../../components/Nav/Nav";
import "./Layout.scss";

const Layout = ({ children, position }) => {
  return (
    <div className="layout">
      <main className="layout__main">
        <nav className="layout__nav">
          <Nav position={position} />
        </nav>
        {children}
      </main>
    </div>
  );
};

export default Layout;
