"use client";
import React, { useState, useEffect, useContext } from "react";
import { Card } from "./card";
import { useSelector, useDispatch } from "react-redux";
import { KeywordContext } from "./KeywordContext";
import {
  setKeyword,
  fetchInitialNews,
  fetchNewsByKeyword,
} from "../src/store/slices/newsSlice";

const itemsPerPage = 12;
const apiKey = "pub_47103f76a4ef2872c4fa6d5df6c6515fcc3bb";

export const Main = () => {
  const { keyword, newsCon, setNewsCon } = useContext(KeywordContext);
   console.log("hello hi ",keyword,newsCon);
  const [currentPage, setCurrentPage] = useState(1);
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [cache, setCache] = useState({});

  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  };

  const fetchInitialNews = async () => {
    setLoading(true);
    setError(null);

    try {
      const responses = await Promise.all([
        fetch(`https://newsdata.io/api/1/latest?apikey=${apiKey}`),
        fetch(`https://newsdata.io/api/1/latest?apikey=${apiKey}&q=india`),
        fetch(`https://newsdata.io/api/1/latest?apikey=${apiKey}&q=movies`)
      ]);
      const data = await Promise.all(responses.map((res) => res.json()));

      const combinedNews = data.flatMap((result) => result.results);
      const shuffledNews = shuffleArray(combinedNews);

      setNews(shuffledNews);
      setNewsCon(shuffledNews);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInitialNews();
  }, []);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      setError(null);

      if (cache[keyword]) {
        setNews(cache[keyword]);
        setNewsCon(cache[keyword]);
        setLoading(false);
        return;
      }

      try {
        const url = `https://newsdata.io/api/1/latest?apikey=${apiKey}&q=${keyword}`;
        const response = await fetch(url);
        const data = await response.json();

        if (Array.isArray(data.results)) {
          setNews(data.results);
          setNewsCon(data.results);
          setCache((prevCache) => ({ ...prevCache, [keyword]: data.results }));
        } else {
          setError("Unexpected response format");
        }
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    if (keyword) {
      fetchNews();
    }
  }, [keyword, cache]);

  const totalPages = Math.ceil(news.length / itemsPerPage);

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const startIdx = (currentPage - 1) * itemsPerPage;
  const currentNews = news.slice(startIdx, startIdx + itemsPerPage);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <>
      <div className="flex justify-center mb-4">
        <div className="bg-gray-100 w-[100%] extralarge:w-[90%] flex justify-center pt-4">
          <div className="grid grid-cols-1 md:grid-cols-3 extralarge:grid-cols-4 gap-x-2 lg:gap-x-6 gap-y-6 px-2 lg:px-4 py-4">
            {currentNews.map((item, idx) => (
              <span key={idx} className="">
                <Card news={item} />
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center space-x-4 text-white">
        <button
          onClick={handlePrev}
          disabled={currentPage === 1}
          className="px-4 py-2 bg-gray-400 disabled:bg-gray-200 rounded-md"
        >
          Prev
        </button>
        <button
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="px-4 py-2 bg-gray-400 disabled:bg-gray-200 rounded-md"
        >
          Next
        </button>
      </div>
    </>
  );
};
