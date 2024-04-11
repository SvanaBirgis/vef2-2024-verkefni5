import { createClient } from "@/prismicio";
import { components } from "@/slices";
import { notFound } from "next/navigation";
import { SliceZone } from "@prismicio/react";

type Params = { uid: string };

export default async function TeamsList( {params}: { params: Params } ) {
  const client = createClient();
  const page = await client
    .getByUID("page", "about")
    .catch(() => notFound());

  return <SliceZone slices={page.data.slices} components={components} />;
}