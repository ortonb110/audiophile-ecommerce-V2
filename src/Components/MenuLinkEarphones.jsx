import earphones from '../assets/MenuBar/earphones.png'
import { NavLink } from 'react-router-dom'
import StyledButton from '../Components/StyledButton'

const MenuLinkEarphones = () => {
  return (
    <div  className={'bg-lightGray w-[22.3rem] h-[16.5rem] text-center relative rounded-[8px]'}>
        <NavLink to={'/earphones'}>
            <img src={earphones} aria-hidden className=' object-cover absolute top-[-63%] translate-y-[50%] left-[50%] translate-x-[-50%]'/>
            <div className='flex flex-col items-center pt-[8.8rem] gap-[1.7rem]'>
                <h3 className='text-[1.5rem] tracking-[1.07px] font-bold leading-[0px]'>earphones</h3>
                <StyledButton/>
            </div>
        </NavLink>
    </div>
  )
}

export default MenuLinkEarphones