import './navbar.scss'
import Logo from '../../asests/img/logo.svg'

export const Navbar = () =>{
    return (
        <div className='mb-5'>

            <a className='navbar__link flex-grow-1  ' href='#'>
                <div className='d-flex align-items-center justlify-content-between'>
                 <img className='me-2' src={Logo} alt='logo' width={32} height={32}/>

                 <p className='navbar__text m-0 p-0'>  Dashboard Kit</p>
                </div>
            </a>
        </div>
    )
}

export const NavbarItem = ({logo, text}) =>{
    return (
        <li className='navbar__item'>
            <a className='navbar__link' href='#'>
                <div className='d-flex align-items-center justlify-content-between'>
                    <img className='me-3' src={logo} alt="" width={16} height={16}/>

                    <p className='navbar__text m-0 p-0'>{text}</p>
                </div>


            </a>
        </li>
    )
}
