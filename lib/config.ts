import { SiteConfig } from './types'

// 由于无法直接导入MD文件，我们使用一个默认配置
export const defaultConfig: SiteConfig = {
  defaultGame: "ethnoguessr",
  siteName: "EthnoGuessr",
  seo: {
    title: "EthnoGuessr - Educational Geography Game | Identify Ethnic Groups from Facial Averages!",
    description: "Experience EthnoGuessr, an educational geography-based guessing game where you identify ethnic groups from composite facial averages. Test your knowledge of human diversity and learn about different cultures!",
    ogImage: "/images/hot_game/ethnoguessr.png",
    keywords: "EthnoGuessr, educational game, geography game, ethnic groups, anthropology, human diversity, cultural learning, facial averages, geography quiz, online game, browser game"
  },
  advertisement: {
    key: ""
  },
  gameSettings: {
    randomGamesCount: 20
  },
  siteInfo: {
    companyName: "EthnoGuessr",
    siteUrl: "https://www.ethnoguessr.pro",
    email: "HarryC199101@gmail.com"
  },
  footer: {
    columns: [],
    copyright: "© 2025 All rights reserved.",
    disclaimer: "This is an independent website."
  }
}

// 获取随机游戏数量配置
export function getRandomGamesCount(): number {
  return defaultConfig.gameSettings?.randomGamesCount || 20
}

// 获取站点配置
export function getSiteConfig(): SiteConfig {
  return defaultConfig
}

export default defaultConfig 