import NextLink from "next/link"

export default function Link({ href, ...props }) {
    return <NextLink href={href}><a {...props}></a></NextLink>
}