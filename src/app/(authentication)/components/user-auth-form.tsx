"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { Icons } from "@/components/ui/icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Toaster } from "@/components/ui/toaster";
import { useToast } from "@/components/ui/use-toast";
import { ToastAction } from "@/components/ui/toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export function UserAuthForm({ className, ...props }: UserAuthFormProps) {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { toast } = useToast();
  const emailRef = React.useRef<HTMLInputElement>(null);
  const passwordRef = React.useRef<HTMLInputElement>(null);

  async function handleLoginEmailClick(event: React.SyntheticEvent) {
    event.preventDefault();
    setIsLoading(true);

    const email = emailRef.current?.value || "";
    const password = passwordRef.current?.value || "";

    if (email === "" && password === "") {
      toast({
        variant: "destructive",
        title: "Ops! algo deu errado.",
        description: "E-mail ou senha incorretos",
        action: (
          <ToastAction altText="Tente novamente">Tente novamente</ToastAction>
        ),
      });
      setTimeout(() => {
        setIsLoading(false);
      }, 3000);
      return;
    }

    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }

  return (
    <div className={cn("grid gap-6", className)} {...props}>
      <form onSubmit={handleLoginEmailClick}>
        <div className="grid gap-2">
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="email">
              E-mail
            </Label>
            <Input
              className="bg-muted focus-visible:ring-accent"
              id="email"
              placeholder="nome@exemplo.com"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              ref={emailRef}
            />
          </div>
          <div className="grid gap-1">
            <Label className="sr-only" htmlFor="senha">
              Senha
            </Label>
            <Input
              className="bg-muted focus-visible:ring-accent"
              id="password"
              placeholder="Digite sua senha"
              type="password"
              autoCapitalize="none"
              autoCorrect="off"
              disabled={isLoading}
              ref={passwordRef}
            />
          </div>
          <Button disabled={isLoading} className="hover:bg-secondary">
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Entrar
          </Button>
        </div>
      </form>
      <Toaster />
    </div>
  );
}
