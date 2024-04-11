import { createClient } from "@/prismicio";
import { PrismicImage, PrismicRichText } from "@prismicio/react";
import styles from "./page.module.scss";

type Params = { uid: string };

export default async function Team({ params }: { params: Params }) {
  const client = createClient();
  const team = await client.getByUID("teams", params.uid);

  return (
    <div className={styles.container}>
      <div className={styles.titleContainer}>
        <div className={styles.title}>{team.data.title}</div>
        <div className={styles.teamlogo}>
          <PrismicImage className={styles.imageContainer} field={team.data.teamlogo} />
        </div>
      </div>
      <div className={styles.description}>
        <PrismicRichText field={team.data.description} />
      </div>
    </div>
  );
}
