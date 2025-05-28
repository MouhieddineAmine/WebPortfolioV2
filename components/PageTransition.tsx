"use client"
import React, { ReactNode } from 'react'
import Link, { LinkProps} from 'next/link'
import { useRouter } from 'next/navigation'

interface PageTransitionProps extends LinkProps{
    children: ReactNode;
    href: string;
    className?: string;
}

function sleep(ms:number): Promise<void> {
    return new Promise((resolve) => requestAnimationFrame(() =>  setTimeout(resolve, ms)));
}

export const PageTransition = ({
    children,
    href,
    className,
    ...props
}: PageTransitionProps) => {
    const router = useRouter();

    const handleTransition = async (e:React.MouseEvent<HTMLAnchorElement, MouseEvent>) =>{
        e.preventDefault();

        const body  = document.querySelector("body");
        body?.classList.add("page-transition");
        await sleep(500);
        router.push(href);
        await sleep(500);
        body?.classList.remove("page-transition");
    }



  return (
    <Link onClick={handleTransition} href={href} className={className} {...props}>
        {children}
    </Link>
  )
}
