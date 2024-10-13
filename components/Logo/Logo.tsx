"use client"
 import Image from "next/image";
 import { useRouter } from "next/navigation";

export function Logo() {
    const Router = useRouter();
    return (
        <div className="min-h-20 h-20 flex items-center px-6 border-b cursor-pointer gap-2 bg-[#e6f0fe]" onClick={()=> Router.push("/")}>
            <Image src="/logo.ico" alt="logo" width={30} height={30} priority />
            <h1 className="font-bold text-xl"> TRADUCTOR LSEC</h1>

        </div>
    )
}
