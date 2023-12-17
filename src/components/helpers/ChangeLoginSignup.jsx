import { useContext } from "react";
import { AuthUser_Context } from "../../contexts/AuthUser-context";

const ChangeLoginSignup = ({ pageName }) => {
  const { isValidUser, setIsValidUser } = useContext(AuthUser_Context);

  const switchPage = () => {
    setIsValidUser(prev => !prev);
  }

  return (
    <div className="my-6 sm:mb-6">
      <p className="text-sm text-slate-500">
        {pageName === "login" ? "Don't have an account? - " : "already have an account? - "}
        {pageName === "login" ? <a className="cursor-pointer hover:underline" onClick={switchPage}>Signup Here</a>
          : <a className="cursor-pointer hover:underline" onClick={switchPage}>Login Here</a>}
      </p>
    </div>
  )
};

export { ChangeLoginSignup };