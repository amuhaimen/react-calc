function App() {
 
  return (
    <>
      <section className="flex">
        <div className="left bg-[#36ADBD] w-[60%]  px-[39px]">
          <div className="up flex">
            <div className=" w-[30%] pt-[80px]">
              <h3 className="text-center font-inter font-bold text-4xl text-white">
                ADD
              </h3>
              <input className="w-full py-[13px] pl-[20px] mt-[21px]" />
            </div>
            <div className=" w-[37%] pt-[143px]">
              <a href="#">
                <div className="mx-auto font-inter font-bold text-2xl py-[10px] px-[77px] w-[235px]  text-black bg-white">
                  Button
                </div>
              </a>
            </div>
            <div className=" w-[30%] text-right pt-[80px]">
              <h3 className="text-center font-inter font-bold text-4xl text-white">
                Division
              </h3>
              <input className="w-full py-[13px] pl-[20px] mt-[21px]" />
            </div>
          </div>
          <div className="down flex">
            <div className=" w-[30%] pt-[500px] pb-[72px]">
              <h3 className="text-center font-inter font-bold text-4xl text-white">
                Minus
              </h3>
              <input className="w-full py-[13px] pl-[20px] mt-[21px]" />
            </div>
            <div className=" w-[39%] "></div>
            <div className=" w-[30%]  pt-[500px] pb-[72px]">
              <h3 className="text-center font-inter font-bold text-4xl text-white">
                Multiplication
              </h3>
              <input className="w-full py-[13px] pl-[20px] text-right mt-[21px]" />
            </div>
          </div>
        </div>
        <div className="right bg-[#36ADBD] w-[40%] h-[878px] text-center">
          <h2 className="text-white font-inter font-bold text-[96px] pt-[63px]">
            List
          </h2>
        </div>
      </section>
 
  
 
    </>
  );
}

export default App;
