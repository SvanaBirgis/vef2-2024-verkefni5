import { Metadata } from "next";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import styles from "@/app/page.module.scss";
import { CallToActionProps } from "@/slices/CallToAction";


export default async function Index() {
  // The client queries content from the Prismic API
  const client = createClient();
  const home = await client.getByUID("page", "home");

  return (
    <div className={styles.container}>
      <SliceZone slices={home.data.slices} components={components} />
    </div>
  );
}
