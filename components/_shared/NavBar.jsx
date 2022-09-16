import { navElements } from "../../lib/constants";
import { useContext } from "react";
import HireMe from "../../context/context";
import Link from "next/link";

const NavBar = () => {
  const { connect, wallet, provider, signer } = useContext(HireMe);

  return (
    <div className="py-6 px-28 2xl:px-52 flex items-center justify-between border-b border-gray-300">
      <div className="flex items-center gap-10">
        <Link href="/">
          <div className="flex items-center gap-3 cursor-pointer">
            <img src="/brand/Logomark.png" />
            <div className="text-lg font-extrabold tracking-tight logo">
              Hire Me
            </div>
          </div>
        </Link>
        <div className="flex items-center gap-8 font-medium text-gray-500">
          {navElements.map((el, i) => (
            <div key={i} className="cursor-pointer hover:text-black">
              {el}
            </div>
          ))}
        </div>
      </div>
      <div
        onClick={() => connect()}
        className="bg-blue-600 text-white px-6 py-2 rounded-xl cursor-pointer hover:bg-blue-500"
      >
        {wallet
          ? wallet.accounts[0].address.substring(0, 5) +
            "..." +
            wallet.accounts[0].address.substring(39)
          : "Connect"}
      </div>
    </div>
  );
};

export default NavBar;
