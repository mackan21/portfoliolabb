import * as React from "react";
import Navbar from "./Navbar";
import * as styles from "../styles/layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.page}>
      <Navbar />
      <main className={styles.main}>{children}</main>
      <footer className={styles.footer}>© {new Date().getFullYear()}</footer>
    </div>
  );
};

export default Layout;
