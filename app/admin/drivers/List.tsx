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



interface IDriver {
  id:number,
  name:string,
  
}
export default async function ListDriver() {
  const drivers = await list()
    async function list(){
    revalidatePath("/admin/drivers")
    const response = await fetch("https://server20241-liart.vercel.app/drivers");
      return response.json();

  }

  async function deleteDriver(formData: FormData){
    "use server"
    const id =formData.get("id") as string;
    const response = await fetch ("https://server20241-liart.vercel.app/drivers/" +id, {method: 'DELETE'})
    revalidatePath("/admin/drivers")
  }

  return (
    <Table>
      <TableCaption>Lista de Motoristas</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Ação</TableHead>         
        </TableRow>
      </TableHeader>
      <TableBody>
        {drivers.map((item:IDriver) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.name}</TableCell> 
            <TableCell> 
              <form>
              <input type="text" name="id"hidden value={item.id} />
              <Button formAction={deleteDriver} variant="destructive">x</Button>
              </form>
              
              
            </TableCell>           
          </TableRow>
        ))}
      </TableBody>

    </Table>
  )
}
