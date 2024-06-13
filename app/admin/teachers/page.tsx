import { Button } from "@/components/ui/button";
import ListTeacher from "./List";

export default function Teacher(){

    return(
        
        <div className="w-full flex flex-col mt-6">
            <div className="flex justify-center mb-6">
            <a href="/admin/teacher/new">
                <Button>Cadastrar Professor</Button>
            </a>
            
            </div>
            
            <ListTeacher/>
        </div>
        
        
    )
}