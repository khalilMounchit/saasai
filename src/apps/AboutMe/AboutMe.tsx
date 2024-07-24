import { Animated } from "react-animated-css";
import t from "../../i18n/i18n";

export default function AboutMe() {
  return (
    <div class='rounded-md h-full w-full bg-gray-700'>
        <div class='p-10 rounded-md gap-5 text-center text-white w-full h-full flex flex-col pt-20 items-center justify-center'>
            <Animated animationIn="fadeInDown"  animationOut="fadeOut" isVisible={true} animationInDuration={1000}>
                <h1 class='text-4xl font-bold'><span class='font-bold '>Hey!</span> {t('Welcome to our saas')}<span class='gradient-text'>We OWn It</span>.</h1>
                <p>{t('software as a service')}</p>
            </Animated>

            <Animated animationIn="fadeIn" animationOut="fadeOut" isVisible={true} animationInDuration={2000} animationInDelay={500}>
                <p class='max-w-2xl'>{t('all ai tools that you could need')}</p>
            </Animated>

        </div>
    </div>
  )
}
