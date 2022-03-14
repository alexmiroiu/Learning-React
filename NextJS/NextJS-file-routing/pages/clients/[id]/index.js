import { useRouter } from "next/router";

function ClientProjectsPage() {
    const router = useRouter();

    const clientName = router.query.id;

    return (
        <div>
            <h1>{`The Projects of ${clientName}`}</h1>
        </div>
    )
}

export default ClientProjectsPage;