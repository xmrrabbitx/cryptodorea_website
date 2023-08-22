import Link from "next/link"

export default function Navbar(){
    return(
        <>
            <Link href={"/dashboard/creategiveaway"}>
                Create Giveaway
            </Link>
           <br />
            <Link href={"/dashboard/managegiveaways"}>
                manage Giveaways
            </Link>
        </>
    )
}