import React, { useEffect, useState } from "react";
import Card from "../Card";
import { CgMenuLeft } from "react-icons/cg";
import { IoClose } from "react-icons/io5";

export default function NewsApp() {
  const [search, setSearch] = useState("india");
  const [newsData, setNewsData] = useState([]);
  const [menu, setMenu] = useState(false);
  const handleInput = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value);
  };
  const Api_Key = "2f935b438ead4328b02307d59f8997af";
  const getData = async () => {
    const response = await fetch(
      `https://newsapi.org/v2/everything?q=${search}&apiKey=${Api_Key}`
    );
    const jsonData = await response.json();
    console.log(jsonData.articles);
    setNewsData(jsonData.articles);
  };
  useEffect(() => {
    getData();
  }, []);

  const userInput = (event) => {
    event.preventDefault();
    setSearch(event.target.value);
  };
  return (
    <div>
      <nav className="min-w-full fixed z-10  flex justify-around py-3 bg-[#50d0ea]">
        <div>
          <h1 className="text-2xl font-bold">
            Daily<span className="opacity-75 text-[orange]">News</span>
          </h1>
        </div>
        <ul className="hidden my-2 md:block">
          <a className="font-[500]" href="">
            All News
          </a>
          <a className="font-[500]" href="">
            Trending
          </a>
        </ul>
        <div>
          <input
            value={search}
            onChange={handleInput}
            className="md:w-[200px] w-[50%] p-1 m-1 bg-white"
            type="text"
            placeholder="search News"
          />
          <button onClick={getData} className="bg-[yellow] p-1 font-[500]">
            Search
          </button>
        </div>
      </nav>

      <div className="relative top-[60px] flex justify-center gap-4 py-3 ">
        <button
          onClick={userInput}
          value="sports"
          className="bg-[#e37272] p-2 font-[700] rounded-[20px] text-white"
        >
          Sports
        </button>
        <button
          onClick={userInput}
          value="politics"
          className="bg-[#e37272] p-2 font-[700] rounded-[20px] text-white"
        >
          Politics
        </button>
        <button
          onClick={userInput}
          value="health"
          className="bg-[#e37272] p-2 font-[700] rounded-[20px] text-white"
        >
          Health
        </button>
        <button
          onClick={userInput}
          value="fitness"
          className="bg-[#e37272] p-2 font-[700] rounded-[20px] text-white"
        >
          Fitness
        </button>
      </div>

      <div className="relative top-[60px]">
        <Card data={newsData} />
      </div>
    </div>
  );
}
