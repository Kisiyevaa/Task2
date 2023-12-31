import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { FILE_URL } from "../../constants";
import { getBlogById } from "../../services";




  function BlogDetail() {
    const params = useParams();
    const [data, setData] = useState({}); 
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const result = await getBlogById(params.id); 
          setData(result);
        } catch (err) {
          console.log(err);
        }
      };
  
      fetchData(); 
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