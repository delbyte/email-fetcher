"use client";
import { useState } from "react";

export default function EmailForm() {
  const [profession, setProfession] = useState("");
  const [count, setCount] = useState(10);
  const [emails, setEmails] = useState<string[]>([]);

  const fetchEmails = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch("http://127.0.0.1:8000/fetch-emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ profession, count }),
      });
      const data = await response.json();
      setEmails(data.emails);
    } catch (error) {
      console.error("Error fetching emails:", error);
    }
  };

  return (
    <div className="p-4 max-w-md mx-auto">
      <form onSubmit={fetchEmails} className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Enter profession (e.g., Researcher)"
          value={profession}
          onChange={(e) => setProfession(e.target.value)}
          className="border p-2"
          required
        />
        <input
          type="number"
          placeholder="Number of emails"
          value={count}
          onChange={(e) => setCount(Number(e.target.value))}
          className="border p-2"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2">Fetch Emails</button>
      </form>

      {emails.length > 0 && (
        <div className="mt-4">
          <h2>Emails:</h2>
          <ul>
            {emails.map((email, index) => (
              <li key={index} className="border-b p-2">{email}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
