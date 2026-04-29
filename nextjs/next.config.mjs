/** @type {import('next').NextConfig} */
const nextConfig = { async redirects(){
  return[
    {
      source: "/about",
      destination: "/login",
      permanent: true
    }
  ]
}
};

export default nextConfig;
