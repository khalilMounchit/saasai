import { wallpaper } from "../../Signals";

const wallpapers = ["1.png", "3.png","2.jpg", "4.jpg", "5.jpg", "6.png", "7.png", "8.png", "9.png", "10.png"];
export default function Customize() {
  return (
    <div class='w-full h-full flex flex-col gap-2 items-center p-5 rounded-b-md'>
        <div class='h-96 w-full md:w-96 bg-center bg-cover bg-no-repeat rounded-md border-2 border-blue-500 drop-shadow-glow shadow-blue-500' style={{backgroundImage:`url("/wallpapers/${wallpaper.value}")`}}/>
        <div class='flex flex-row z-20 items-center justify-center gap-2 flex-wrap overflow-y-scroll h-full'>
            {wallpapers.map((wp) => {
                return <button class='h-40 w-72 bg-center bg-cover bg-no-repeat rounded-md border-2 border-black/0 hover:border-blue-500 transition' style={{backgroundImage:`url("/wallpapers/${wp}")`}} onClick={() => {
                    wallpaper.value = wp;
                    localStorage.setItem("wallpaper", wp);
                }}/>
            })}
        </div>
        <p class='text-white/50 text-xs text-center mb-8 md:mb-0'>Wallpapers by <a href="https://unsplash.com/@ricvath" target="_blank" class='hover:text-white transition'>Richard Horvath</a> & <a href="https://unsplash.com/@fakurian" target="_blank" class='hover:text-white transition'>Milad Fakurian</a> on Unsplash</p>
    </div>
  )
}
