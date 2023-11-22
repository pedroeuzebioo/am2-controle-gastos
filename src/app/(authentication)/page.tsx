import Image from "next/image";
import { UserAuthForm } from "./components/user-auth-form";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <Image
            width={0}
            height={0}
            sizes="100vw"
            className="mx-auto h-20 w-auto"
            src="/logo.png"
            alt="logo"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-primary">
            Entre com sua conta
          </h2>
          <p className="text-center text-sm text-muted">
            Digite seu e-mail abaixo para poder entrar
          </p>
        </div>

        <div className="mt-10 space-y-6 sm:mx-auto sm:w-full sm:max-w-sm">
          <UserAuthForm />
          <p className="px-8 text-center text-sm text-muted">
            Ao clicar em continuar, você concorda com nossos{" "}
            <Link
              href="/"
              className="underline underline-offset-4 hover:text-primary"
            >
              Termos de Serviço
            </Link>{" "}
            e{" "}
            <Link
              href="/"
              className="underline underline-offset-4 hover:text-primary"
            >
              Política de Privacidade.
            </Link>
            .
          </p>
        </div>
      </div>
    </>
  );
}
