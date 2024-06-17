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



interface IProduct {
  id:number,
  name:string,
  description:string,
  
}
export default async function ListProduct() {
  const products = await list()
    async function list(){
    revalidatePath("/admin/products")
    const response = await fetch("https://server20241-liart.vercel.app/products");
      return response.json();

  }

  async function deleteProduct(formData: FormData){
    "use server"
    const id =formData.get("id") as string;
    const response = await fetch ("https://server20241-liart.vercel.app/products/" +id, {method: 'DELETE'})
    revalidatePath("/admin/products")
  }

  return (
    <Table>
      <TableCaption>Lista de Produtos</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">ID</TableHead>
          <TableHead>Nome</TableHead>
          <TableHead>Descrição</TableHead>
          <TableHead>Ação</TableHead>         
        </TableRow>
      </TableHeader>
      <TableBody>
        {products.map((item:IProduct) => (
          <TableRow key={item.id}>
            <TableCell className="font-medium">{item.id}</TableCell>
            <TableCell>{item.name}</TableCell> 
            <TableCell>{item.description}</TableCell> 
            <TableCell> 
              <form>
              <input type="text" name="id"hidden value={item.id} />
              <Button formAction={deleteProduct} variant="destructive">X</Button>
              </form>
              
              
            </TableCell>           
          </TableRow>
        ))}
      </TableBody>

    </Table>
  )
}
