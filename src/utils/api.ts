import axios from "axios";

const API_BASE_URL = "http://127.0.0.1:8000"; //todo- change if backend runs elsewhere

export const fetchEmails = async (query: string, count: number) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/fetch-emails`, {
      params: { query, count },
    });
    return response.data;
  } catch (error) {
    console.error("Error fetching emails:", error);
    return [];
  }
};
