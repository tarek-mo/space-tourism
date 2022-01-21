import logo from "../assests/logo.png";

const Nav = () => {
  return (
    <nav className="flex items-center mt-10 bg-gray-500 w-11/12 mx-auto max-w-screen-2xl">
      <img src={logo} className="mr-16" alt="Logo" />
      <div className="flex-grow h-px bg-white opacity-25"></div>
      <div className="nav-links-desk"></div>
    </nav>
  );
};

export default Nav;
