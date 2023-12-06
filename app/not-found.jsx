import Link from "next/link";

export default  function notFound(){
    return(
        <main className='text-center'>
            <h2 className='text-3xl'>There was a problem</h2>
            <p>We Could Not Find The Page You were Looking For</p>
            <p>Go Back to the Link <Link href='/'>Dashboard</Link></p>
        </main>
    )
}