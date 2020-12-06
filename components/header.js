import React from "react";
import Link from "next/link";
import {useRouter} from "next/router";

const Header = () => {
  const router = useRouter();
    const styles = {
      header: {
        margin: 20,
        padding: 20,
        border: "1px solid #DDD"
      },
      link: {
        margin: 15
      },
      active:{
        margin: 15,
        color:"blue"
      }
    }
  return (
    <div style={styles.header}>
      <Link href="/" passHref>
        <span style={router.pathname === "/" ? styles.active : styles.link}>Accueil</span>
      </Link>
      <Link href="/blog" passHref>
        <span style={styles.link}>Details regions</span>
      </Link>
      <Link href="/apropos" passHref>
        <span style={styles.link}>A propos</span>
      </Link>
    </div>
  )
}

export default Header;

