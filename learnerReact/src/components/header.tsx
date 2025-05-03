import logo from '../assets/logo.png';
function Header(){
    return (
        <header className="flex justify-between mx-3 md:mx-5 my-0 items-center">
            <img src={logo} alt="logo" className='h-auto w-[35%] md:w-[20%]'/>
           <div className='flex'>
                <div>
                    <i className='bi bi-list md:hidden text-4xl text-yellow-200'></i>
                </div>

                <div className="md:flex gap-4 hidden">
                    <div className='text-yellow-200'>Home</div>
                    <div className='text-yellow-200'>About</div>
                    <div className='text-yellow-200'>Contact</div>
                </div>
           </div>
        </header>
    )
}

export default Header;