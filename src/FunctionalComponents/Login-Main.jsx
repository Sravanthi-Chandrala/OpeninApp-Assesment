
import Board from '../FunctionalComponents/Login_Form_side1';
import  LOGIN_FORM  from '../FunctionalComponents/Login_Form_Side2';
function LoginPage(){
    return(
        <div className='login-main-div'>
            
            <LOGIN_FORM />
            <Board />
        </div>
    )
}
export default LoginPage;