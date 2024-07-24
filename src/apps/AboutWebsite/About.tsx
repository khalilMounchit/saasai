import { mdiGithub, mdiRestart } from "@mdi/js";
import { pepsimode } from "../../Signals";
import t from "../../i18n/i18n";
import Icon from "@mdi/react";

export default function AboutWebsite() {
  return (
    <div class='bg-slate-700 text-white rounded-md pt-12 h-full w-full flex flex-col items-center text-center text-md'>
      <div class='flex flex-row gap-2 items-end justify-center w-full py-5 '>
      <h1 class='font-bold text-4xl gradient-text'>{pepsimode.value ? 'Pepsi OS' : 'we own it'}</h1>
        <p class='font-mono text-sm opacity-50'> ai{pepsimode.value ? ' - 🐈 Pepsi mode' : ''}</p>
      </div>

      <div class='flex flex-col gap-2 w-full h-full p-5 text-start text-md font-light'>
        <p class='text-lg text-center'>{t('app.aboutwebsite.content.useadvice')}</p>
        <p class='text-lg text-center'>{t('welcome.desc3')}</p>
                <div class='h-full'/>
        <p class='text-sm text-center w-full text-gray-500'>Copyright © {new Date().getFullYear()} <a href='https://github.com/khalilMounchit' target='_blank'>Khalil Mounchit</a> {t('copyright')}</p>
        <div class='flex flex-row items-center justify-center w-full text-white mt-2 mb-1 p-4 gap-3 '>
          <a class='hover:bg-white hover:text-black/80 transition bg-white/20 rounded-full flex gap-2 items-center px-2 py-1' href='https://github.com/khalilMounchit/saas' target="_blank"><Icon path={mdiGithub} size={1}/> {t('actionbuttons.srccode')}</a>
          <button class='hover:bg-white hover:text-black/80 transition bg-white/20 rounded-full flex gap-2 items-center px-2 py-1' onClick={() => {window.location.reload(); localStorage.clear()}}><Icon path={mdiRestart} size={1}/> {t('actionbuttons.reset')}</button>
        </div>
      </div>
    </div>
  )
}