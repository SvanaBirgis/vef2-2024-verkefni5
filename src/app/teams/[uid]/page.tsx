import { createClient } from "@/prismicio";
import { PrismicImage, PrismicText } from "@prismicio/react";
import { Metadata } from "next";

type Params = { uid: string };


export default async function Team({ params }: { params: Params }) {
    const client = createClient();

    const team = await client.getByUID("teams", params.uid);
    console.log(team, "lið");

    return <div>
        {team.data.title}
        <PrismicImage field={team.data.teamlogo} />
        <PrismicText field={team.data.description} />

        </div>;
}