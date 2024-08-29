import axios from 'axios';
import React from 'react';
;

function Logout() {
    const handleLogout = async () => {
        try {
            // Retrieve token as a string (no JSON parsing needed)
            const token = localStorage.getItem('token');
        
            if (!token) {
                console.error('No token found');
                return;
            }
        
        
            const res = await axios.post('http://localhost:4000/allroutes/logout', {}, {
                headers: {
                    Authorization: `${token}` 
                }
            });
            
       
            // console.log(JSON.stringify(res.message));
            // // console.log(res.data);
            localStorage.removeItem('token');

            window.location.reload()
        } catch (error) {
            console.error("Logout failed", error);
        }
    };
    
    return (
        <div>
             <button onClick={(e)=>{handleLogout()}} className="bg-red-500 text-white px-2 py-1 rounded-md shadow-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 transition-colors">
                Logout
            </button>
        </div>
    );
}

export default Logout;
