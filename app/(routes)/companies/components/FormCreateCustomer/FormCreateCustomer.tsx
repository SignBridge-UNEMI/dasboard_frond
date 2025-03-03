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
import { FormCreateCustomerProps } from "./FormCreateCustomer.types"
import { useState } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UploadButton } from "@/utils/uploadthing"
import {Toast} from "@/components/ui/toast"
import {useToast, toast } from "@/hooks/use-toast"

const formSchema = z.object({
    name: z.string(),
    country: z.string().min(2),
    website: z.string().min(2),
    phone: z.string().min(6),
    cif: z.string().min(6),
    profileImage: z.string()
})

export function FormCreateCustomer(props: FormCreateCustomerProps) {
    const {setOpenModalCreate}= props
    const [openUpload, setOpenUpload] = useState(false)
    const [photoUploaded, setPhotoUploaded] = useState(false)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
            name: "",
            country: "",
            website: "",
            phone: "",
            cif: "",
            profileImage: "",
        },
    })
    const{isValid}  = form.formState

    const onSubmit= async (values: z.infer<typeof formSchema>) => { 
        console.log(values)
    }

    return (
        <div>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                    <div className="grid grid-cols-2 gap-3">
                        <FormField
                            control={form.control}
                            name="name"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Company name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Company name..." type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="country"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Country</FormLabel>
                                    <Select
                                        onValueChange={field.onChange}
                                        defaultValue={field.value}
                                    >
                                        <FormControl>
                                            <SelectTrigger>
                                                <SelectValue placeholder="Select the country" 
                                                />
                                            </SelectTrigger>
                                        </FormControl>
                                        <SelectContent>
                                            <>
                                                <SelectItem value="spain"> España </SelectItem>
                                                <SelectItem value="ecuador"> Ecuador </SelectItem>
                                                <SelectItem value="peru"> Peru </SelectItem>
                                                <SelectItem value="brazil"> Brazil </SelectItem>
                                                <SelectItem value="grecia"> Grecia </SelectItem>
                                                <SelectItem value="canada"> Canadá </SelectItem>
                                                <SelectItem value="mexico"> Mexico </SelectItem>
                                            </>
                                        </SelectContent>
                                    </Select>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="website"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel> website </FormLabel>
                                    <FormControl>
                                        <Input placeholder=" www.nicolevizuete.com" type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Phone</FormLabel>
                                    <FormControl>
                                        <Input placeholder="+593-999-999-999-9" type="number" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="cif"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>CIF</FormLabel>
                                    <FormControl>
                                        <Input placeholder="B-1234567" type="text" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="profileImage"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Profile Image</FormLabel>
                                    <FormControl>
                                        {photoUploaded ? (
                                            <p className="text-sm">Image Uploaded!</p>
                                        ):(
                                        <UploadButton 
                                            className="bg-slate-600/20 text-slate-800 rounded-lg outline-dotted outline-3"
                                            {...field}
                                            endpoint="profileImage"
                                            onClientUploadComplete={(res)=>{
                                                form.setValue("profileImage", res?.[0].url)
                                                toast({
                                                    title: "foto subida!"
                                                })
                                                setPhotoUploaded(true)
                                            }}
                                            onUploadError={(error: Error)=>{
                                                toast({
                                                        title: "Error de carga de imagen"
                                                })
                                            }}
                                        />
                                    )}
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                    </div>
                    <Button className="bg-black text-white" type="submit" disabled={!isValid}>Submit</Button>
                    
                </form>
            </Form>
        </div>
    )
}
