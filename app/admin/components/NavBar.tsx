import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ModeToggle } from "./ModeToggle";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Cable, DoorClosed, User } from "lucide-react";
import { MenuNav } from "./MenuNav";
import { MenuSheet } from "./MenuSheet";

export default function NavBar() {
    return (
        <div className="flex justify-between p-6 border-b-2">
            <img src="/img/logo_utfpr-removebg-preview.png" className="size-[7%] lg:size-[10%] "/>
            <MenuSheet/>
            <MenuNav/>
            

            <div className="flex space-x-4">
                <ModeToggle />

                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Avatar>
                            <AvatarImage src="https://avatars.githubusercontent.com/u/136009476?v=4" alt="@shadcn" />
                            <AvatarFallback>CN</AvatarFallback>
                        </Avatar>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="center">
                        <DropdownMenuItem >
                            <User/><label>Usuario</label>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <DoorClosed/><label>Sair</label>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Cable/><label>Conexoes</label>
                        </DropdownMenuItem>
                    </DropdownMenuContent>
                </DropdownMenu>




                
            </div>
        </div>
    )
}