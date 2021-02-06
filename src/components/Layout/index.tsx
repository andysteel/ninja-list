import Head from 'next/head';
import Footer from '../Footer';
import Navbar from '../Navbar';

const Layout = ({ children }: any) => (
  <div className="content">
    <Head>
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;600;700&display=swap" rel="stylesheet" />
    </Head>
    <Navbar />
    {children}
    <Footer />
  </div>
);

export default Layout;
