
import { Button } from "@/components/ui/button";
import { MenuSheet } from "./components/MenuSheet";


export default function Adimin(){
    return(
        <div>
            <h1 className="text-center">Bem vindo à Área administrativa</h1>
            <Button>Salvar</Button>
            <Button variant={"destructive"}>Excluir</Button>
            <Button variant={"secondary"}>Novo</Button>
            
            <MenuSheet/>

        </div>
        

    )

}