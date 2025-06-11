import React, { useState, useEffect} from "react";

function Quotes() {
    const [quote, setQuote] = useState(null);
    const [quoteLoading, setQuoteLoading] = useState(true);

    useEffect(() => {
        const fetchQuote = async () => {
            try {
                const response = await fetch ('/api/quote')
                if (response.ok) {
                    const data = await response.json();
                    setQuote(data);
                }
            } catch (error) {
                console.error('Quote fetching error: ', error)
            } finally {
                setQuoteLoading(false);
            }
        };

        fetchQuote();
    }, []);

    return (
        <div className="quotes">
            {quote ? ( // line 28 and 31 needed for conditional rendering
                <> 
                    <blockquote>{quote.text}</blockquote>
                    <cite>- {quote.author}</cite>
                </>
        ) : (
            "Loading..."
        )}
        </div>
    )
}

export default Quotes;