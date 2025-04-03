import { Link } from "react-router-dom";

export const LogoContainer = () => {
  return (
    <Link to={"/"}>
      <img
        src="/public/assets/img/splogo.png"
        alt=""
        className="min-w-10 min-h-10 object-contain w-15 h-12"
      />
    </Link>
  );
};

export default LogoContainer