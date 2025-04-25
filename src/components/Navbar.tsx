import { Transition } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  const handleDropdown = () => {
    setShowDropdown((prev) => !prev);
  };

  return (
    <>
      <div className="h-[102px] relative w-full flex justify-between items-center bg-transparent px-20 py-6">
        <img
          className="object-cover mr-6"
          src="/images/forexgh-logo.svg"
          width={158}
          height={48}
          alt="logo"
        />
        <ul className="md:flex hidden space-x-8 ml-auto text-white font-medium text-lg">
          <li className="py-4 px-2">
            <a href="">Exchange Rate</a>
          </li>
          <li className="py-4 px-2">
            <a href="">Converter</a>
          </li>
          <li className="py-4 px-2">
            <a href="">News</a>
          </li>
        </ul>
        <div className="md:hidden block">
          <div>
            {showDropdown ? (
              <X onClick={handleDropdown} className="text-white size-8 cursor-pointer" />
            ) : (
              <Menu onClick={handleDropdown} className="text-white size-8 cursor-pointer" />
            )}
          </div>
          <Transition
            show={showDropdown}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <ul className="absolute transition ease-out duration-100 right-0 left-0 inset-x-1/2 mt-5 w-full min-h-screen rounded-md bg-white/97 shadow-lg ring-black ring-opacity-5 focus:outline-none">
              <li className="py-4 px-2">
                <a href="">Exchange Rate</a>
              </li>
              <li className="py-4 px-2">
                <a href="">Converter</a>
              </li>
              <li className="py-4 px-2">
                <a href="">News</a>
              </li>
            </ul>
          </Transition>
        </div>
      </div>
    </>
  );
}
