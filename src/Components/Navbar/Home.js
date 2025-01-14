import React, { useEffect, useState } from "react";
import "./Home.css";
import homeImg from "../../icon/house.webp";
import app from "../../icon/link.png";
import android from "../../icon/android.webp";
import ios from "../../icon/ios.webp";
import newsicon from "../../icon/icon news.webp";
import Niti from "../../Links/Niti";
import Cric from "../../icon/cricket.webp";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";

const Nav = () => {
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
                // console.log(data); // Debug API response

                // Ensure the response contains an array of categories
                if (data.data && Array.isArray(data.data.categories)) {
                    setCategories(data.data.categories);
                } else {
                    setCategories([]); // Fallback in case categories are not available
                    // console.error("API response does not contain categories array.");
                }
            } catch (error) {
                setError(error.message);
                // console.error("Error fetching categories:", error);
            }
        };

        fetchCategories();
    }, []);

    //   Fetching trending news 

    useEffect(() => {
        const fetchTrendingNews = async () => {
            try {
                const response = await fetch("https://article.api.dev.baisahab.com/api/trending-news");

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }

                const data = await response.json();

                // Log the entire data to confirm structure
                // console.log(data);

                // Correctly access the trending array
                if (data.data && Array.isArray(data.data.trending)) {
                    setTrendingNews(data.data.trending);
                } else {
                    setTrendingNews([]);
                    // console.error("API response does not contain the expected trending news array.");
                }
            } catch (error) {
                setError(error.message);
                // console.error("Error fetching trending news:", error);
            }
        };

        fetchTrendingNews();
    }, []);

    // fetching News

    const fetchData = async () => {
        try {
            const response = await fetch('https://article.api.dev.baisahab.com/api/homePageWeb', {
                method: 'GET',
                headers: { 'client-origin': 'BaiSahab' },
            });

            if (response.ok) {
                const responseData = await response.json();
                console.log('Fetched Data:', responseData.data.webStories); // Log the data
                setData(responseData.data.webStories);
                setLoading(false);
            } else {
                const errorData = await response.json();
                setError(errorData.messages || 'Failed to fetch data');
                setLoading(false);
            }
        } catch (err) {
            // console.error('Error:', err); // Log the error
            // setError('Something went wrong');
            // setLoading(false);
        }
    };

    fetchData();


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    // Cricket 


    const fetchDatacricket = async () => {
        try {
            const response = await fetch(
                'https://article.api.dev.baisahab.com/api/getTagArticlesById?slug=tag%2Fcricket',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'client-origin': 'BaiSahab',
                    },
                }
            );

            if (response.ok) {
                const data = await response.json();
                setArticles(data.articles || []);
            } else {
                const errorData = await response.json();
                setError(errorData.messages || 'Failed to fetch data');
            }
        } catch (err) {
            setError('Something went wrong while fetching data');
        } finally {
            setLoading(false);
        }
    };

    fetchDatacricket();

    // Bollywood

    const fetchbollywood = async () => {
        try {
            console.log('Fetching data from API...');
            const response = await fetch(
                'https://article.api.dev.baisahab.com/api/getTagArticlesById?slug=tag%2Fbollywood',
                {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'client-origin': 'BaiSahab', // Include headers if required by the API
                    },
                }
            );

            if (response.ok) {
                const data = await response.json();
                console.log('Fetched data:', data);
                setArticles(data.articles || []); // Update state with fetched data
                setLoading(false);
            } else {
                const errorData = await response.json();
                console.error('API error:', response.status, response.statusText);
                console.error('Error details:', errorData);
                setError(errorData.messages || 'Failed to fetch data');
                setLoading(false);
            }
        } catch (err) {
            // console.error('Fetch failed:', err.message);
            // setError('Something went wrong while fetching data');
            // setLoading(false);
        }
    };

    fetchbollywood();

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
                            <Link path="/niti" className="right-link">
                                गोपनीयता नीति
                            </Link>
                            <span className="separator"> | </span>
                            <Link className="right-link">
                                नियम एवं शर्तें
                            </Link>
                        </nav>
                        {/* Routes for navigation */}
                        <Routes>
                            <Route path="/niti" element={<Niti />} />
                            {/* Add more routes as needed */}
                        </Routes>
                    </div>
                </div>
            </div>

            <div id="main-body">
                <div id="trending-news-container">
                    <h3>Trending News</h3>
                    {error && <p>Error: {error}</p>}
                    {trendingNews.length > 0 ? (
                        trendingNews.map((newsItem, index) => (
                            <div className="card">
                                <div className="card-image-box">
                                    <a href={newsItem.url} target="_blank" rel="noopener noreferrer"><img src={`https://storage.googleapis.com/media.dev.baisahab.com/${newsItem.image.url}`} /></a>
                                </div>
                                <div className="card-body">
                                    <a href={newsItem.url} ><h1 className="card-title">{newsItem.title}</h1></a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No trending news available.</p>
                    )}
                    <div className="linkphoto">
                        <img className="photo" src={app} />
                        <a href="https://play.google.com/store/apps/details?id=com.news.baisahab" target="_blank">  <img className="android" src={android} /> </a>
                        <a href="#"><img className="ios" src={ios} /></a>
                    </div>
                </div>

                <div id="articles-container">
                    <div className="titleicon">
                        <img src={newsicon}></img>
                        <h4 className="section-title">ताज़ा खबर</h4>
                    </div>

                    {data.map((article) => (
                        <div key={article.articleId} className="article">

                            <div className="article-image-container">
                                {article.image?.url && (
                                    <img
                                        src={`https://storage.googleapis.com/media.dev.baisahab.com/${article.image.url}`}
                                        alt={article.title || "Image"}
                                        className="article-image"
                                    />
                                )}
                            </div>
                            <div className="article-body">
                                <h3 className="article-title">{article.title}</h3>
                                {/* {article.description && (
                                    <p className="article-description">{article.description}</p>
                                )} */}
                                <p className="article-date">
                                    {article.publishedDate
                                        ? new Date(article.publishedDate * 1000).toDateString()
                                        : "Date not available"}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <div>

                {/* Cricket  */}

                <div id="cricket-articles-container">
                    <div className="cricket-titleicon">
                        <img src={Cric} alt="News Icon" />
                        <h4 className="cricket-section-title"> क्रिकेट </h4>
                    </div>

                    {articles.map((article) => (
                        <div key={article.articleId} className="cricket-article">
                            <div className="cricket-article-image-container">
                                {article.image?.url && (
                                    <img
                                        src={`https://storage.googleapis.com/media.dev.baisahab.com/${article.image.url}`}
                                        alt={article.title || 'Image'}
                                        className="cricket-article-image"
                                    />
                                )}
                            </div>
                            <div className="cricket-article-body">
                                <h3 className="cricket-article-title">{article.title}</h3>
                                <p className="cricket-article-date">
                                    {article.publishedDate
                                        ? new Date(article.publishedDate * 1000).toLocaleDateString('hi-IN', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: 'numeric',
                                        })
                                        : 'Date not available'}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>

            {/* Bollywood  */}
            <div id="bollywood-articles-container">
                <div className="bollywood-titleicon">
                    <img src={Cric} alt="Bollywood Icon" />
                    <h4 className="bollywood-section-title">बॉलीवुड</h4>
                </div>

                {/* Loop through the articles and display each */}
                {articles.map((article) => (
                    <div key={article.articleId} className="bollywood-article">
                        <div className="bollywood-article-image-container">
                            {article.image?.url && (
                                <img
                                    src={`https://storage.googleapis.com/media.dev.baisahab.com/${article.image.url}`}
                                    alt={article.title || "Image"}
                                    className="bollywood-article-image"
                                />
                            )}
                        </div>
                        <div className="bollywood-article-body">
                            <h3 className="bollywood-article-title">{article.title}</h3>
                            <p className="bollywood-article-date">
                                {article.publishedDate
                                    ? new Date(article.publishedDate * 1000).toLocaleDateString("hi-IN", {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })
                                    : "Date not available"}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

        </div>

    );
};

export default Nav;




