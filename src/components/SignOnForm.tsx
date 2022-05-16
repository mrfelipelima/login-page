import { Fragment, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react'
import { createUserWithEmailAndPassword, onAuthStateChanged } from 'firebase/auth'
import { auth } from "../services/firebaseConfig";
import logIn from '../assets/log-in.svg';
import { Lock, EnvelopeSimple, User } from "phosphor-react";
import { Loading } from './Loading';

interface SingOnFormProps {
    formRestartRequested: () => void;
}

export default function SignOnForm({formRestartRequested}: SingOnFormProps) {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [isWaiting, setIsWaiting] = useState(false);
    const [isOpen, setIsOpen] = useState(false);

    const signOn = async () => {
        try {
            setIsWaiting(true);
            const getUser = await createUserWithEmailAndPassword(auth, email, password);
            console.log(getUser);
            setIsWaiting(false);
            setIsOpen(true);
            return getUser;
        } catch(error) {
            setIsWaiting(false);
            return error;
        }
    }

    function closeModal() {
        setIsOpen(false);
        formRestartRequested();
    }

    return(
        <>
            <div className="mb-[27px] flex flex-col gap-1">
                <span className="text-2xl text-textTitle font-titles font-semibold flex flex-1 gap-3">
                    <img src={logIn} alt="" />
                    Cadastre-se
                </span>
                <span className="font-body font-medium text-base text-textBase flex">
                    Insira as informações para se cadastrar.
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
                            onChange={(event) => setEmail(event.target.value)}
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
                            onChange={(event) => {setPassword(event.target.value)}}
                            placeholder="Digite sua senha" />
                    </label>
                </div>
                <div className="flex gap-2">
                    <button className="h-[51px] w-1/4 bg-textBase rounded text-[#473404] font-titles font-semibold" onClick={formRestartRequested}>Cancelar</button>
                    <button className="h-[51px] w-3/4 bg-primaryColor rounded text-[#473404] font-titles font-semibold flex items-center justify-center flex-1" type="submit" onClick={signOn}>{isWaiting ? <Loading /> : "Cadastrar"}</button>
                </div>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900"
                  >
                    Feito!
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      Você se cadastrou com sucesso!
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Fechar!
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>

        </>
    )
}