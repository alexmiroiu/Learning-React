import router, { useRouter } from 'next/router';

function PortfolioProjectPage() {
    const router = useRouter();

    const queryParam = router.query;
    console.log(queryParam.projectid);

    return <div>
        <h1>The Portfolio Project Page</h1>
    </div>
}

export default PortfolioProjectPage;