import axios from "axios"
import { API_URL } from "../constants"

const HEADERS = {
    "Content-Type": "application/json"
}

export const get = async (url) => {
    const data = await axios.get(`${API_URL}${url}`,
        {
            headers: {
                HEADERS
            }
        })


    return data.data
}

export const getData = async (id)=>{
    const blogData= await axios.get(`${API_URL}/blog/${id}`,
    {
        headers: {
            HEADERS
        }
    }
    
    )
    return blogData.data
}
