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
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M3.33329 3.33331H16.6666C17.5833 3.33331 18.3333 4.08331 18.3333 4.99998V15C18.3333 15.9166 17.5833 16.6666 16.6666 16.6666H3.33329C2.41663 16.6666 1.66663 15.9166 1.66663 15V4.99998C1.66663 4.08331 2.41663 3.33331 3.33329 3.33331Z" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M18.3333 5L9.99996 10.8333L1.66663 5" stroke="#F2F2F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
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