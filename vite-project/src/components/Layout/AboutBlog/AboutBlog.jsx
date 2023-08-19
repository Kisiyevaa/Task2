import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import {FILE_URL} from "../../../contants"
function AboutBlog() {
    const params = useParams()
    // console.log(params);
    const [data, setData] = useState([])
    useEffect(() => {
        axios.get(`https://api.vitanur.com/api/blog/${params.id}`)
            .then(res => {
                setData(res.data)
                console.log(res.data);
            })
    }, [])
    return (
        <div className=' container mx-auto pt-32'> 
            <h3>{data.name}</h3>
            <p>{data.title}</p>
            <div className="content">
                {data.content && <div dangerouslySetInnerHTML={{ __html: data.content }} />}
            </div>
            <h1>{data.category?.name}----{data.category?.id}</h1>
            <div className='img '>
                {
                    data.files?.map(item => (
                        <div key={item.id}>
                            <img src={FILE_URL+item.path} alt="img" className='py-10'/>
                        </div>
                    ))
                }
            </div> 
        </div>
    )
}

export default AboutBlog