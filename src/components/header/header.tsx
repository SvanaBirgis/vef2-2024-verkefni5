import React from "react";
import Link from "next/link";
import styles from "./header.module.scss";
import { createClient } from "@/prismicio";
import { PrismicText } from "@prismicio/react";
import { PrismicNextLink } from "@prismicio/next";
import Bounded from "@/components/bounded/bounded";

export default async function Header() {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <Link href="/">
          <PrismicText field={settings.data.site_title} />
        </Link>
        <nav className={styles.navigation}>
          <ul className={styles.list}>
            {settings.data.navigation.map((item, index) => (
              <li key={item.label}>
                <PrismicNextLink field={item.link}>
                  {item.label}
                </PrismicNextLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
