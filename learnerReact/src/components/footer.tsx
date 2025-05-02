import logo from '../assets/logo.png';
function Header(){
    return (
        <header className="flex justify-between m-3 items-center">
            <img src={logo} alt="logo" className='h-5 w-auto'/>
            <div className="links flex gap-4">
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
            </div>
        </header>
    )
}

export default Header;