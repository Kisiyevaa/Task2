import { Link } from "react-router-dom";
import Img1 from "../../assets/img/linkedin.png";
import Img2 from "../../assets/img/Youtube.png";
import Img3 from "../../assets/img/twitter.jpeg";
import Img4 from "../../assets/img/instagram.png";
import Img5 from "../../assets/img/facebook.png";
import { img_vitanur } from "../../constants";

function Footer() {
  return (
    <div className="container mx-auto px-10 lg-px-24">
      <div className="flex justify-center">
        <img src={img_vitanur} alt="img" className="w-[295px]" />
      </div>
      <div
        className="grid grid-cols-1 md:grid-cols-4 gap-10 text-center md:text-left py-10 font-serif 
     text-[#666] text-[18px] leading-[34px]"
      >
        <ul>
          <li className="text-[20px] font-bold py-4 text-black">Content</li>
          <li>
            <Link>About</Link>
          </li>
          <li>
            <Link>Blog</Link>
          </li>
          <li>
            <Link>Portfolio</Link>
          </li>
          <li>
            <Link>Review</Link>
          </li>
          <li>
            <Link>Services</Link>
          </li>
          <li>
            <Link>Work Process</Link>
          </li>
        </ul>
        <ul>
          <li className="text-[20px] font-bold py-4 text-black">Services</li>
          <li>
            <Link>Design</Link>
          </li>
          <li>
            <Link>Development</Link>
          </li>
          <li>
            <Link>Digital Marketing</Link>
          </li>
        </ul>
        <ul>
          <li className="text-[20px] font-bold py-4 text-black">Press</li>
          <li>
            <Link>FAQ</Link>
          </li>
          <li>
            <Link>Privacy and Policy</Link>
          </li>
          <li>
            <Link>Terms & Conditions</Link>
          </li>
        </ul>
        <ul>
          <li className="text-[20px] font-bold py-4 text-black">Contact</li>
          <li>
            <Link>+ 1 (617) 249-4176</Link>
          </li>
          <li>sales@vitanur.com</li>
          <li className="flex gap-5 justify-center md:justify-start pt-2">
            <Link to="https://www.linkedin.com/authwall?trk=bf&trkInfo=AQH_EVCavCbuswAAAYn38CXQeeZy1OzgDILZPOgRvNQmCFECnH5G6qQTwx3Q7ZYX02f_2UZKB9dqwk9LbmH6nqnURQX7TJj51E3l-WHdHjodCdPxZDWzkMxzw6MVsAx_sEJU2jg=&original_referer=&sessionRedirect=https%3A%2F%2Fwww.linkedin.com%2Fcompany%2F18752606">
              <img src={Img1} alt="img" className="w-[20px]" />
            </Link>
            <Link to="https://www.youtube.com/@VitanurINC">
              <img src={Img2} alt="img" className="w-[20px]" />
            </Link>
            <Link to="https://twitter.com/VitanurInc">
              <img src={Img3} alt="img" className="w-[20px]" />
            </Link>
            <Link to="https://www.instagram.com/vitanur_com/">
              <img src={Img4} alt="img" className="w-[20px]" />
            </Link>
            <Link to="https://www.facebook.com/people/Vitanurcom/100089034675243/">
              <img src={Img5} alt="img" className="w-[20px]" />
            </Link>
          </li>
        </ul>
      </div>
      <div className="text-center border-t-2 border-t-[#656565] text-[#212529]">
        <p className="py-7">© Vitanur 2022. All right reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
