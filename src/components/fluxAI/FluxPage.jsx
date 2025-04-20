import { useState } from "react";

const FluxPage = () => {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const queryFluxAI = async () => {
        if (!input.trim()) return;
        setLoading(true);
        setResponse("");

        try {
            const res = await fetch(
                "https://router.huggingface.co/replicate/v1/models/black-forest-labs/flux-schnell/predictions",
                {
                    headers: {
                        Authorization: "Bearer {$process.env.API_KEY}", // Replace with your API key
                        "Content-Type": "application/json",
                    },
                    method: "POST",
                    body: JSON.stringify({ inputs: input }),
                }
            );

            const data = await res.json();
            setResponse(data.output || "No response received.");
        } catch (error) {
            console.error("Error:", error);
            setResponse("An error occurred while fetching the response.");
        }

        setLoading(false);
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center bg-gray-900 text-white p-6">
            <h1 className="text-2xl font-bold mb-4">Shastralok AI</h1>
            <textarea
                className="w-full max-w-2xl p-3 bg-gray-800 text-white rounded-lg"
                rows="4"
                placeholder="Ask something about Hindu scriptures..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
            ></textarea>
            <button
                className="mt-4 px-6 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 disabled:opacity-50"
                onClick={queryFluxAI}
                disabled={loading}
            >
                {loading ? "Processing..." : "Ask AI"}
            </button>
            {response && (
                <div className="mt-6 p-4 bg-gray-800 rounded-lg w-full max-w-2xl">
                    <h2 className="text-lg font-semibold">Response:</h2>
                    <p className="mt-2">{response}</p>
                </div>
            )}
        </div>
    );
};

export default FluxPage;
