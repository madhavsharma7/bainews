import React, { useEffect, useState } from "react";
import "./Home.css";
import homeImg from "../../icon/house.webp";
import app from "../../icon/link.png";
import android from "../../icon/android.webp";
import ios from "../../icon/ios.webp";
const Nav = () => {
    const [categories, setCategories] = useState([]); // Categories state
    const [error, setError] = useState(null);
    const [trendingNews, setTrendingNews] = useState([]);

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
                console.log(data);

                // Correctly access the trending array
                if (data.data && Array.isArray(data.data.trending)) {
                    setTrendingNews(data.data.trending);
                } else {
                    setTrendingNews([]);
                    console.error("API response does not contain the expected trending news array.");
                }
            } catch (error) {
                setError(error.message);
                console.error("Error fetching trending news:", error);
            }
        };

        fetchTrendingNews();
    }, []);

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
                        <a href="Niti" className="right-link">
                            गोपनीयता नीति
                        </a>
                        <span className="separator"> | </span>
                        <a href="#" className="right-link">
                            नियम एवं शर्तें
                        </a>
                    </div>
                </div>
            </div>

            <div id="main-body">
                <div >
                    <h3>Trending News</h3>
                    {error && <p>Error: {error}</p>}
                    {trendingNews.length > 0 ? (
                        trendingNews.map((newsItem, index) => (
                            <div className="card">
                                <div className="card-image-box">
                                    <a href={newsItem.url} target="_blank" rel="noopener noreferrer"><img src={`https://storage.googleapis.com/media.dev.baisahab.com/${newsItem.image.url}`} /></a>
                                </div>
                                <div className="card-title">
                                    <a href={newsItem.url} ><h1 className="cart-title">{newsItem.title}</h1></a>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p>No trending news available.</p>
                    )}
                </div>
            </div>

            <div className="linkphoto">
                <img class="photo" src={app} />
                <a href="https://play.google.com/store/apps/details?id=com.news.baisahab" target="_blank">  <img className="android" src={android} /> </a>
                <a href="#"><img className="ios" src={ios} /></a>
            </div>
        </div>
    );
};

export default Nav;
