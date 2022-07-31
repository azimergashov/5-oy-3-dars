import './trends.scss'
import Plus from '../../../asests/img/+.png'

export const Trends = () =>{
  return(
    <div className='trends-wrapper'>
        <div className=' d-flex align-items-center justify-content-between mt-3'>
            <h3 className='trend__title mt-3'>
             Tasks
            </h3>

            <a className='text-decoration-none' href='#'>View all</a>
        </div>

        <p className='trend__top-text mb-5'>Today</p>

        <div  className='d-flex align-items-center justify-content-between'>
            <p className='trend__top-text'>Create new task</p>
            <img src={Plus} alt= 'plus' width={24} height={24}/>
        </div>
    </div>
  )
}

export const TrendItem = ({text}) =>{
    return (
        <li className='trend__item d-flex align-items-center justify-content-between '>
            <input className="form-check-input mt-0" type="checkbox"/>
            <p>{text}</p>

            <button className='btn btn-success'>New</button>

        </li>
    )
}