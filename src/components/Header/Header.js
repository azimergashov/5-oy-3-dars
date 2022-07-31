import './header.scss'
import Search from '../../asests/img/search.svg'
import New from '../../asests/img/new.svg'
import Jones from '../../asests/img/Jones.png'

export const Header = () =>{
    return (
        <header className='header'>
            <div className='d-flex align-content-center justify-content-between'>
                <h2> Overview</h2>

                <div className='d-flex align-items-center '>
                    <div className='header-left'>
                        <img className='me-3' src= {Search} alt = "search" width={16} height={16}/>
                        <img className='me-3' src= {New} alt = "new" width={16} height={16}/>
                    </div>

                    <div className='d-flex align-items-center'>
                        <p className='m-0 p-0'> Jones Ferdinand</p>

                        <img src= {Jones} alt="Jones" width={44} height={44}/>
                    </div>
                    </div>
            </div>
        </header>
    )
}