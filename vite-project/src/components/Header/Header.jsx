import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import Nav from "./Nav/Nav";
import { img_vitanur } from "../../constants";

function Header() {
  return (
    <div
      id="main"
      className=" items-center shadow-md fixed top-0 left-0 right-0 bg-white z-[9999999999999]"
    >
      <div className=" container mx-auto px-10 lg-px-24">
        <div className="flex justify-between py-5 items-center">
          <div>
            <img src={img_vitanur} alt="img" className="w-[195px]" />
          </div>
          <Nav />
          <div className="flex ">
            <Link className="rounded-2xl px-6 py-2 mr-4 bg-[#E9E9E9] text-[#274EA9]">
              Get a demo
            </Link>
            <AiOutlineMenu className="block lg:hidden text-2xl mt-2" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
