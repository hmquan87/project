/** @type {import('next').NextConfig} */


const nextConfig = {
    async redirects() {
        return [
            {
                source: '/',
                destination: '/about',
                permanent: true, // Sử dụng true nếu bạn muốn redirect này là vĩnh viễn (301)
            },
        ];
    },
};

export default nextConfig;