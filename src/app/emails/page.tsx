"use client";

import { useState } from "react";
import { fetchEmails } from "@/utils/api";

export default function EmailFetcher() {
  const [query, setQuery] = useState("");
  const [count, setCount] = useState(10);
  const [emails, setEmails] = useState<string[]>([]);

  const handleFetchEmails = async () => {
    const data = await fetchEmails(query, count);
    setEmails(data);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Fetch Researcher Emails</h1>

      <div className="flex space-x-2 mb-4">
        <input
          type="text"
          placeholder="Enter field (e.g. AI Research)"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="border p-2 rounded"
        />
        <input
          type="number"
          min="1"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="border p-2 rounded"
        />
        <button
          onClick={handleFetchEmails}
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          Fetch
        </button>
      </div>

      <ul className="w-full max-w-md">
        {emails.map((email, index) => (
          <li key={index} className="border-b py-2">{email}</li>
        ))}
      </ul>
    </div>
  );
}
