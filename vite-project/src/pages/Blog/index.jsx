import { useEffect, useState } from "react";
import { img } from "../../constants";
import { Link } from "react-scroll";
import { BlogCard } from "../../components";
import { getBlogs } from "../../services";

function Blog() {
  const [list, setList] = useState([]);
  const [pageSize, setPageSize] = useState(3);
  const [pageNumber, setPageNumber] = useState(1);
  const [count, setCount] = useState(null);

  const fetchBlogs = async () => {
    try {
      const { data, count } = await getBlogs({
        pageSize,
        pageNumber,
      });
      setCount(count);

      console.log("count", count);
      setList(data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, [pageSize]);

  return (
    <div>
      <div>
        <div className="container mx-auto px-12 lg:px-20">
          <h1 className="pt-32 text-center text-5xl font-medium italic">
            Blogs
          </h1>
          <div className="pt-20 grid grid-cols-2 lg:grid-cols-3 gap-10 mb-32">
            {list.map((item) => (
              <BlogCard key={item.id} {...item} />
            ))}
          </div>
          <div className="text-center mb-32">
            {count !== list.length ? (
              <button
                className="bg-[#274ea9] text-white text-[25px] px-8 py-2 hover:bg-[#c05134] duration-300 rounded"
                onClick={() => setPageSize((prev) => prev + 3)}
              >
                More
              </button>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
      <Link
        to="main"
        spy={true}
        smooth={true}
        hashSpy={true}
        offset={-2800}
        duration={500}
      >
        <img
          src={img}
          alt="img"
          className="w-[50px]  fixed  bottom-2 right-3"
        />
      </Link>
    </div>
  );
}

export default Blog;
