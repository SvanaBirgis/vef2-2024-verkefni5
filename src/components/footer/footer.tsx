import { createClient } from "@/prismicio";
import { PrismicText } from "@prismicio/react";
import styles from "./footer.module.css";


export async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");
  
    return (
      <footer className={styles.footer}>
        <div className={styles.content}>
          <PrismicText field={settings.data.site_title} /> 
          <div>© 2024 Svana Björg Birgisdóttir.</div>
        </div>
      </footer>
    );
  }