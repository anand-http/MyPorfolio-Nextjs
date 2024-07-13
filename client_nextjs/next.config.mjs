/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ["cdn.sanity.io"]
    },
    env: {
        SANITY_TOKEN: process.env.SANITY_TOKEN,
        DATASET: process.env.DATASET,
        PROJECT_ID: process.env.PROJECT_ID
    }


};

export default nextConfig;
