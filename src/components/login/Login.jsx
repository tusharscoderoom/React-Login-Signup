import InputField from "../helpers/InputField";
import '../../styles/Login.css';
import Button from "../helpers/Button";
import login_img from '../../static_data/images/login-1.jpg';
import HRLineDivider from "../helpers/HRLineDivider";
import OtherIcons from "../helpers/OtherIcons";
import { ChangeLoginSignup } from "../helpers/ChangeLoginSignup";

const Login = ({ changeTo }) => {
  return (
    <div className='login-container login-container-md w-full rounded-lg shadow-lg bg-white 
      flex-col md:flex-row md:justify-center p-2 px-12 border md:max-w-[80%] md:mx-auto'>
      <div className="img-container mx-auto md:me-auto md:w-[80%]">
        <img className="h-full" src={login_img} alt="ice-cream-logo" />
      </div>
      <div className="md:flex md:flex-col md:justify-center md:h-full md:w-[60%]">
        <p className="hidden md:block md:text-2xl md:mt-4 md:mb-10">Welcome, Login</p>
        <InputField name="username" type="text" placeholder="Username" icon="fa-solid fa-user" />
        <InputField name="password" type="password" placeholder="Password" icon="fa-solid fa-lock" />
        <Button value="Log in" />
        <HRLineDivider />
        <OtherIcons pageName={"login"} />
        <ChangeLoginSignup pageName={"login"} />
      </div>
    </div>
  )
}

export default Login;
