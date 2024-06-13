
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { BookAIcon, Briefcase, CaptionsIcon, Folder, Home, PersonStanding, User, User2Icon } from "lucide-react";


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

                <a href="/admin/student">
                    <Button variant="ghost">
                        <User2Icon className="mr-2" />
                        Estudante
                    </Button>
                </a>

                <a href="/admin/courses">
                    <Button variant="ghost">
                        <Folder className="mr-2" />
                        Curso
                    </Button>
                </a>

                <a href="/admin/subjects">
                    <Button variant="ghost">
                        <CaptionsIcon className="mr-2" />
                        Materia
                    </Button>
                </a>

                <a href="/admin/teachers">
                    <Button variant="ghost">
                        <Briefcase className="mr-2" />
                        Professor
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