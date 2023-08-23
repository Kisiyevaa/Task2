import { Link } from "react-router-dom";
import "../../assets/style.css";
import { FILE_URL } from "../../constants.js";

function BlogCard(props) {
  return (
    <div className="hover:bg-[#c05134] text-center  card">
      <Link to={`/blog/${props.id}`}>
        <img src={FILE_URL + props.file} alt="img" className="w-[100%]" />
      </Link>
      <div className="">
        <h1 className="text-[#274ea9] text-[25px] mt-[60px] leading-[1.2] font-semibold px-[40px] content">
          {props.name}
        </h1>
        <h3 className="mt-[25px] text-[22px] text-[#606060] px-[18px] content">
          {props.title}
        </h3>
      </div>
      <Link
        to={`/blog/${props.id}`}
        className="bg-[#274ea9] px-6 py-3 text-[23px] text-white inline-block font-medium my-10
         hover:bg-white hover:text-[#274ea9]"
      >
        Read More
      </Link>
    </div>
  );
}

export default BlogCard;
