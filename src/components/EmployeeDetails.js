import Axios from "axios";

import { useEffect } from "react";

function EmployeeDetails()
{
    useEffect(()=>{
        Axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{
            if(res.status===200)
            {
                console.log(res);
            }
        })
    })
}