import speakers from '../assets/shared/desktop/image-category-thumbnail-speakers.png'
import { NavLink } from 'react-router-dom'
import StyledButton from '../Components/StyledButton'
const MenuLinkCard = () => {
  return (
    <div  className={'bg-lightGray w-[22.3rem] h-[16.5rem] text-center relative rounded-[8px]'}>
        <NavLink to={'/'}>
            <img src={speakers} aria-hidden className='w-[10.4rem] h-[10.4rem] absolute top-[-55%] translate-y-[50%] left-[50%] translate-x-[-50%]'/>
            <div className='flex flex-col items-center '>
                <h3 className='text-[1.5rem] tracking-[1.07px] font-bold'>speakers</h3>
                <StyledButton/>
            </div>
        </NavLink>
    </div>
  )
}

export default MenuLinkCard