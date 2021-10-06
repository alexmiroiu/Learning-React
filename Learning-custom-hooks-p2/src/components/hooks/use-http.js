import { useState } from "react";

const useHttp = (requestConfig, applyData) => {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchTasks = async (taskText) => {
      setIsLoading(true);
      setError(null);
      try {
        const response = await fetch(
          requestConfig.url, {
              method: requestConfig.method,
              headers: requestConfig.headers,
              body: JSON.stringify(requestConfig.body)
          }
        );
  
        if (!response.ok) {
          throw new Error('Request failed!');
        }
  
        const data = await response.json();

        applyData(data);
    };

    return {
        isLoading,
        error, 
        sendRequest
    }
}

export default useHttp;

// 'https://react-http-e2bde-default-rtdb.europe-west1.firebasedatabase.app/tasks.json'