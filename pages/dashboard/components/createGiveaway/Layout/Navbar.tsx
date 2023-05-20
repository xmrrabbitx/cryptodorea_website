import Link from "next/link"

export default function Navbar(){
    return(
        <>
            <Link href={"/dashboard/creategiveaway"}>
                Create Giveaway
            </Link>
        </>
    )
}