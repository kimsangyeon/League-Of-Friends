/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  images: {
    domains: ['ddragon.leagueoflegends.com'],
  },

  async rewrites() {
    return [
      {
        source: '/lol/:slug*',
        destination: 'https://kr.api.riotgames.com/lol/:slug*',
      }
    ]
  },
}
