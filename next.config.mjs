/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    typescript:{
        //just ignore typscript errors (source-code and external components don't have types in the first place)
        ignoreBuildErrors: true
    }
};

export default nextConfig;
