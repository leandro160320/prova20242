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
import { Form } from "react-hook-form";



interface IStudent {
  id:number,
  name:string,
  email:string
}
export default async function ListStudent() {
  const student = await list()
  async function list(){
    revalidatePath("/admin/student")
    const response = await fetch("https://server20241-liart.vercel.app/students");
      return response.json();

  }

  async function deleteStudent(formData: FormData){
    "use server"
    const id =formData.get("id") as string;
    const response = await fetch ("https://server20241-liart.vercel.app/students/" +id, {method: 'DELETE'})
    revalidatePath("/admin/students")
  }

  return (
    <Table>
      <TableCaption>Lista de Estudantes</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Ação</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {student.map((item:IStudent) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.name}</TableCell>
            <TableCell>{item.email}</TableCell>
            <TableCell> 
              <form>
              <input type="text" name="id"hidden value={item.id} />
              <Button formAction={deleteStudent} variant="destructive">X</Button>
              </form>
              
              
            </TableCell>
            

          </TableRow>
        ))}
      </TableBody>

    </Table>
  )
}
