import './app.scss'
import {Navbar, NavbarItem} from './components'
import {Header} from './components'
import {Trends, TrendItem} from './components'
import {Hero} from './components'
import {Tasks, TasksItem} from './components'
import {Tickets, TicketsItem} from './components'
import Overview from './asests/img/Overview.svg'
import Ticket from './asests/img/Tickets.svg'
import Ideas from './asests/img/Ideas.svg'
import Contacts from './asests/img/Contacts.svg'
import Agents from './asests/img/Agents.svg'
import Articles from './asests/img/Articles.svg'
import Settings from './asests/img/Settings.svg'
import Subscription from './asests/img/Subscription.svg'




function App() {
  return (
    <div className="App ">
      <div className='container app-container'>

        <div className='left'>
          <Navbar />

          <ul className='list-unstyled m-0 p-0 '>
              <NavbarItem logo={Overview}  text= "Overview"/>
              <NavbarItem logo={Ticket}  text= "Tickets"/>
              <NavbarItem logo={Ideas}  text= "Ideas"/>
              <NavbarItem logo={Contacts}  text= "Contacts"/>
              <NavbarItem logo={Agents}  text= "Agents"/>
              <NavbarItem logo={Articles}  text= "Articles"/>
              <NavbarItem logo={Settings}  text= "Settings"/>
              <NavbarItem logo={Subscription}  text= "Subscription"/>
          </ul>
        </div>

        <div className='right'>
          <Header />

          <ul className='d-flex align-align-items-center justify-content-between list-unstyled'>
           <Hero text = "Unresolved" number = {60}/>
           <Hero text = "Overdue" number = {16}/>
           <Hero text = "Open" number = {43}/>
           <Hero text = "On hold" number = {64}/>
          </ul>

          <section className='tasks-section'>
            <div className='d-flex align-content-center justify-content-center'>
              <Tasks />

              <ul className='list-unstyled m-0 p-0'>
                <TasksItem text = "Resolved" number ={449}/>
                <TasksItem text = "Received" number ={426}/>
                <TasksItem text = "Average first response time" number ="33m"/>
                <TasksItem text = "Average response time" number ="3h 8m"/>
                <TasksItem text = "Average response time" number ="94%"/>

              </ul>

            </div>
          </section>

          <section>
            <div className='d-flex  justify-content-between'>
              <div className='ticket-div'>
                <Tickets />

                <ul className='ticket-list list-unstyled m-0 p-0'>
                  <TicketsItem  text = "Waiting on Feature Request" number={4238}/>
                  <TicketsItem  text = "Awaiting Customer Response" number={1005}/>
                  <TicketsItem  text = "Awaiting Developer Fix" number={914}/>
                  <TicketsItem  text = "Pending" number={281}/>
                </ul>
              </div>
              <div  className='trends__div'>
                <Trends />

                <ul className='list-unstyled m-0 p-0 mt-4' >
                  <TrendItem text= "Finish ticket update"/>
                  <TrendItem text= "Create new ticket example"/>
                  <TrendItem text= "Update ticket report"/>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </div>


    </div>
  );
}

export default App;
