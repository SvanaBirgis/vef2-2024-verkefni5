import { notFound } from "next/navigation";
import { createClient } from "@/prismicio";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import styles from "./page.module.scss";

type Params = { uid: string };

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */

export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client.getByUID("page", "teams").catch(() => notFound());

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <PrismicText field={page.data.title} />
      </div>
      <div className={styles.grid}>
       
      {page.data.navigation.map((item, index) => (
        <div className={styles.navigation} key={index}>
          <PrismicNextLink field={item.link}>{item.teamname}</PrismicNextLink>
          <div className={styles.teamlogo}>
            <PrismicNextImage field={item.teamlogo} />
          </div>
        </div>
      ))}
       </div>
    </div>
  );
}
