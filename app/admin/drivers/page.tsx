import { Button } from "@/components/ui/button";
import ListDriver from "./List";

export default function Driver(){

    return(
        
        <div className="w-full flex flex-col mt-6">
            <div className="flex justify-center mb-6">
            <a href="/admin/drivers/new">
                <Button>Cadastrar Motorista</Button>
            </a>
            
            </div>
            
            <ListDriver/>
        </div>
        
        
    )
}