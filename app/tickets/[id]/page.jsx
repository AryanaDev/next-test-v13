

export async function generateStaticParams(){
    
    const res = await fetch('http://localhost:4000/tickets')
    const tickets = await res.json()

    return tickets.map((ticket)=>({
        id:ticket.id
    }))
}

async function getTickets(id) {
    const res = await fetch('http://localhost:4000/tickets/' + id, {
        next: {
            revalidate: 1
        }
    })
    return res.json()
}
    export default async function TicketDetails({params}) {

        const tickets = await getTickets(params.id)

        return (
            <main>
                <nav>
                    <h2>Ticket Details</h2>
                </nav>
                <div className="card">
                    <h3>{tickets.title}</h3>
                    <p>{tickets.body}</p>
                    <small>Created by {tickets.user_email}</small>
                    <div className={`pill ${tickets.priority}`}>
                        {tickets.priority} priority
                    </div>
                </div>
            </main>
        )
    }
