import * as React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import * as styles from "../styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
