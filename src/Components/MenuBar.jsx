import MenuLinkCard from "./MenuLinkCard";
import MenuLinkSpeakers from "./MenuLinkSpeakers";
import MenuLinkEarphones from "./MenuLinkEarphones";
import {motion} from 'framer-motion'

const MenuBar = () => {
  return (
    <motion.div className="lg:hidden bg-black" initial={{y: 0, opacity:0}} animate={{y:[0.3,1], opacity:1}} exit={{y:0, opacity:0}}>
      <div className="flex flex-col gap-[6.2rem] md:gap-0 md:flex-row w-full items-center justify-between bg-white px-[2.4rem] mb:px-[4rem] pb-[3.5rem] md:pb-[5.6rem] pt-[7rem] md:pt-[10rem] rounded-b-[8px]">
        <MenuLinkCard />
        <MenuLinkSpeakers />
        <MenuLinkEarphones />
      </div>
    </motion.div>
  );
};

export default MenuBar;
