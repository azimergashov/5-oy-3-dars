import './tasks.scss'

export const Tasks = () =>{
    return (
        <div className='w-100 tasks'>
            <h3 className='tasks__title'>Today’s trends</h3>

            <div className='d-flex align-items-center justify-content-between w-100'>
                <p className='tasks__text m-o p-0'>as of 25 May 2019, 09:41 PM</p>
                <div className='d-flex align-items-center justify-content-center'>
                  <span className='tasks__span-blue'></span>
                  <p className='tasks__text m-o p-0'>Today</p>
                  <span className='tasks__span'></span>
                  <p className='tasks__text m-o p-0'>Yesterday</p>
                </div>
            </div>
        </div>
    )

}

export const TasksItem = ({text, number}) =>{
    return(
        <li className='tasks__item'>
            <p className='tasks__text-right'>{text}</p>
            <p className='tasks__number'>{number}</p>

        </li>
    )
}