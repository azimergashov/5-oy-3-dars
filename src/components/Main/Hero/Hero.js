import './hero.scss'

export const Hero = ({text, number}) =>{
    return(
        <li className='hero__item'>
            <div>
                <p className='hero__text m-0 p-0'>{text}</p>
                <p className='hero__number m-0 p-0'>{number}</p>
            </div>
        </li>
    )
}