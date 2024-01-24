import RegisterForm from "components/RegisterForm/RegisterForm";
import icons from '../../assets/sprite.svg';

const Register=()=>{
    return (<>
   <svg width="40px" height="40px"> <use href={icons + '#icon-Craftwork'}/></svg>
    <RegisterForm/>
    </>)
}

export default Register;