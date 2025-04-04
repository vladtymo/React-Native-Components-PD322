import { useEffect, useState } from "react";
import { User } from "../models/user";

const api = "https://jsonplaceholder.typicode.com/users";

function useUserData(id: number) {
    const [user, setUser] = useState<User | null>(null);

    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            const response = await fetch(api + "/2");
            const data = await response.json();
            console.log(data);
            setUser(data);
        } catch (error) {
            console.error('Error fetching users:', error);
        }
    };

    return user;
}

export default useUserData