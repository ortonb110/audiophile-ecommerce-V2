import MenuLinkCard from "./MenuLinkCard";
import MenuLinkSpeakers from "./MenuLinkSpeakers";
import MenuLinkEarphones from "./MenuLinkEarphones";
import { motion } from "framer-motion";

const MenuBar = ({toggleMenu}) => {
    
  return (
    <motion.div
      className="lg:hidden absolute w-full h-[100%] bg-black bg-opacity-[0.5]"
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: [0, 0.3, 1], opacity: 1 }}
      exit={{ y: [1, 0.3, 0 ], opacity: [1, 0.3, 0] }}
      onClick={toggleMenu}
    >
      <div className="flex flex-col gap-[6.2rem] md:gap-0 z-50 md:flex-row w-full items-center justify-between bg-white px-[2.4rem] mb:px-[4rem] pb-[3.5rem] md:pb-[5.6rem] pt-[7rem] md:pt-[10rem] rounded-b-[8px]">
        <MenuLinkCard />
        <MenuLinkSpeakers />
        <MenuLinkEarphones />
      </div>
    </motion.div>
  );
};

export default MenuBar;
