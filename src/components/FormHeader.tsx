import logIn from '../assets/log-in.svg';


export default function FormHeader() {
    return(
        <div className="flex flex-col gap-1">
            <span className="text-2xl text-textTitle font-titles font-semibold flex flex-1 gap-3">
                <img src={logIn} alt="" />
                Faça seu login
            </span>
            <span className="font-body font-medium text-base text-textBase flex">
                Entre com as suas informações de cadastro.
            </span>
        </div>
    )
}