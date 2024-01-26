import '../Assets/styles/Login_Form_side1.css';
import React from 'react';
import Logo from '../Assets/Images/Ellipse.png';
import Line from '../Assets/Images/Vector.png';


class Board extends React.Component{
    render(){
        return(
            <div className='login-form-sub1'>
                <div className='login-form-sub1-div'>
                    <img src={Logo} alt='Logo' id='logo'/>
                    <img src={Line} alt='Logo' id='line'/>
                    <p className='board'>BASE</p>
                    <div className='icons'>
                    <i class="fa-brands fa-github"></i>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-linkedin"></i>  
                    <i class="fa-brands fa-discord"></i>   
                    </div>
                </div>
            </div>
        )
    }
}
export default Board;