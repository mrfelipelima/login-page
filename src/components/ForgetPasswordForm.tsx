import { Lock } from 'phosphor-react';
import logIn from '../assets/log-in.svg';

interface ForgetPasswordFormProps {
    formRestartRequested: () => void;
}

export default function ForgetPasswordForm({formRestartRequested}: ForgetPasswordFormProps) {
    return(
        <>
            <div className="mb-[27px] flex flex-col gap-1">
                <span className="text-2xl text-textTitle font-titles font-semibold flex flex-1 gap-3">
                    <img src={logIn} alt="" />
                    Recuperar senha
                </span>
            </div>
            <div className="flex flex-col gap-[16px]">
                <div id="email-group">
                    <span className="font-titles text-base font-medium">E-mail</span>
                    <label className="relative block" htmlFor="email">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                            <Lock />
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
                            placeholder="Digite seu e-mail" />
                    </label>
                </div>
                <div className="flex gap-2">
                    <button className="h-[51px] w-1/4 bg-textBase rounded text-[#473404] font-titles font-semibold" onClick={formRestartRequested}>Cancelar</button>
                    <button className="h-[51px] w-3/4 bg-primaryColor rounded text-[#473404] font-titles font-semibold" type="submit">Recuperar</button>
                </div>
            </div>
        </>
    )
}