import type { Metadata, ResolvingMetadata } from 'next'
import { PrismicPreview } from "@prismicio/next";
import { repositoryName } from "@/prismicio";
import { createClient } from "@/prismicio";
import * as prismic from "@prismicio/client";
import Header from "@/components/header/header";
import { Footer } from "@/components/footer/footer";

export async function generateMetadata(): Promise<Metadata> {
  const client = createClient();

  const settings = await client.getSingle("settings");

  return {
    title: prismic.asText(settings.data.site_title),
    navigation: settings.data.navigation || [],
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
        <Header />
        {children}
        <Footer />
        </body>
      <PrismicPreview repositoryName={repositoryName} />
    </html>
  );
}

