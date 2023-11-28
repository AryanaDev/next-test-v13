export default async function TicketDetails({ params }) {

    const ticket = await getTickets(params.id)

    return (
        <main>
            <nav>
                <h2>Ticket Details</h2>
            </nav>
            <div className="card">
                <h3>{ticket.title}</h3>
                <p>{ticket.body}</p>
                <small>Created by {ticket.userEmail}</small>
                <div className={`pill ${ticket.priority}`}>
                    {ticket.priority} priority
                </div>
            </div>
        </main>
    )
}
