import IconsButton from '@components/Button/IconsButton'
import { BoyImage, BurgerIcon } from '@assets'

const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full h-[70px] flex items-center justify-center z-[99999]">
      <div className="container flex flex-wrap items-center justify-between w-full h-full px-8 backdrop-blur-md bg-dim-white bg-opacity-20">
        <IconsButton src={BoyImage.src} />
        <div className="h-[45px] w-[119px] rounded-full bg-white shadow-lg flex items-center justify-center">
          <h2 className="text-lg font-bold primary-gradient">Mrtripop</h2>
        </div>
        <IconsButton src={BurgerIcon.src} />
      </div>
    </nav>
  )
}

export default Navbar
