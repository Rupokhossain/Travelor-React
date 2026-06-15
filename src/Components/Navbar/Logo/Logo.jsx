import { Link } from "react-router";
const Logo = () => {
  return (
    <div>
      <Link
        className={`logo cursor-pointer text-2xl md:text-4xl text-white font-medium font-kaushan!`}
      >
        Travelo
        <span className="text-prim">r.</span>
      </Link>
    </div>
  );
};
export default Logo;
