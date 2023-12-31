import Link from "next/link";

export default function notFound(){
    return(
        <main className='text-center'>
            <h2 className='text-3xl'>Sorry but Nothing</h2>
            <p>We Could Not Find The Page You were Looking For</p>
            <p>Go Back to the Link <Link href='/tickets'>Tickets</Link></p>
        </main>
    )
}