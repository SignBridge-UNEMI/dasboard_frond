"use client"
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"

import { CirclePlus } from "lucide-react"
import { useState } from "react"    
import { FormCreateCustomer } from "../FormCreateCustomer"

export  function HeaderCompanies() {
    const [openModalCreaate, setOpenModalCreate] = useState(false)

    return (
        <div className="flex justify-between items-center">
            <h2 className="text-2xl">Modulo de Traduccion</h2>
            <Dialog open={openModalCreaate} onOpenChange={setOpenModalCreate}>
                <DialogTrigger asChild>
                    <Button className="bg-black text-white">
                        Crear un Seña
                    </Button>            
                </DialogTrigger>
                <DialogContent className="sm:max-w-[625px]">
                    <DialogHeader>  
                        <DialogTitle>Create Customer</DialogTitle>
                        <DialogDescription>
                            Create and configure your customer
                        </DialogDescription>
                    </DialogHeader>
                    {/* <FormCreateCustomer/> */}
                </DialogContent>
            </Dialog>
        </div>
    )
}
