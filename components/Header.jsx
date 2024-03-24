import Logo from '@components/Logo.jsx'

const Navbar = () => {
 return(
    <header className='sticky top-0 z-50 bg-white dark:bg-gray-800'>
        <nav className='flex flex-col sm:flex-row items-center p-5 pl-2 bg-white dark:bg-gray-800 max-w-7xl mx-auto'>
            <Logo />
        </nav>
    </header>
 )
}

export default Navbar;