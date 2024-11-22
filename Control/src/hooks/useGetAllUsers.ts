import { useEffect, useState } from "react";

export interface User {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}

const useGetAllUsers = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<Array<User>>([]);

  useEffect(() => {
    const fetchData = () => {
      setIsLoading(true);
      fetch("https://reqres.in/api/users")
        .then((response) => response.json())
        .then((result) => {
          setData(result.data);
          setIsLoading(false);
        })
        .catch(() => {
          setIsLoading(false);
        });
    };

    fetchData();
  }, []);

  return { isLoading, data, setData };
};

export default useGetAllUsers;
