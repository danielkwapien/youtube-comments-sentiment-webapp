import Logo from '@components/Logo.jsx'
import DarkModeToggle from './DarkModeToggle';

const Navbar = () => {
 return(
    <header className='sticky top-0 z-50 bg-white dark:bg-black'>
        <nav className='flex flex-col sm:flex-row items-start p-5 pl-2 bg-white dark:bg-black max-w-7xl mx-auto'>
            <Logo />
        </nav>
    </header>
 )
}

export default Navbar;