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



interface ISubject {
  id:number,
  name:string,
  
}
export default async function ListSubject() {
  const subjects = await list()
    async function list(){
    revalidatePath("/admin/subjects")
    const response = await fetch("https://server20241-liart.vercel.app/subjects");
      return response.json();

  }

  async function deleteSubject(formData: FormData){
    "use server"
    const id =formData.get("id") as string;
    const response = await fetch ("https://server20241-liart.vercel.app/subjects/" +id, {method: 'DELETE'})
    revalidatePath("/admin/subjects")
  }

  return (
    <Table>
      <TableCaption>Lista de Materias</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Ação</TableHead>         
        </TableRow>
      </TableHeader>
      <TableBody>
        {subjects.map((item:ISubject) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.name}</TableCell> 
            <TableCell> 
              <form>
              <input type="text" name="id"hidden value={item.id} />
              <Button formAction={deleteSubject} variant="destructive">x</Button>
              </form>
              
              
            </TableCell>           
          </TableRow>
        ))}
      </TableBody>

    </Table>
  )
}
