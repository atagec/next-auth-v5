// Use client because it is going to include interactive elements
"use client"

interface LoginButtonProps {
  children: React.ReactNode;
  mode?: "modal" | "redirect",
  asChild?: boolean;
}

import { useRouter } from "next/navigation"


export const LoginButton = ({
  children, 
  mode = "redirect",
  asChild
}: LoginButtonProps) => {
  const router = useRouter()


  const onClick = () => {
    router.push("/auth/login")
  }

  if (mode === "modal") {
    return (
      <span>
        TODO: Implement modal
      </span>
    )
  }

  return (
    <span
    className="cursor-pointer" onClick={onClick}>
      {children}
    </span>
  )
}