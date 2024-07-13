import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';


export const client = createClient({
    projectId: process.env.PROJECT_ID,
    dataset: process.env.DATASET,
    apiVersion: "2022-02-01",
    usecdn: false,
    token: process.env.SANITY_TOKEN
});


const builder = imageUrlBuilder(client)
export const urlFor = (source) => builder.image(source);