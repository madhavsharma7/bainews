import React, { useEffect, useState } from "react";
import "./Home.css";
import homeImg from "../../icon/house.webp";

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
                                <a href="#" className="home">
                                    <img className="homeicon" src={homeImg} />
                                    <p className="hometext">होम</p>
                                </a>

                                {categories.map((category) => (
                                    <li key={category._id} className="navbar-item">
                                        <span className="category-icon">
                                            {/* Placeholder for category image */}
                                        </span>
                                        <a href={`#${category.slug}`} className="navbar-link">
                                            {category.name}
                                        </a>
                                    </li>
                                ))}
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

            <div>
            <h1>Trending News</h1>
            {error && <p>Error: {error}</p>}
            <ul>
                {trendingNews.length > 0 ? (
                    trendingNews.map((newsItem, index) => (
                        <li key={index}>
                            <a href={newsItem.url} target="_blank" rel="noopener noreferrer">
                                {newsItem.title}
                            </a>
                        </li>
                    ))
                ) : (
                    <p>No trending news available.</p>
                )}
            </ul>
        </div>
 


        </div>
    );
};

export default Nav;
