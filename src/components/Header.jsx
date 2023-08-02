import { AiOutlineSearch, AiOutlineMenu } from "react-icons/ai";
import { BiSolidUserCircle } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleMenu } from "../utilities/appSlice";
import { useEffect, useState } from "react";
import { SUGGESTION_API } from "../utilities/constants";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const [search, setSearch] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [showSuggestion, setShowSuggestion] = useState(false);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const getSuggestions = async () => {
    let data = await fetch(SUGGESTION_API + search);
    let json = await data.json();
    setSuggestions(json[1]);
  };

  useEffect(() => {
    let timer = setTimeout(() => getSuggestions(), 200);
    return () => {
      clearTimeout(timer);
    };
  }, [search]);

  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className="grid grid-flow-col items-center px-7 py-3 fixed w-full bg-white z-10">
      <div className="flex gap-4 col-span-1">
        <button
          className="text-xl hidden sm:block"
          onClick={() => toggleMenuHandler()}
        >
          <AiOutlineMenu />
        </button>
        <Link to="/">
          <img
            className="h-5"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRCa4EDbkI8ATSXs7s-ovSP2cX_Qfw06aSRWA&usqp=CAU"
            alt="youtube-logo"
          />
        </Link>
      </div>
      <div className="col-span-10 ">
        <form
          onSubmit={(e) => {
            e.preventDefault();
            navigate("/results?search_query=" + search);
            setShowSuggestion(false);
          }}
          className="flex justify-center"
        >
          <input
            placeholder="Search"
            className="border border-gray-400 rounded-l-full py-1 w-2/5 px-3 focus:outline-none focus:border-gray-00"
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            onFocus={() => setShowSuggestion(true)}
            onBlur={() => setTimeout(() => setShowSuggestion(false), 200)}
          />
          <button
            type="submit"
            className="border border-gray-400 rounded-r-full px-3 py-1 bg-gray-100 text-xl"
          >
            <AiOutlineSearch />
          </button>
        </form>

        {showSuggestion && (
          <div className="flex justify-center">
            <ul className="sm:w-2/6 bg-white rounded-lg shadow-lg fixed px-2 sm:px-5 py-3">
              {suggestions.map((s) => (
                <Link to={"/results?search_query=" + s} key={s}>
                  <li className="py-2 flex gap-4 items-center">
                    <AiOutlineSearch className="text-xl" /> {s}
                  </li>
                </Link>
              ))}
            </ul>
          </div>
        )}
      </div>
      <div className="col-span-1">
        <BiSolidUserCircle className="text-3xl" />
      </div>
    </div>
  );
};

export default Header;
