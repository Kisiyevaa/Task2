import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FILE_URL } from "../../constants";
import { getData } from "../../utils/api";




  function BlogDetail() {
    const params = useParams();
    const [data, setData] = useState({}); // Initialize data as an object, not an array
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await getData(params.id); // Assuming getData returns a Promise
          setData(result); // Update the state with the fetched data
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchData(); // Call the function to fetch data
    }, [params.id])
  return (
    <div className=" container mx-auto pt-32">
      <h3>{data.name}</h3>
      <p>{data.title}</p>
      <div
        className=""
        dangerouslySetInnerHTML={{ __html: data.content }}
      ></div>
      <h1>
        {data.category?.name}----{data.category?.id}
      </h1>
      <div className="img ">
        {data.files?.map((item) => (
          <div key={item.id}>
            <img src={FILE_URL + item.path} alt="img" className="py-10" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogDetail;
