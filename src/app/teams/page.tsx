import { Metadata } from "next";
import { notFound } from "next/navigation";

import { SliceZone } from "@prismicio/react";
import * as prismic from "@prismicio/client";

import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { PrismicText } from "@prismicio/react";
import { PrismicNextImage, PrismicNextLink } from "@prismicio/next";
import { RichTextField } from "@prismicio/client";

type Params = { uid: string };

/**
 * This page renders a Prismic Document dynamically based on the URL.
 */



export default async function Page({ params }: { params: Params }) {
  const client = createClient();
  const page = await client
    .getByUID("page", "teams")
    .catch(() => notFound());

  return (
    <div>
      <PrismicText field={page.data.title} />
      {page.data.navigation.map((item, index) => (
        <div key={index}>
          <PrismicNextLink field={item.link}>
                  {item.teamname}
          </PrismicNextLink>
          <PrismicNextImage field={item.teamlogo} />
        </div>
      ))}
    </div>
  );
}

