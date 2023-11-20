import Image from "next/image";
import Link from "next/link";
import { UserAuthForm } from "./components/user-auth-form";

export default function Home() {
  return (
    <>
      <div className="container relative h-[100vh] flex-col items-center justify-center md:grid lg:max-w-none lg:grid-cols-2 lg:px-0">
        <div className="relative hidden h-full flex-col dark:border-r lg:flex">
          <Image
            src="/banner-authentication.jpg"
            alt="banner authentication"
            width={0}
            height={0}
            sizes="100vw"
            className="h-full w-full"
          />
        </div>
        <div className="lg:p-8">
          <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
            <div className="flex flex-col space-y-3 text-center">
              <Image
                src="/logo.png"
                alt="logo"
                width={0}
                height={0}
                sizes="100vw"
                className="m-auto block h-[60px] w-[150px]"
              />

              <h1 className="text-2xl font-semibold tracking-tight text-primary">
                Criar uma conta
              </h1>
              <p className="text-sm text-muted-foreground">
                Digite seu e-mail abaixo para criar sua conta
              </p>
            </div>
            <UserAuthForm />
            <p className="px-8 text-center text-sm text-muted-foreground">
              Ao clicar em continuar, você concorda com nossos{" "}
              <Link
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Termos de Serviço
              </Link>{" "}
              e{" "}
              <Link
                href="#"
                className="underline underline-offset-4 hover:text-primary"
              >
                Política de Privacidade.
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
