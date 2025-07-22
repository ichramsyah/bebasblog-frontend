import { Link } from 'react-router-dom';

const NavbarAuth = () => {
  return (
    <nav className="pt-3 pl-6">
      <Link to="/" className=" font-bold text-2xl md:text-4xl text-text-dark">
        Bebas<span className="text-[#AE70FF]">Blog</span>
      </Link>
    </nav>
  );
};

export default NavbarAuth;
