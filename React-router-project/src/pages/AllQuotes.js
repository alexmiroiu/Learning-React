import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
    {id: 'q1', author: 'Max', text: 'Teaching React is fun!'},
    {id: 'q2', author: 'Alex', text: 'Learning React is more fun!'}
];

const AllQuotes = () => {
    return <QuoteList quotes={DUMMY_QUOTES}/>
}

export default AllQuotes;