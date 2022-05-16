import { useState } from 'react';
import sideImage from '../../assets/side-image.jpg';
import LoginForm from '../../components/LoginForm';
import SignOnForm from '../../components/SignOnForm';

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
            <div className="min-w-[505px] w-1/2 flex">
                <div className="m-auto min-w-[505px] lg:w-2/3 px-[90px] py-[60px] bg-formBackground rounded">
                    {isRegister ? <SignOnForm formRestartRequested={handleRestartForm} /> : <LoginForm />}
                    {isRegister ? null : (
                        <div className="mt-[14px] text-center">
                            <span>Não tem uma conta? <a className="text-primaryColor" onClick={handleRegister} href="#">Registre-se</a></span>
                        </div>
                    )}
                    
                </div>
            </div>

            <div className="lg:w-1/2 lg:flex hidden">
                <img className="max-h-screen w-full object-cover" src={sideImage} alt="" />
            </div>            
        </div>
    )
}


// flex flex-col h-screen justify-center