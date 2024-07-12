import Preview from "../../components/Preview";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import "./MainLayout.scss";

function MainLayout({ children }) {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="container-custom">
        <Header />
        <div className="inner">
          {children}
          <Footer />
        </div>
      </div>
      <Preview />
    </div>
  );
}

export default MainLayout;
