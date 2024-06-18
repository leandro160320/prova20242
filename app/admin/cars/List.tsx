import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { revalidatePath } from "next/cache";
import Car from "./page";



interface ICar {
  id:number,
  model:string,
  description:string,
  
}
export default async function ListCar() {
  const cars = await list()
    async function list(){
    revalidatePath("/admin/cars")
    const response = await fetch("https://server20241-liart.vercel.app/cars");
      return response.json();

  }

  async function deleteCar(formData: FormData){
    "use server"
    const id =formData.get("id") as string;
    const response = await fetch ("https://server20241-liart.vercel.app/cars/" +id, {method: 'DELETE'})
    revalidatePath("/admin/cars")
  }

  return (
    <Table>
      <TableCaption>Lista de Carros</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Modelo</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Ação</TableHead>         
        </TableRow>
      </TableHeader>
      <TableBody>
        {cars.map((item:ICar) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.model}</TableCell> 
            <TableCell>{item.description}</TableCell> 
            <TableCell> 
              <form>
              <input type="text" name="id"hidden value={item.id} />
              <Button formAction={deleteCar} variant="destructive">X</Button>
              </form>
              
              
            </TableCell>           
          </TableRow>
        ))}
      </TableBody>

    </Table>
  )
}
