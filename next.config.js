const {parsed: env} = require('dotenv').config({path: `./.env`});

/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,

  images: {
    domains: ['ddragon.leagueoflegends.com'],
  },

  async rewrites() {
    return [
      {
        source: '/lol/summoner/:slug*',
        destination: 'https://kr.api.riotgames.com/lol/summoner/:slug*',
      },
      {
        source: '/lol/league/:slug*',
        destination: 'https://kr.api.riotgames.com/lol/league/:slug*',
      },
      {
        source: '/lol/match/:slug*',
        destination: 'https://asia.api.riotgames.com/lol/match/:slug*',
      },
    ]
  },

  env: {
    ...env,
  },
}
