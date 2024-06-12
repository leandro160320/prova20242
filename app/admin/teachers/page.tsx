import { Button } from "@/components/ui/button";
import ListStudent from "./List";
import ListTeacher from "./List";

export default function Teachers(){

    return(
        
        <div className="w-full flex flex-col mt-6">
            <div className="flex justify-center mb-6">
            <a href="/admin/student/new">
                <Button>Cadastrar Professor</Button>
            </a>
            
            </div>
            
            <ListTeacher/>
        </div>
        
        
    )
}