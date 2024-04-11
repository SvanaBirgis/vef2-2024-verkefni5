import { createClient } from "@/prismicio";
import { PrismicText } from "@prismicio/react";
import styles from "./footer.module.scss";
import Bounded from "../bounded/bounded";


export async function Footer() {
    const client = createClient();
    const settings = await client.getSingle("settings");
  
    return (
      <Bounded as="footer" className={styles.footer}>
        <div className={styles.content}>
          <PrismicText field={settings.data.site_title} /> 
          <p className={styles.name}>© 2024 Svana Björg Birgisdóttir.</p>
        </div>
      </Bounded>
    );
  }