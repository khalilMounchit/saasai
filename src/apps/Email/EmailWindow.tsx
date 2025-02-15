import t from "../../i18n/i18n";

export default function EmailWindow() {
  return (
    <div class='flex flex-col items-center justify-center h-full w-full rounded-b-md text-center'>
        <img src='/apps/email.png' class='w-[100px] mb-4' alt='Github logo' />
        <p class='text-white text-2xl mb-4'>{t("For more information")}</p>
        <p class='text-white text-lg mb-4'>{t("Contact us:")}</p>
        <a href='mailto:weownit@gmail.com' class='gradient-text font-bold text-2xl mb-4 hover:scale-105 transition' target='_blank'>khalilmounchit@gmail.com</a>
    </div>
  )
}
