import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Search() {
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (searchTerm !== '') {
      axios.get(`http://localhost:3000/search.php?q=${searchTerm}`)
        .then(response => {
          setResults(response.data);
        })
        .catch(error => {
          console.error(error);
        });
    }
  }, [searchTerm]);

  const handleSearch = () => {
    navigate('../SearchResult', { state: { results: results }});
  };

  return (
    <>
      <div className=" justify-center ml-auto">
        <div className="pt-4 xl:w-96">
          <div className="relative mb-4 flex w-full flex-wrap items-stretch">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="relative m-0 block w-[1%] min-w-0 flex-auto rounded border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-indigo-600 text-sm font-medium text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary-600 focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200"
              placeholder="Hae tuotetta"
              aria-label="Search"
              aria-describedby="button-addon2"
            />
            <button onClick={handleSearch}>Search</button>
            <span
              className="input-group-text flex items-center whitespace-nowrap rounded px-3 py-1.5 text-center text-base font-normal text-neutral-700 dark:text-neutral-200"
              id="basic-addon2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
