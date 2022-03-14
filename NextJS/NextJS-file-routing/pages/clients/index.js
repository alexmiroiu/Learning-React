import Link from "next/link";

function ClientsPage() {
    const clients = [
        {id:'01', name: 'Alex'},
        {id:'02', name: 'Oana'}
    ]

    return (
        <div>
            <h1>The Clients Page</h1>
            <ul>
                {/* {clients.map(client => <li key={client.id}><Link href={`/clients/${client.name}`}>{client.name}</Link></li>)} */}
                {clients.map(client => <li key={client.id}><Link href={`/clients/${client.name}`}>{client.name}</Link></li>)}
            </ul>
        </div>
    )
}

export default ClientsPage;