import { Button } from "@/components/ui/button";
import ListCar from "./List";

export default function Car(){

    return(
        
        <div className="w-full flex flex-col mt-6">
            <div className="flex justify-center mb-6">
            <a href="/admin/cars/new">
                <Button>Cadastrar Carros</Button>
            </a>
            
            </div>
            
            <ListCar/>
        </div>
        
        
    )
}