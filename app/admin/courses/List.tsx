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



interface ICourses {
  id:number,
  name:string,
  
}
export default async function ListCourses() {
  const courses = await list()
    async function list(){
    revalidatePath("/admin/courses")
    const response = await fetch("https://server20241-liart.vercel.app/courses");
      return response.json();

  }

  async function deleteCourse(formData: FormData){
    "use server"
    const id =formData.get("id") as string;
    const response = await fetch ("https://server20241-liart.vercel.app/courses/" +id, {method: 'DELETE'})
    revalidatePath("/admin/courses")
  }

  return (
    <Table>
      <TableCaption>Lista de cursos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Ação</TableHead>         
        </TableRow>
      </TableHeader>
      <TableBody>
        {courses.map((item:ICourses) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.name}</TableCell> 
            <TableCell> 
              <form>
              <input type="text" name="id"hidden value={item.id} />
              <Button formAction={deleteCourse} variant="destructive">X</Button>
              </form>
              
              
            </TableCell>           
          </TableRow>
        ))}
      </TableBody>

    </Table>
  )
}
