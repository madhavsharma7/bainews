import React, { use, useEffect, useState } from "react";
import "./bhilai.css";
import "./Media.css";
import homeImg from "../../icon/house.webp";
import app from "../../icon/link.png";
import android from "../../icon/android.webp";
import ios from "../../icon/ios.webp";
import newsicon from "../../icon/icon news.webp";
import Cric from "../../icon/politcs.webp";
import Bolly from "../../icon/bolly.webp";
import poli from "../../icon/politcs.webp";
import spor from "../../icon/khel.webp";
import inter from "../../icon/international.webp";
const Nav = () => {

  const [cricketArticles, setCricketArticles] = useState([]);
  const [bollywoodArticles, setBollywoodArticles] = useState([]);
  const [politicsarticles, setPolitics] = useState([]);
  const [internationalArticles, setInternationalArticles] = useState([]);
  const [sportsarticles, setSports] = useState([]);

  const [categories, setCategories] = useState([]);
  const [trendingNews, setTrendingNews] = useState([]);
  const [articles, setArticles] = useState([]);
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);


  // Fetch categories
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://article.api.dev.baisahab.com/api/category-list?iParentCategoryId=671f8090784ed66097a5a93d"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.data && Array.isArray(data.data.categories)) {
          setCategories(data.data.categories);
        } else {
          setCategories([]);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCategories();
  }, []);

  // Fetch trending news
  useEffect(() => {
    const fetchTrendingNews = async () => {
      try {
        const response = await fetch(
          "https://article.api.dev.baisahab.com/api/trending-news"
        );

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        if (data.data && Array.isArray(data.data.trending)) {
          setTrendingNews(data.data.trending);
        } else {
          setTrendingNews([]);
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchTrendingNews();
  }, []);

  // Fetch news data
  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://article.api.dev.baisahab.com/api/homePageWeb?iSimpleCategoryId=6721db02bd158caa6b7a2516",
        {
          method: "GET",
          headers: { "client-origin": "BaiSahab" },
        }
      );

      if (response.ok) {
        const responseData = await response.json();
        setData(responseData.data.latestNews.articles);

        setLoading(false);
      } else {
        const errorData = await response.json();
        setError(errorData.messages || "Failed to fetch data");
        setLoading(false);
      }
    } catch (err) {
      setError("Something went wrong");
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Fetch cricket articles
  // useEffect(() => {
  //   const fetchCricketArticles = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://article.api.dev.baisahab.com/api/getTagArticlesById?slug=tag%2Fcricket",
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //             "client-origin": "BaiSahab",
  //           },
  //         }
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         setCricketArticles(data.articles || []);
  //       } else {
  //         const errorData = await response.json();
  //         setError(errorData.messages || "Failed to fetch data");
  //       }
  //     } catch (err) {
  //       setError("Something went wrong while fetching data");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchCricketArticles();
  // }, []);

  // Fetch bollywood articles
  // useEffect(() => {
  //   const fetchBollywoodArticles = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://article.api.dev.baisahab.com/api/getTagArticlesById?slug=tag%2Fbollywood",
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //             "client-origin": "BaiSahab",
  //           },
  //         }
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         setBollywoodArticles(data.articles || []);
  //       } else {
  //         const errorData = await response.json();
  //         setError(errorData.messages || "Failed to fetch data");
  //       }
  //     } catch (err) {
  //       setError("Something went wrong while fetching Bollywood articles");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   fetchBollywoodArticles();
  // }, []);

  // Fetch politics articles

  useEffect(() => {
    const politcs = async () => {
      try {
        const response = await fetch(
          "https://article.api.dev.baisahab.com/api/getTagArticlesById?slug=tag%2Fpolitics",
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
              "client-origin": "BaiSahab",
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setPolitics(data.articles || []);
        } else {
          const errorData = await response.json();
          setError(errorData.messages || "Failed to fetch data");
        }
      } catch (err) {
        setError("Something went wrong while fetching data");
      } finally {
        setLoading(false);
      }
    };

    politcs();
  }, []);

  // fetch international news
  // useEffect(() => {
  //   const Internationalnews = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://article.api.dev.baisahab.com/api/getTagArticlesById?slug=tag%2Finternational",
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //             "client-origin": "BaiSahab",
  //           },
  //         }
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         setInternationalArticles(data.articles || []);
  //       } else {
  //         const errorData = await response.json();
  //         setError(errorData.messages || "Failed to fetch data");
  //       }
  //     } catch (err) {
  //       setError("Something went wrong while fetching data");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   Internationalnews();
  // }, []);

  // //fetch sports
  // useEffect(() => {
  //   const sportsNews = async () => {
  //     try {
  //       const response = await fetch(
  //         "https://article.api.dev.baisahab.com/api/getTagArticlesById?slug=tag%2Fsports",
  //         {
  //           method: "GET",
  //           headers: {
  //             "Content-Type": "application/json",
  //             "client-origin": "BaiSahab",
  //           },
  //         }
  //       );

  //       if (response.ok) {
  //         const data = await response.json();
  //         setSports(data.articles || []);
  //       } else {
  //         const errorData = await response.json();
  //         setError(errorData.messages || "Failed to fetch data");
  //       }
  //     } catch (err) {
  //       setError("Something went wrong while fetching data");
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   sportsNews();
  // }, []);


  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div id="main">
      {/* Navbar Background */}
      <div className="Container">
        <div className="navbar">
          {/* Logo Section */}
          <div className="logo">
            <img
              src="https://baisahab.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.79083e93.png&w=256&q=75"
              alt="Logo"
            />
          </div>

          {/* Categories Section */}

          <div className="categories">
            {error ? (
              <p className="error-message">Error: {error}</p>
            ) : (
              <ul className="navbar-menu">
                <a href="होम" className="home">
                  <img className="homeicon" src={homeImg} />
                  <p className="hometext">होम</p>
                </a>
                <li key="6721db546ab618a2a465961d" className="navbar-item">
                  <span className="category-icon">
                    <img src="https://baisahab.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdurg.7316a2a4.png&w=32&q=75" />
                  </span>
                  <a href={`दुर्ग`} className="navbar-link">
                    दुर्ग
                  </a>
                </li>

                <li key="6721db546ab618a2a465961d" className="navbar-item">
                  <span className="category-icon">
                    <img src="https://baisahab.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbhilai.79ee4325.png&w=32&q=75" />
                  </span>
                  <a href={`भिलाई`} className="navbar-link">
                    भिलाई
                  </a>
                </li>

                <li key="6721db546ab618a2a465961d" className="navbar-item">
                  <span className="category-icon">
                    <img src="https://baisahab.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fraipur.2c2fca26.png&w=32&q=75" />
                  </span>
                  <a href={`रायपुर`} className="navbar-link">
                    रायपुर
                  </a>
                </li>
              </ul>
            )}
          </div>

          {/* Right Section Links */}
          <div className="right-section">
            <nav>
              <a to="/niti" className="right-link">
                गोपनीयता नीति
              </a>
              <span className="separator"> | </span>
              <a className="right-link">नियम एवं शर्तें</a>
            </nav>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div id="main-body">
        {/* Trending News */}
        <div id="trending-news-container">
          <h3>Trending News</h3>
          {trendingNews.length > 0 ? (
            trendingNews.map((newsItem, index) => (
              <div className="card" key={newsItem.id || index}>
                <div className="card-image-box">
                  <a
                    href={newsItem.url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={`https://storage.googleapis.com/media.dev.baisahab.com/${newsItem.image.url}`}
                      alt={newsItem.title}
                    />
                  </a>
                </div>
                <div className="card-body">
                  <a href={newsItem.url}>
                    <h1 className="card-title">{newsItem.title}</h1>
                  </a>
                </div>
              </div>
            ))
          ) : (
            <p>No trending news available.</p>
          )}
          <div className="linkphoto">
            <img className="photo" src={app} alt="App" />
            <a
              href="https://play.google.com/store/apps/details?id=com.news.baisahab"
              target="_blank"
            >
              <img className="android" src={android} alt="Android App" />
            </a>
            <a href="#">
              <img className="ios" src={ios} alt="iOS App" />
            </a>
          </div>
        </div>

        {/* Articles */}
        <div id="arti-container">
          <div className="titlleicon">
            <img src={newsicon} alt="News Icon" />
            <h4 className="sec-title">ताज़ा खबर</h4>
          </div>

          {data.map((article) => (
            <div key={article.articleId} className="arti">
              <div className="arti-image-container">
                {article.image?.url && (
                  <img
                    src={`https://storage.googleapis.com/media.dev.baisahab.com/${article.image.url}`}
                    alt={article.title || "Image"}
                    className="arti-image"
                  />
                )}
              </div>
              <div className="arti-body">
                <h3 className="arti-title">{article.title}</h3>
                <p className="arti-date">
                  {article.publishedDate
                    ? new Date(article.publishedDate * 1000).toDateString()
                    : "Date not available"}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cricket Section */}
      <div id="cric-articles-container">
        <div className="cric-titleicon">
          <img src={Cric} alt="Cricket Icon" />
          <h4 className="cric-section-title">क्रिकेट</h4>
        </div>
        {cricketArticles.length > 0 ? (
          cricketArticles.map((article, index) => (
            <div
              key={`cricket-${article.articleId || index}`}
              className="cric-article"
            >
              <div className="cric-article-image-container">
                {article.image?.url ? (
                  <img
                    src={`https://storage.googleapis.com/media.dev.baisahab.com/${article.image.url}`}
                    alt={article.title || "Cricket article image"}
                    className="cric-article-image"
                  />
                ) : (
                  <img
                    src="/path-to-placeholder-image.jpg"
                    alt="Placeholder"
                    className="cric-article-image"
                  />
                )}
              </div>
              <div className="cric-article-body">
                <h3 className="cric-article-title">{article.title}</h3>
                <p className="cric-article-date">
                  {article.publishedDate
                    ? new Date(article.publishedDate * 1000).toDateString()
                    : "Date not available"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No cricket articles available.</p>
        )}
      </div>

      {/* Bollywood Section */}
      <div id="boll-articles-container">
        <div className="boll-titleicon">
          <img src={Bolly} alt="Bollywood Icon" />
          <h4 className="boll-section-title">बॉलीवुड</h4>
        </div>
        {bollywoodArticles.length > 0 ? (
          bollywoodArticles.map((article, index) => (
            <div
              key={`bollywood-${article.articleId || index}`}
              className="boll-article"
            >
              <div className="boll-article-image-container">
                {article.image?.url ? (
                  <img
                    src={`https://storage.googleapis.com/media.dev.baisahab.com/${article.image.url}`}
                    alt={article.title || "Bollywood article image"}
                    className="boll-article-image"
                  />
                ) : (
                  <img
                    src="/path-to-placeholder-image.jpg"
                    alt="Placeholder"
                    className="boll-article-image"
                  />
                )}
              </div>
              <div className="boll-article-body">
                <h3 className="boll-article-title">{article.title}</h3>
                <p className="boll-article-date">
                  {article.publishedDate
                    ? new Date(article.publishedDate * 1000).toDateString()
                    : "Date not available"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No Bollywood articles available.</p>
        )}
      </div>

      {/* Politics Section */}

      <div id="poli-articles-container">
        <div className="poli-titleicon">
          <img src={poli} alt="Politics Icon" />
          <h4 className="poli-section-title">राजनीति</h4>
        </div>
        {politicsarticles.length > 0 ? (
          politicsarticles.map((article, index) => (
            <div
              key={`politics-${article.articleId || index}`}
              className="poli-article"
            >
              <div className="poli-article-image-container">
                {article.image?.url ? (
                  <img
                    src={`https://storage.googleapis.com/media.dev.baisahab.com/${article.image.url}`}
                    alt={article.title || "Politics article image"}
                    className="poli-article-image"
                  />
                ) : (
                  <img
                    src="/path-to-placeholder-image.jpg"
                    alt="Placeholder"
                    className="poli-article-image"
                  />
                )}
              </div>
              <div className="poli-article-body">
                <h3 className="poli-article-title">{article.title}</h3>
                <p className="poli-article-date">
                  {article.publishedDate
                    ? new Date(article.publishedDate * 1000).toDateString()
                    : "Date not available"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No politics articles available.</p>
        )}
      </div>

      {/* sports Section */}
      {/* <div id="spor-articles-container">
        <div className="spor-titleicon">
          <img src={spor} alt="Sports Icon" />
          <h4 className="spor-section-title"> खेल </h4>
        </div>
        {sportsarticles.length > 0 ? (
          sportsarticles.map((article, index) => (
            <div
              key={`sports-${article.articleId || index}`}
              className="spor-article"
            >
              <div className="spor-article-image-container">
                {article.image?.url ? (
                  <img
                    src={`https://storage.googleapis.com/media.dev.baisahab.com/${article.image.url}`}
                    alt={article.title || "sports article image"}
                    className="spor-article-image"
                  />
                ) : (
                  <img
                    src="/path-to-placeholder-image.jpg"
                    alt="Placeholder"
                    className="spor-article-image"
                  />
                )}
              </div>
              <div className="spor-article-body">
                <h3 className="spor-article-title">{article.title}</h3>
                <p className="spor-article-date">
                  {article.publishedDate
                    ? new Date(article.publishedDate * 1000).toDateString()
                    : "Date not available"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No education articles available.</p>
        )}
      </div> */}

      {/* international Section */}

      <div id="inter-articles-container">
        <div className="intern-titleicon">
          <img src={inter} alt="Politics Icon" />
          <h4 className="inter-section-title"> अंतरराष्ट्रीय </h4>
        </div>
        {internationalArticles.length > 0 ? (
          internationalArticles.map((article, index) => (
            <div
              key={`intern-${article.articleId || index}`}
              className="intern-article"
            >
              <div className="inter-article-image-container">
                {article.image?.url ? (
                  <img
                    src={`https://storage.googleapis.com/media.dev.baisahab.com/${article.image.url}`}
                    alt={article.title || "education article image"}
                    className="inter-article-image"
                  />
                ) : (
                  <img
                    src="/path-to-placeholder-image.jpg"
                    alt="Placeholder"
                    className="inter-article-image"
                  />
                )}
              </div>
              <div className="inter-article-body">
                <h3 className="inter-article-title">{article.title}</h3>
                <p className="inter-article-date">
                  {article.publishedDate
                    ? new Date(article.publishedDate * 1000).toDateString()
                    : "Date not available"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p>No education articles available.</p>
        )}
      </div>

      {/* Footer */}
      <div id="footer">

        <div class="footer-content">
          <div className="footer-logo">
            <img
              src="https://baisahab.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.79083e93.png&w=256&q=75"
              alt="Logo"
            />
          </div>
        </div>

        <div className="right-section-footer">
          <div className="grid-container">
            <a className="right-link-footer">
              गोपनीयता नीति
            </a>
            <p> हमसे संपर्क करे </p>
            <a className="right-link-footer">
              नियम एवं शर्तें
            </a>
            <p className="email"> support@baisahab.com </p>
          </div>

          <p className="application-link"> ऐप डाउनलोड करें </p>

        </div>

        <div className="link">
          <img className="android" src={android} alt="Android App" />

          <img className="ios" src={ios} alt="iOS App" />
        </div>

        <hr></hr>

        <p className="copyright">2024 Light Speed International Consulting L.L.C-FZ All rights reserved BAISAHAB</p>

      </div>
      <div id="bottom-navbar">
        <div id="navbar-second">
          <div className="categories-second">
            {error ? (
              <p className="error-message-second">Error: {error}</p>
            ) : (
              <ul className="navbar-menu-second">
                <a href="होम" className="home-second">
                  <img className="homeicon-second" src={homeImg} />
                  <p className="hometext-second">होम</p>
                </a>
                <li key="6721db546ab618a2a465961d" className="navbar-item-second">
                  <span className="category-icon-second">
                    <img src="https://baisahab.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdurg.7316a2a4.png&w=32&q=75" />
                  </span>
                  <a href={`दुर्ग`} className="navbar-link-second">
                    दुर्ग
                  </a>
                </li>

                <li key="6721db546ab618a2a465961d" className="navbar-item-second">
                  <span className="category-icon-second">
                    <img src="https://baisahab.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbhilai.79ee4325.png&w=32&q=75" />
                  </span>
                  <a href={`भिलाई`} className="navbar-link-second">
                    भिलाई
                  </a>
                </li>

                <li key="6721db546ab618a2a465961d" className="navbar-link-second">
                  <span className="category-icon-second">
                    <img src="https://baisahab.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fraipur.2c2fca26.png&w=32&q=75" />
                  </span>
                  <a href={`रायपुर`} className="navbar-link-second">
                    रायपुर
                  </a>
                </li>

              </ul>
            )}
          </div>
        </div>
      </div>
    </div>

  );
};

export default Nav;