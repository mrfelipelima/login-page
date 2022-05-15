import sideImage from '../assets/side-image.jpg';
import FormHeader from './FormHeader';
import LoginForm from './LoginForm';

export default function LoginPage() {
    return(
        <div className="flex justify-center h-screen font-body">
            <div className="min-w-[505px] w-1/2 flex">
                <div className="m-auto min-w-[505px] lg:w-2/3 px-[90px] py-[60px] bg-formBackground rounded">
                    <div className="mb-[27px]">
                        <FormHeader />
                    </div>
                    <div>
                        <LoginForm />
                    </div>
                    <div className="mt-[14px] text-center">
                        <span>Não tem uma conta? <a className="text-primaryColor" href="#">Registre-se</a></span>
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