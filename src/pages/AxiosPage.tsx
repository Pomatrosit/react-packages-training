import axios from "axios";
import { useEffect, useState } from "react";

interface IUser {
  id: number;
  name: string;
}

const AxiosPage = () => {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    // You can specify config defaults that will be applied to every request.
    axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

    // При запросе на сторонние api кроме своего бэка имеет смысл конфижить Authorization token пустой строкой, либо создавать разные инстансы axios

    axios.defaults.headers.common["Authorization"] = "AUTH_TOKEN";

    // interceptors

    axios.interceptors.response.use(
      function (response) {
        // Any status code that lie within the range of 2xx cause this function to trigger
        // Do something with response data
        return response;
      },
      function (error) {
        // Any status codes that falls outside the range of 2xx cause this function to trigger
        // Do something with response error
        return Promise.reject(error);
      }
    );

    getUsers();
  }, []);

  const getUsers = async () => {
    try {
      const data = await axios.get<IUser[]>("/users");
      setUsers(data.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Axios Page</h1>
      {users.map((user: IUser) => (
        <p key={user.id}>
          {user.id} {user.name}
        </p>
      ))}
    </div>
  );
};

export default AxiosPage;
