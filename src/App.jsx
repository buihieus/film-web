import { useEffect } from "react";
import Banner from "./components/banner";
import Header from "./components/header";
import Footer from "./components/footer";

import { useState } from "react";

import { MovieProvider } from "./context/MovieDetailContext";
import MovieSearch from "./components/movieSearch";
import MovieList from "./components/movielist";

function App() {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);

  const [searchData, setSearchData] = useState([]);

  const handleSearch = async (value) => {
    const url = `https://api.themoviedb.org/3/search/movie?query=${value}&include_adult=false&language=vi&page=1`;
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
      },
    };
    if (value === "") return setSearchData([]);
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setSearchData(data.results);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    (async function () {
      const urls = [
        "https://api.themoviedb.org/3/trending/movie/day?language=vi",
        "https://api.themoviedb.org/3/movie/top_rated?language=vi",
        // Add more URLs here...
      ];
      const options = {
        method: "GET",
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${import.meta.env.VITE_API_KEY}`,
        },
      };
      const fetchMovies = async (url) => {
        return await fetch(url, options).then((response) => response.json());
      };

      try {
        const response = await Promise.all(urls.map(fetchMovies));

        setTrendingMovies(response[0].results);
        setTopRatedMovies(response[1].results);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);
  // [] khi load trang no chay dung 1 lan
  return (
    <>
      <MovieProvider>
        <div className="h-full bg-black text-white min-h-screen relative">
          <Header onSearch={handleSearch} />
          <Banner />
          {searchData.length === 0 && (
            <MovieList title="Phim Hot" data={trendingMovies.slice(0, 8)} />
          )}
          {searchData.length === 0 && (
            <MovieList title="Phim đề cử" data={topRatedMovies.slice(0, 8)} />
          )}

          {searchData.length > 0 && <MovieSearch data={searchData} />}
          <Footer />
        </div>
      </MovieProvider>
    </>
  );
}

export default App;