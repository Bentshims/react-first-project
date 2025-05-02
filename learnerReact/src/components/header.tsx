import logo from '../assets/logo.png';
function Header(){
    return (
        <header className="flex justify-between m-3 items-center border border-2 border-red-500">
            <img src={logo} alt="logo" className='h-5 w-auto'/>
            <div className="flex gap-4">
                <div>Home</div>
                <div>About</div>
                <div>Contact</div>
            </div>
        </header>
    )
}

export default Header;