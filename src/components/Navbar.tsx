export default function Navbar() {
  return (
    <>
      <div className="h-[102px] flex justify-center items-center bg-transparent px-20 py-6">
        <img
          className="object-cover mr-6"
          src="/images/forexgh-logo.svg"
          width={158}
          height={48}
          alt="logo"
        />
        <ul className="flex space-x-8 ml-auto text-white font-medium text-lg">
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
      </div>
    </>
  );
}
