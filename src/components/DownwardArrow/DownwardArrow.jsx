import "./DownwardArrow.scss";
import ArrowDownwardOutlinedIcon from "@mui/icons-material/ArrowDownwardOutlined";
import { Link } from "react-scroll";

const DownwardArrow = ({ text, page }) => {
  return (
    <Link to={page} spy={true} smooth={true} offset={0} duration={1000} className="downward-arrow">
      <h3 className="downward-arrow__text">{text}</h3>
      <div className="downward-arrow__arrow">
        <ArrowDownwardOutlinedIcon fontSize="large" />
      </div>
    </Link>
  );
};

export default DownwardArrow;
