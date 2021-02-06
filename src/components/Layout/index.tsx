import Footer from '../Footer';
import Navbar from '../Navbar';

const Layout = ({ children }: any) => (
  <div className="content">
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
