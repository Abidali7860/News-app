import React from "react";

export default function Card({ data }) {
  console.log(data);

  return (
    <div className="grid flex-wrap gap-2 md:grid-cols-3 sm:grid-cols-2">
      {data.map((curItem, idx) => {
        if (!curItem.urlToImage) {
          return null;
        } else {
          return (
            <>
              <div className="mx-5 border-[1px] border-[#f2e5e5] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.5)] m-2 h-[400px] overflow-y-scroll">
                <div className="">
                  <div>
                    <img src={curItem.urlToImage} alt="" />
                  </div>
                  <div className="p-2">
                    <a
                      className=" font-[600] hover:underline"
                      onClick={() => window.open(curItem.url)}
                      href=""
                    >
                      {curItem.title}
                    </a>
                    <p>{curItem.description}</p>
                    <button
                      onClick={() => window.open(curItem.url)}
                      className="bg-[#4358f8] text-white border-[grey] my-2 p-1"
                    >
                      Read More
                    </button>
                  </div>
                </div>
              </div>
            </>
          );
        }
      })}
    </div>
  );
}
