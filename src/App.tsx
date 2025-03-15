import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <main className="relative bg-[#0052B4A6] bg-blend-soft-light bg-[url(/images/forexbgimg.jpeg)] bg-no-repeat bg-cover bg-center w-full h-svh">
        <div className="w-full h-full backdrop-blur-[2px]">
          <Navbar />
          <div className="mt-15 flex flex-wrap justify-center items-center gap-[87px] text-white">
            <div>
              <p className="sora-font text-[96px] leading-[101px]">
                Explore Your <br /> Rate With Us
              </p>
              <p>
                Considering a Chase (US) international money transfer? Compare{" "}
                <br />
                Chase (US) transfer fees and exchange rates today
              </p>
              <div className="mt-[115px] flex flex-col items-start">
                <p className="mb-[13px]">Latest News</p>
                <div className="flex mb-8">
                  <div className="h-[2px] w-[346px] bg-[#F39C12]"></div>
                  <div className="h-[2px] w-[346px] bg-white/30"></div>
                </div>
                <div className="flex justify-between items-center">
                  <div className="p-4 w-[344px]">
                    <img
                      className="object-cover mb-4"
                      src="/images/file-icon-yellow.svg"
                      alt=""
                      width={22}
                      height={22}
                    />
                    <p>
                      Ghana’s Battered Local Bond <br /> Market Casts Shadow
                      Over <br /> Growth Rebound
                    </p>
                  </div>
                  <div className="p-4 w-[344px]">
                    <img
                      className="object-cover mb-4"
                      src="/images/file-icon-white.svg"
                      alt=""
                      width={22}
                      height={22}
                    />
                    <p>
                      Ghana’s Battered Local Bond <br /> Market Casts Shadow
                      Over <br /> Growth Rebound
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col rounded-3xl h-[672px] w-[616px]">
              <div className="h-[71px] text-[18px] font-bold bg-[#00255166] rounded-t-3xl flex justify-start items-center space-x-2 p-6">
                <button className="p-6 cursor-pointer">Exchange Rate</button>
                <button className="p-6 cursor-pointer">
                  Currency Converter
                </button>
              </div>
              <div className="bg-[#DCDCDC80] rounded-b-3xl flex justify-center p-6">
                <div className="w-full h-[549px] bg-white rounded-[9px]">
                  hey
                </div>
              </div>
            </div>
          </div>
          <div className="absolute bottom-0 right-0 -z-10 overflow-hidden">
            <img
              className="h-[888px] w-[1000px] object-cover"
              src="/images/yellow-rectangle.png"
            />
          </div>
        </div>
      </main>
    </>
  );
}

export default App;
