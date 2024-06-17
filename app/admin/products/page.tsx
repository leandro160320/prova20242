import { Button } from "@/components/ui/button";
import ListProduct from "./List";

export default function Product(){

    return(
        
        <div className="w-full flex flex-col mt-6">
            <div className="flex justify-center mb-6">
            <a href="/admin/products/new">
                <Button>Cadastrar Produtos</Button>
            </a>
            
            </div>
            
            <ListProduct/>
        </div>
        
        
    )
}