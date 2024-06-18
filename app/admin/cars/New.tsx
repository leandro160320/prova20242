import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

export  default function NewCar() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button >Cadastrar Carros</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Cadastrar Carros</DialogTitle>
          <DialogDescription>
            Inclua os dados do Carro e click em salvar
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Modelo
            </Label>
            <Input
              id="Model"
              defaultValue="Fusca"
              className="col-span-3"
            />
          </div>

          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Descrição
            </Label>
            <Input
              id="description"
              defaultValue="O melhor carro"
              className="col-span-3"
            />
          </div>
          
          
        </div>
        <DialogFooter>
          <Button type="submit">Salvar</Button>
          <DialogClose asChild>
            <Button type="button" variant="secondary">
              Close
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
