import { useState } from "react";
import sideImage from "../../assets/side-image.jpg";
import logo from "../../assets/logo.svg";
import LoginForm from "../../components/LoginForm";
import SignOnForm from "../../components/SignOnForm";

export default function LoginPage() {

    const [isRegister, setIsRegister] = useState(false);

    function handleRegister() {
        setIsRegister(true);
    }

    function handleRestartForm() {
        setIsRegister(false);
    }

    return(
        <div className="flex justify-center h-screen font-body">
            <div className="lg:w-1/2 w-screen flex lg:relative">
                <img className="m-8 lg:absolute lg:flex hidden" src={logo} alt="Logo da camp.in com dois triângulos justapostos e o texto camp.in" />
                <div className="h-screen px-8 bg-formBackground rounded w-full md:min-w-[505px] lg:m-auto lg:w-2/3 lg:h-2/3 lg:px-28 lg:flex lg:items-center lg:justify-center">
                    <img className="my-8 lg:hidden" src={logo} alt="Logo da camp.in com dois triângulos justapostos e o texto camp.in" />
                    <div className="w-full">
                        {isRegister ? <SignOnForm formRestartRequested={handleRestartForm} /> : <LoginForm />}
                        {isRegister ? null : (
                            <div className="mt-[14px] text-center">
                                <span>Não tem uma conta? <a className="text-primaryColor cursor-pointer" onClick={handleRegister}>Registre-se</a></span>
                            </div>
                        )}
                    </div>                    
                </div>
            </div>

            <div className="lg:w-1/2 lg:flex hidden">
                <img className="max-h-screen w-full object-cover" src={sideImage} alt="" />
            </div>            
        </div>
    )
}


// flex flex-col h-screen justify-center