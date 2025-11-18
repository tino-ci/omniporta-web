import type { NextConfig } from "next";

const isNotDev =
    process.env.NODE_ENV === "production" || process.env.NODE_ENV === "test";

const rewrites: any[] = [];
if (["test", "development"].includes(process.env.NODE_ENV)) {
    rewrites.push(
        {
            source: '/api/:path*', // 匹配所有以 /api 开头的请求
            destination: `${process.env.NEXT_PUBLIC_LOCAL_API}/:path*`, // 转发到后端服务器
        }
    )
}
const nextConfig: NextConfig = {
    /* config options here */
    output: 'export',
    compiler: {
        styledComponents: true,
        removeConsole: isNotDev, // 暂时打开
    },
    reactStrictMode: false,
    experimental: {
        cssChunking: true
    },
    async rewrites() {
        return rewrites;
    },
    eslint: {
        ignoreDuringBuilds: true,
    },
    typescript: {
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
