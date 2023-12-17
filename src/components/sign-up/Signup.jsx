import InputField from "../helpers/InputField";
import Button from "../helpers/Button";
import HRLineDivider from "../helpers/HRLineDivider";
import OtherIcons from "../helpers/OtherIcons";
import { ChangeLoginSignup } from "../helpers/ChangeLoginSignup";
import signup_img from '../../static_data/images/sign_up.png';
import '../../styles/Signup.css';

const Signup = () => {
  return (
    <div className='sign-container sign-container-md'>
      <div className="md:flex md:flex-col md:justify-center md:h-full md:w-[60%]">
        <p className="hidden md:block md:text-2xl md:mt-8 md:mb-4">Let's create your account</p>
        <div className="flex mt-4 gap-2 justify-between">
          <InputField name="userfname" type="text" placeholder="First Name" icon="fa-solid fa-user" />
          <InputField name="userlname" type="text" placeholder="Last Name" icon="" />
        </div>
        <InputField name="email" type="email" placeholder="Email address" icon="fa-solid fa-envelope" />
        <InputField name="password" type="password" placeholder="Set Password" icon="fa-solid fa-lock" />
        <div className="md:flex  md:gap-2 md:justify-between">
          <InputField name="dob" type="date" placeholder="DoB" icon="fa-solid fa-calendar-days" />
          <InputField name="contact" type="number" placeholder="Contact Number" icon="fa-solid fa-phone" />
        </div>
        <Button value="Sign up" />
        <HRLineDivider />
        <OtherIcons pageName={"signup"} />
        <ChangeLoginSignup pageName={"signup"} />
      </div>
      <div className="img-container mx-auto md:me-auto md:mx-2">
        <img className="" src={signup_img} alt="ice-cream-logo" />
      </div>
    </div>
  );
};

export { Signup };