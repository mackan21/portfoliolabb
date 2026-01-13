import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";

import * as styles from "../styles/footer.module.css";

const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      contentfulFooter(slug: { eq: "footer" }) {
        title
        email
      }
      allContentfulNavItem(sort: { order: ASC }) {
        nodes {
          label
          path
        }
      }
    }
  `);

  const footer = data.contentfulFooter;
  const navItems = data.allContentfulNavItem.nodes;

  return (
    <footer className={styles.footer}>
      <div className={styles.inner}>
        <p className={styles.title}>{footer.title}</p>

        <nav className={styles.nav}>
          {navItems.map((item) => (
            <Link key={item.path} to={item.path} className={styles.link}>
              {item.label}
            </Link>
          ))}
        </nav>

        <p className={styles.email}>{footer.email}</p>

        <p className={styles.copy}>© {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
};

export default Footer;
