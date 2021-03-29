import Link from "next/link";
import React from "react";
import styled from "styled-components";

const StyledLink = styled(Link)`
  color: red;
  background: blue;
`;
function DefaultNavbar({ orientation }) {
  return orientation === "mobile" ? (
    <nav id="mobile-menu-active">
      <ul id="nav">
        <li>
          <a href="/">Home</a>
        </li>

        <li>
          <Link href="/marketplace/mens">MENS</Link>
        </li>
        <li>
          <Link href="/marketplace/womens">WOMENS</Link>
        </li>
        <li>
          <Link href="/marketplace/kids">KIDS</Link>
        </li>
        <li>
          <Link href="/marketplace/uni-sexe">UNI-SEXE</Link>
        </li>
      </ul>
    </nav>
  ) : (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>

        <li>
          <Link href="/marketplace/mens">MENS</Link>
        </li>
        <li>
          <Link href="/marketplace/womens">WOMENS</Link>
        </li>
        <li>
          <Link href="/marketplace/kids">KIDS</Link>
        </li>
        <li>
          <Link href="/marketplace/uni-sexe">UNI-SEXE</Link>
        </li>
      </ul>
    </nav>
  );
}

export default DefaultNavbar;
