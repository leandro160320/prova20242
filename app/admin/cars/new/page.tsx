"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"


const FormSchema = z.object({
    model: z.string().min(2, {
        message: "Modelo precisa tem no mínimo 2 caracteres."
    }),
    description: z.string().min(2, {
        message: "Descrição precisa tem no mínimo 2 caracteres."
    }),
})

export default function SaveCar() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            model: "Fusca",
            description: "O melhor carro"

        },
    })

    async function onSubmit(cars: z.infer<typeof FormSchema>) {
        const requestOption = {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(cars)
        }
        console.log(JSON.stringify(cars))
        const response = await fetch("https://server20241-liart.vercel.app/cars", requestOption)
        form.reset();
        alert("carro Cadastrado com Sucesso!")


    }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-2/3 space-y-6">
                <FormField
                    control={form.control}
                    name="model"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Modelo</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite modelo do carro" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}

                />

                <FormField
                    control={form.control}
                    name="description"
                    render={({ field }) => (
                        <FormItem>
                            <FormLabel>Descrição</FormLabel>
                            <FormControl>
                                <Input placeholder="Digite a descrição do carro" {...field} />
                            </FormControl>

                            <FormMessage />
                        </FormItem>
                    )}
                />


                <Button type="submit">Submit</Button>
            </form>
        </Form>
    )
}
