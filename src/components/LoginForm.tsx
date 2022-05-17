import { useState } from 'react';
import { Lock, EnvelopeSimple } from "phosphor-react";
import logIn from '../assets/log-in.svg';
import ForgetPasswordForm from './ForgetPasswordForm';

export default function LoginForm() {

    const [isForget, setIsForget] = useState(false);

    function handleForgetPassword() {
        setIsForget(true);
    }

    function handleRestartForm() {
        setIsForget(false)
    }

    if (isForget) {
        return <ForgetPasswordForm formRestartRequested={handleRestartForm} />
    }

    return(
        <>
            <div className="mb-[27px] flex flex-col gap-1">
                <span className="text-2xl text-textTitle font-titles font-semibold flex flex-1 gap-3">
                    <img src={logIn} alt="" />
                    Faça seu login
                </span>
                <span className="font-body font-medium text-base text-textBase flex">
                    Entre com as suas informações de cadastro.
                </span>
            </div>
            <div className="flex flex-col gap-[16px]">
                <div id="email-group">
                    <span className="font-titles text-base font-medium">E-mail</span>
                    <label className="relative block" htmlFor="email">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <EnvelopeSimple />
                        </span>
                        <input
                            type="email"
                            className="h-[44px]
                                block
                                py-2
                                pl-9
                                pr-3
                                w-full
                                rounded
                                bg-transparent
                                border-[#868686]
                                placeholder-[#a9afb9]
                                placeholder:text-sm
                                focus:outline-none
                                focus:ring-1
                                focus:ring-primaryColor
                                focus:border-primaryColor
                                focus:invalid:ring-[#F33D3D]
                                focus:invalid:border-[#F33D3D]"
                            name="email"
                            id="email"
                            required
                            placeholder="Digite seu e-mail" />
                    </label>
                </div>
                <div id="password-group">
                <span className="font-titles text-base font-medium">Senha</span>
                    <label className="relative block" htmlFor="password">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <Lock />
                        </span>
                        <input
                            type="password"
                            className="h-[44px]
                                block
                                py-2
                                pl-9
                                pr-3
                                w-full
                                rounded
                                bg-transparent
                                border-[#868686]
                                placeholder-[#a9afb9]
                                placeholder:text-sm
                                focus:outline-none
                                focus:ring-1
                                focus:ring-primaryColor
                                focus:border-primaryColor
                                focus:invalid:ring-[#F33D3D]
                                focus:invalid:border-[#F33D3D]"
                            name="password"
                            id="password"
                            required
                            placeholder="Digite sua senha" />
                    </label>
                </div>
                <div className="flex justify-between">
                    <div>
                        <input className="w-[20px] h-[20px] bg-transparent rounded text-primaryColor focus:ring-primaryColor focus:ring-1 border-[#868686]" type="checkbox" name="remember" id="remember" />
                        <label className="ml-[5px] text-base" htmlFor="remember">Lembre-me</label>
                    </div>
                    <div>
                        <a className="text-primaryColor text-titles text-sm font-semibold cursor-pointer" onClick={handleForgetPassword}>Esqueci minha senha</a>
                    </div>
                </div>
                <button className="h-[51px] bg-primaryColor rounded text-[#473404] font-titles font-semibold" type="submit">Entrar</button>
            </div>
        </>
    )
}