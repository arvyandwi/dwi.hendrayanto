const CONFIG = {
  // profile setting (required)
  profile: {
    name: "dwi.hendrayanto",
    image: "/my-face-transparent.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "QA Engineer",
    bio: "Ctrl + Z my mistakes, Ctrl + S my wins. 😎🛠️",
    email: "arvyandwi19@gmail.com",
    linkedin: "arvyan-dwi",
    github: "arvyandwi",
    instagram: "",
  },
  projects: [
    {
      name: `Resume`,
      href: "https://drive.google.com/file/d/1mAfm_NCsC4UHY67Cq5-cE5gVTU7OluR0/view?usp=sharing",
    },
  ],
  // blog setting (required)
  blog: {
    title: "dwi.hendrayanto.blog",
    description: "welcome to dwi.hendrayanto.blog!",
    scheme: "dark", // 'light' | 'dark' | 'system'
  },

  // CONFIG configration (required)
  link: "https://dwihendrayantoblog.vercel.app",
  since: 2025, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: true,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
