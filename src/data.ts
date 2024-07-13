import {
   mdiLanguagePython,
   mdiLanguageJavascript,
   mdiLanguageTypescript,
   mdiLanguageHtml5,
   mdiDotNet,
   mdiLanguagePhp,
   mdiApi, 
   mdiReact, 
   mdiCellphone,
   mdiNodejs,
   mdiElectronFramework, 
   mdiRobot,
   mdiDatabase,
   
   mdiMicrosoftVisualStudioCode,
   mdiGithub,

   mdiTailwind,
   mdiWeb,
   mdiLightningBolt,
   mdiOwl,
   mdiLanguageGo,
   mdiAbacus,
 
 
  
} from '@mdi/js';

const languages: Skill[] = [
  {name:"JavaScript",mdi:mdiLanguageJavascript, stars:5},
  {name:"TypeScript",mdi:mdiLanguageTypescript, stars:5},
  {name:"Python",mdi:mdiLanguagePython, stars:4},
  {name:"VB.net 👴",mdi:mdiDotNet, stars:4},
  {name:"HTML & CSS",mdi:mdiLanguageHtml5, stars:3},

  {name:"C#",mdi:mdiDotNet, stars:3},
  {name:"Go",mdi:mdiLanguageGo, stars:3},
  {name:"PHP",mdi:mdiLanguagePhp, stars:2},
]

const frameworks: Skill[] = [
  {name:"React",mdi:mdiReact, stars:4},
  {name:"Svelte",mdi:mdiWeb, stars:5},
  {name:"React Native Expo",mdi:mdiCellphone, stars:4},
  {name:"Node.js",mdi:mdiNodejs, stars:5},
  {name:"BunJS",mdi:mdiLightningBolt, stars:5},
  {name:"Electron",mdi:mdiElectronFramework, stars:2},
  {name:"Hapi",mdi:mdiApi, stars:4},
  {name:"Elysia",mdi:mdiOwl, stars:4},
  {name:"discord.js",mdi:mdiRobot, stars:2},
  {name:"Tailwind CSS",mdi:mdiTailwind, stars:5},
  {name:"Preact",mdi:mdiReact, stars:4},
  {name:"Vite",mdi:mdiLightningBolt, stars:4},
  {name:"Echo (Go)",mdi:mdiWeb, stars:3},
  {name:"Axios", mdi:mdiAbacus, stars: 4},

]

const db: Skill[] = [
  {name:"MySQL", mdi:mdiDatabase, stars:4},
  {name:"MariaDB", mdi:mdiDatabase, stars: 4},
  {name:"PostgresQL", mdi:mdiDatabase, stars:4},
  {name:"MongoDB", mdi:mdiDatabase, stars:5},
  {name:"SQLite", mdi:mdiDatabase, stars:2},
]

const tools: Skill[] = [
  
  {name:"Visual Studio Code", mdi:mdiMicrosoftVisualStudioCode},
  {name:"GitHub", mdi:mdiGithub},
  
 
 
]

const projects: Project[] = [
    {
      title: "Chatwhitrepo (2024-...)",
      subtitleEN: "FullStack website to chat with your preject repo or Markdownfile. First project in Go!",
      subtitleFR: "Site Web FullStack pour télécharger des vidéos YouTube (ou autre) sans publicité ni pop-ups. Premier projet en Go !",
      descriptionEN:
          "An easy and fast ai ai chat powered by a Gemini_ai_API backend. No ads, no pop-ups.",
      descriptionFR:
          "Un chat AI facile et rapide alimenté par une API Gemini_ai_API. Pas de publicité, pas de pop-up.",
      image: "/public/projets/téléchargement.png",
      link: "https://chatwhitrepo.vercel.app/",
      skillsName: ["nextjs", "ai", "TailwindCSS", "Vite"]

    },
    {
      title: "chatwithtrainedai (2024-...)",
      subtitleEN: "Full Stack web fully featured modern trained chatbot",
      subtitleFR: "Chatbot web Full Stack entièrement équipé et moderne",
      descriptionEN:
          "chatwithtrainedai, a content generation bot, simplifies and elevates your creative process. Whether crafting engaging blog posts, soulful song lyrics, or attention-grabbing Insta captions, chatwithtrainedai's advanced algorithms seamlessly transform your ideas into polished, professional content.",
      descriptionFR:
          "chatwithtrainedai, un bot de génération de contenu, simplifie et élève votre processus créatif. Que vous rédigiez des articles de blog captivants, des paroles de chansons émouvantes ou des légendes Instagram accrocheuses, les algorithmes avancés de chatwithtrainedai transforment vos idées en contenu poli et professionnel de manière transparente.",
      image: "/public/projets/chatgpt.png",
      link: "https://chatwithtrainedai.vercel.app/",
      skillsName: ["Svelte", "Elysia", "TypeScript", "BunJS", "TailwindCSS", "MongoDB", "Vite"]
    },
    {
      title: "Sharefile  (2024)",
      executable: "Sharefile",
      subtitleEN: "is an application that allows a user to seamlessly share files across other devices.",
      subtitleFR: "est une application qui permet à un utilisateur de partager facilement des fichiers entre différents appareils.",
      descriptionEN: "is an application that allows a user to seamlessly share files across other devices without any signups or compromises about quality.",
      descriptionFR: "est une application qui permet à un utilisateur de partager facilement des fichiers entre différents appareils sans inscription ni compromis sur la qualité.",
      image: "/public/projets/sharefile.png",
      link: "https://sharefile-dun.vercel.app/",
      skillsName: ["TypeScript","uploadthing", "PyGame"]
    }
];
 
export {languages, frameworks, db, tools, projects};