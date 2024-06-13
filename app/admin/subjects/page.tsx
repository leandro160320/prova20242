import { Button } from "@/components/ui/button";
import ListSubject from "./List";

export default function Subjects(){

    return(
        
        <div className="w-full flex flex-col mt-6">
            <div className="flex justify-center mb-6">
            <a href="/admin/subjects/new">
                <Button>Cadastrar Materia</Button>
            </a>
            
            </div>
            
            <ListSubject/>
        </div>
        
        
    )
}