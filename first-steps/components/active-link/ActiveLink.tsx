'use client';
import Link from "next/link";
import style from "./ActiveLink.module.css";
import { usePathname } from "next/navigation";

interface Props {
    path: string;
    text: string;
}

export const ActiveLink = ({ path, text }: Props) => {
    const pathName = usePathname();
    console.log(pathName, path)
    return (
        <Link className= {`hover:underline hover:text-blue-400 mr-2 transition-all ${ (pathName === path) && 'text-blue-500'}`}
             href={  path }>
            {text}
        </Link>
    )
}

