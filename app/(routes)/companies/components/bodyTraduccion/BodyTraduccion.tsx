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

import { CirclePlus, Trash, Play, Pause, Info, Volume2 } from "lucide-react" // Import the necessary icons
import { useState } from "react"    
import { FormCreateCustomer } from "../FormCreateCustomer"

export function BodyTraduccion() {
    const [openModalCreate, setOpenModalCreate] = useState(false)

    return (
        <div className="flex justify-between items-start py-3">
            <div className="flex flex-col items-center">
                {/* White container - 550x450 pixels */}
                <div className="bg-gray-500 w-[550px] h-[510px] rounded shadow flex items-center justify-center">
                    {/* <h2 className="text-2xl">Modulo de Traduccion</h2> */}
                </div>
                
                {/* Row of icons below the first container */}
                <div className="flex justify-between w-[200px] mt-4">
                    <Trash className="cursor-pointer" />
                    <Play className="cursor-pointer" />
                    <Pause className="cursor-pointer" />
                    <Info className="cursor-pointer" />
                </div>
            </div>

            <div className="mx-4"></div>

            {/* Text box with a top bar */}
            <div className="flex flex-col items-center ">
                <div className="relative bg-white w-[550px] h-[510px] rounded shadow">
                    {/* Top bar inside the text box */}
                    <div className="flex justify-between items-center border-b p-2">
                        <span className="text-gray-500">Traduccion a Texto...</span>
                        <Volume2 className="cursor-pointer" />
                    </div>
                    <textarea
                        className="w-[450px] H-[500px] p-4 mt-2 outline-none resize-none"
                        placeholder=""
                    />
                </div>
            </div>
        </div>
    )
}
