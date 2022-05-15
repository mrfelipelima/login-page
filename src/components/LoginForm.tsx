export default function LoginForm() {
    return(
        <>
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
                <div id="password-group">
                <span className="font-titles text-base font-medium">Senha</span>
                    <label className="relative block" htmlFor="password">
                        <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M15.8333 9.16666H4.16667C3.24619 9.16666 2.5 9.91285 2.5 10.8333V16.6667C2.5 17.5871 3.24619 18.3333 4.16667 18.3333H15.8333C16.7538 18.3333 17.5 17.5871 17.5 16.6667V10.8333C17.5 9.91285 16.7538 9.16666 15.8333 9.16666Z" stroke="#AFB6C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M5.83337 9.16666V5.83332C5.83337 4.72825 6.27236 3.66845 7.05376 2.88704C7.83516 2.10564 8.89497 1.66666 10 1.66666C11.1051 1.66666 12.1649 2.10564 12.9463 2.88704C13.7277 3.66845 14.1667 4.72825 14.1667 5.83332V9.16666" stroke="#AFB6C2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
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
                            placeholder="Digite sua senha" />
                    </label>
                </div>
                <div className="flex justify-between">
                    <div>
                        <input className="w-[20px] h-[20px] bg-transparent rounded text-primaryColor focus:ring-primaryColor focus:ring-1 border-[#868686]" type="checkbox" name="remember" id="remember" />
                        <label className="ml-[5px] text-base" htmlFor="remember">Lembre-me</label>
                    </div>
                    <div>
                        <a className="text-primaryColor text-titles text-sm font-semibold" href="#">Esqueci minha senha</a>
                    </div>
                </div>
                <button className="h-[51px] bg-primaryColor rounded text-[#473404] font-titles font-semibold" type="submit">Entrar</button>
            </div>
        </>
    )
}