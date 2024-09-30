
import React, { useState, useEffect } from "react";
import './App.css';
import Details from "./Details";

function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        
        const usersData = JSON.parse(localStorage.getItem('usersdata')) || [];
        setUsers(usersData);
    }, []);

    return (
        <div className="users">
            <Details users={users} />
        </div>
    );
}

export default Users;
