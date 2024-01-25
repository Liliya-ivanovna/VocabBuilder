import RegisterForm from "components/RegisterForm/RegisterForm";
import icons from '../../assets/sprite.svg';

const Register=()=>{
    return (<>
   <div><svg width="40px" height="40px"> <use href={icons + '#icon-Craftwork'}/></svg>
   <h3>VocabBuilder</h3></div>
   <h1>Register</h1>
    <RegisterForm/>
    </>)
}

export default Register;