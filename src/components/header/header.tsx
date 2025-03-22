// import { Link } from "@tanstack/react-router";

import { useState } from "react";
import { User } from "lucide-react";

import { Button } from "@/components/ui/button";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";

import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Header() {
  // const [user, setUser] = useState({
  //   name: "John Doe",
  //   email: "john@example.com",
  //   imageUrl: "/placeholder.svg?height=32&width=32",
  // });

  const user = {
    name: "John Doe",
    email: "john@example.com",
    imageUrl: "/placeholder.svg?height=32&width=32",
  };

  return (
    <header className="flex h-16 shrink-0 items-center gap-2">
      <div className="flex items-center gap-2 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="mr-2 h-4" />
      </div>
    </header>
  );
}
