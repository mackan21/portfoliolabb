import * as React from "react";
import { graphql, useStaticQuery, Link } from "gatsby";
import * as styles from "../styles/navbar.module.css";

const Navbar = () => {
  const data = useStaticQuery(graphql`
    query NavbarQuery {
      contentfulHomepage(slug: { eq: "hello-im" }) {
        name
      }
      allContentfulNavItem(sort: { order: ASC }) {
        nodes {
          label
          path
          order
        }
      }
    }
  `);

  const brand = data?.contentfulHomepage?.name || "Portfolio";
  const items = data?.allContentfulNavItem?.nodes || [];

  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <Link to="/" className={styles.brand}>
          {brand}
        </Link>

        <nav className={styles.nav} aria-label="Main navigation">
          <ul className={styles.list}>
            {items.map((item) => (
              <li key={item.order} className={styles.item}>
                <Link
                  to={item.path}
                  className={styles.link}
                  activeClassName={styles.active}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
