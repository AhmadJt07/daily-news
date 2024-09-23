import { useEffect, useState } from 'react';
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types';
import InfiniteScroll from 'react-infinite-scroll-component';

const News = (props) => {
  const [data, setData] = useState([]);
  const [totalResults, setTotalResults] = useState(0);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);

  const capitalizedFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };
  document.title = `${capitalizedFirstLetter(props.category)} - Daily News`;

  // const updateNews = async () => {
  //   const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f072e6c2426241dfa4b8f9a5f2eff0da&page=${page}&pagesize=${props.pagesize}`;
  //   setLoading(true);
  //   let response = await fetch(url);
  //   let result = await response.json();
  //   setLoading(false);
  //   setData(result.articles);
  //   setTotalResults(result.totalResults);
  // };

  useEffect(() => {
    const updateNews = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=f072e6c2426241dfa4b8f9a5f2eff0da&page=${page}&pagesize=${props.pagesize}`;
      setLoading(true);
      let response = await fetch(url);
      let result = await response.json();
      setLoading(false);
      setData(result.articles);
      setTotalResults(result.totalResults);
    };
    updateNews();
  }, []);

  // const handleNextClick = () => {
  //   updateNews();
  //   setPage(page + 1);
  // };
  // const handlePrevClick = () => {
  //   setPage(page - 1);
  //   updateNews();
  // };
  const fetchMoreData = async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${
      props.country
    }&category=${props.category}&apiKey=f072e6c2426241dfa4b8f9a5f2eff0da&page=${
      page + 1
    }&pagesize=${props.pagesize}`;
    setPage(page + 1);
    setLoading(true);
    let response = await fetch(url);
    let result = await response.json();
    setData(data.concat(result.articles));
    // setData(result.articles.concat(result.articles));
    setTotalResults(result.totalResults);
    setLoading(false);
  };

  return (
    <>
      <h1 className="text-center" style={{ marginTop: '80px' }}>
        Daily News - Top {capitalizedFirstLetter(props.category)} Headlines.
      </h1>

      {loading && <Spinner />}
      <div>
        <InfiniteScroll
          style={{ overflow: 'hidden' }}
          dataLength={data.length || 0}
          next={fetchMoreData}
          hasMore={data.length !== totalResults}
          loader={<Spinner />}
        >
          <div className="container my-3">
            <div className="row ">
              {data.map((element) => (
                <div className="col-md-4 my-3" key={element.url}>
                  {/* key={element.url} <= This is the key to make the news item unique and it placed in above div col-md-4*/}
                  <NewsItem
                    title={element.title}
                    description={element.description}
                    imageUrl={element.urlToImage}
                    newsUrl={element.url}
                    author={element.author}
                    date={element.publishedAt}
                    source={element.source.name}
                  />
                </div>
              ))}
            </div>
          </div>
        </InfiniteScroll>
      </div>
      {/* <div className="container d-flex justify-content-between my-4">
        <button
          type="button"
          disabled={page <= 1}
          className="btn btn-primary mx-2 my-2"
          onClick={handlePrevClick}
        >
          &larr; Previous
        </button>

        <button
          type="button"
          className="btn btn-primary mx-2 my-2"
          onClick={handleNextClick}
          disabled={page > Math.ceil(totalResults / props.pagesize)}
        >
          Next &rarr;
        </button>
      </div> */}
    </>
  );
};

News.prototype = {
  country: PropTypes.string,
  pagesize: PropTypes.number,
  category: PropTypes.string,
};
News.prototype = {
  default: { country: 'in', pagesize: 9, category: 'general' },
};

export default News;
