import React from "react";
import styles from "../Navbar/Navbar.module.scss";
import logo from "@/components/HomePage/images/logo.png";
const Navbar = () => {
  const navLinks = [
    { title: "Home", url: "#" },
    { title: "Shop", url: "#" },
    { title: "Cart", url: "#" },
    { title: "Contact", url: "#" },
  ];

  return (
    <div>
      <div className={styles.navbar}>
        <div className={styles.logo}>
          <a href="#">
            <img src={logo.src} alt="Logo" />
          </a>
        </div>
        <ul className={styles.navLinks}>
          {navLinks.map((link, index) => (
            <li key={index}>
              <a href={link.url}>{link.title}</a>
            </li>
          ))}
        </ul>
        <div className={styles.signIn}>
          <a href="#">Sign In</a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
