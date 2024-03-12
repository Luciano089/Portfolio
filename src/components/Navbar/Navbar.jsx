import { useState } from "react";
import React from "react";
import { RiMenuLine, RiCloseLine } from "react-icons/ri"; 
import styles from "./Navbar.module.css";

export const Navbar = () => {
  const [menuOpen, setOpenMenu] = useState(false);

  const handleScrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setOpenMenu(false);
  }
  return (
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>
        Portfólio
      </a>

      <div className={styles.menu}>
        {menuOpen ? (
          <RiCloseLine
            color="white"
            fontSize={40}
            className={styles.menuBtn}
            onClick={() => setOpenMenu(!menuOpen)}
          />
        ) : (
          <RiMenuLine
            color="white"
            fontSize={40}
            className={styles.menuBtn}
            onClick={() => setOpenMenu(!menuOpen)}
          />
        )}

        <ul
          className={`${styles.menuItems} ${menuOpen && styles.menuOpen}`}
          onClick={() => setOpenMenu(false)}
        >
          
          <li>
            <a href="#tecs"  onClick={() => handleScrollToSection("techs")}>Técnologias</a>
          </li>
          <li>
            <a href="#projetos" onClick={() => handleScrollToSection("projects")}>Projetos</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
