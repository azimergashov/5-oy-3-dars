import './tickets.scss'

export const Tickets = () =>{
    return (
        <div className='tickets-wrapper'>
            <div className='ticket__heading-div'>
                <h3 className='ticket__title m-0 p-0'>Unresolved tickets</h3>

                <a className='text-decoration-none' href='#'>View details</a>
            </div>

            <p className='tickets__group'><span className='tickets__group-span'>Group:</span> Support</p>
        </div>
    )
}

export const TicketsItem = ({text, number}) =>{
    return(
        <li className='ticket__item d-flex align-items-center justify-content-between'>
            <p className='ticket__text'>{text}</p>
            <p className='ticket__number'>{number}</p>
        </li>
    )
}