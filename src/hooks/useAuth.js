import axios from "axios";
import { useState } from "react";

export default function useAuth({ method = "GET", endPoint = "/" }) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFetch = async (reqBody) => {
    setLoading(true);
    try {
      const response = await axios.request({
        baseURL: import.meta.env.VITE_API_URL,
        method: method,
        url: endPoint,
        data: reqBody,
      });
      setData(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, handleFetch };
}