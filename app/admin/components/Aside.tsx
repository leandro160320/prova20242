
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookAIcon, Briefcase, CaptionsIcon, CarFront, Folder, Home, Package, PersonStanding, Square, User, User2Icon } from "lucide-react";


export default function Aside({ className }: any) {
    return (
        <div className={cn(" hidden md:block size-1/6", className)}>
            <div className="flex flex-col ">
                <h2 className="font-bold">Dasboard</h2>

                <a href="/admin">
                    <Button variant="ghost">
                        <Home className="mr-2" />
                        Home
                    </Button>
                </a>


                <a href="/admin/cars">
                    <Button variant="ghost">
                        <CarFront className="mr-2" />
                        Carros
                    </Button>
                </a>

                <a href="/admin/drivers">
                    <Button variant="ghost">
                        <User2Icon className="mr-2" />
                        Motoristas
                    </Button>
                </a>

                <h2 className="font-bold">Configurações</h2>

                <a href="/admin">
                    <Button variant="ghost">
                        <BookAIcon className="mr-2" />
                        Conta
                    </Button>
                </a>

            </div>
        </div>
    )
}