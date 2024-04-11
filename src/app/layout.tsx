import type { Metadata, ResolvingMetadata } from 'next'
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";

// import Header from "@/components/header/header";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const page = await client.getSingle("settings");

  return {
    title: prismic.asText(page.data.site_title),
    description: page.data.meta_description || "Besta Deild description fallback",
    navigation: page.data.navigation || [],
  } as Metadata;
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <header>Header!</header>
        {children}
        <footer>Footer!</footer>
        </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}

