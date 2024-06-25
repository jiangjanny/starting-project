

import logoImg from "@/assets/logo.png";
import classes from "./main-header.module.css"
import Image from 'next/image'
import MainHeaderBackground from './main-header-background';
import Link from 'next/link'
import NavLink from './nav-link';
export default function MainHeader() {

  return (
    <div>
      <MainHeaderBackground/>
      <header className={classes.header}>
          <Link href="/" className={classes.logo}>
              <Image src={logoImg} alt="A plate with a knife and fork on either side of it." priority/>
              NextLevel Food
          </Link>
          <nav className={classes.nav}>
          <ul>
            <li>
              <NavLink href="/meals">Browse Meals</NavLink>
            </li>
            <li>
              <NavLink href="/community">Foodies Community</NavLink>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}