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
      image: "/projets/chatwithrepo.webp",
      link: "https://chatwhitrepo.vercel.app/",
      skillsName: ["nextjs", "ai", "TailwindCSS", "Vite"]
    },
    {
      title: "chatwithtrainedai (2024-...)",
      subtitleEN: "Full Stack web fully featured modern trained chatbot",
      subtitleFR: "Chatbot web Full Stack entièrement équipé et moderne",
      descriptionEN:
          "AI chat allows you to engage in dynamic conversations, providing instant responses and creative solutions.",
      descriptionFR:
          "Le chat AI vous permet de participer à des conversations dynamiques, fournissant des réponses instantanées et des solutions créatives.",
      image: "/projets/aichat.webp",
      link: "https://chatwithtrainedai.vercel.app/",
      skillsName: ["Gemini", "Javascript", "TypeScript", "TailwindCSS"]
    },
    {
      title: "story&image  (2024)",
      executable: "story&image",
      subtitleEN: "An AI application that generates stories accompanied by images.",
      subtitleFR: "Une application AI qui génère des histoires accompagnées d'images.",
      descriptionEN: "This application allows users to create unique stories with AI-generated images, enhancing the storytelling experience.",
      descriptionFR: "Cette application permet aux utilisateurs de créer des histoires uniques avec des images générées par AI, améliorant ainsi l'expérience de narration.",
      image: "/projets/storyimg.webp",
      link: "https://ai-story-with-image.vercel.app/",
      skillsName: ["TypeScript","upsolash", "Gemini"]
    },
    {
      title: "LanguageTranslator  (2024)",
      executable: "LanguageTranslator",
      subtitleEN: "An AI application that translates text between multiple languages.",
      subtitleFR: "Une application AI qui traduit du texte entre plusieurs langues.",
      descriptionEN: "This application allows users to input text and receive translations in various languages, enhancing communication across cultures.",
      descriptionFR: "Cette application permet aux utilisateurs d'entrer du texte et de recevoir des traductions dans plusieurs langues, améliorant ainsi la communication entre les cultures.",
      image: "/projets/translator.webp",
      link: "https://langtranslator-khalilmounchits-projects.vercel.app/",
      skillsName: ["TypeScript","api", "Gemini"]
    },
    {
      title: "Ai_Neflix  (2024)",
      executable: "Ai_Neflix",
      subtitleEN: "An AI-powered application that provides personalized movie and show recommendations.",
      subtitleFR: "Une application alimentée par l'IA qui fournit des recommandations personnalisées de films et d'émissions.",
      descriptionEN: "This application uses AI to analyze user preferences and suggest movies and shows tailored to individual tastes.",
      descriptionFR: "Cette application utilise l'IA pour analyser les préférences des utilisateurs et suggérer des films et des émissions adaptés aux goûts de chacun.",
      image: "/projets/ntflxai.webp",
      link: "https://netflixaisuggestion-khalilmounchits-projects.vercel.app/",
      skillsName: ["TypeScript","youtube api", "Gemini"]
    }
];
 
export {languages, frameworks, db, tools, projects};