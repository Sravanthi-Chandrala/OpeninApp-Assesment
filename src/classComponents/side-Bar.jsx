import '../Assets/styles/side-Bar.css';
import React from 'react';
import subtract from '../Assets/Images/Subtract.png'
// import {AiOutlineSetting} from 'react-icons/ai';
// import {FaDashcube,FaMoneyBillWave,FaCalendarTimes,FaRegUserCircle} from 'react-icons/fa'
import { Link } from 'react-router-dom';

class SideBar extends React.Component{
    render(){
        return(
            <div className='sidebar-div'>
               <img src={subtract} alt='logo' className='side-bar-image'/>
                <span className='side-bar-board'>Base</span>
                <ul className='sidebar-elements'>
                    <li>
                        <span className='sibe-bar-icon' id='dashboard-icon'><i class="fa-solid fa-grip"></i></span>
                        <Link to='/dashboard' className='side-bar-link' id='dashboard'>Dashboard</Link>
                    </li>
                    <li>
                        <span className='sibe-bar-icon'><i class="fa-solid fa-square-poll-vertical"></i></span>
                        <Link to='/uploads' className='side-bar-link'>Upload</Link>
                    </li>
                    <li>
                        <span className='sibe-bar-icon'><i class="fa-solid fa-file-invoice"></i></span>
                        <Link to='/Invioce' className='side-bar-link'>Invoice</Link>
                    </li>
                    <li>
                        <span className='sibe-bar-icon' id='schedule-icon'><i class="fa-solid fa-clipboard-list"></i></span>
                        <Link to='/schedule' className='side-bar-link'> Schedule</Link>
                    </li>
                    <li>
                        <span className='sibe-bar-icon' id='notification-icon'><i class="fa-solid fa-bell"></i></span>
                        <Link to='/notifications' className='side-bar-link' id='notification-box'>Notification</Link>
                    </li>
                    <li>
                        <span className='sibe-bar-icon'><i class="fa-solid fa-gear"></i></span>
                        <Link to='/settings' className='side-bar-link'>Settings</Link>
                    </li>
                </ul>

                <ul className='side-bar-help-div'>
                    <li><Link className='side-bar-help'>Help</Link></li>
                    <li><Link className='side-bar-help'>Contact Us</Link></li>
                </ul>
            </div>
        )
    }
}
export default SideBar;