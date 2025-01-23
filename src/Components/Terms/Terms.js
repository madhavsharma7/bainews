import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./Term.css";
import "./Media.css"
import home from "../../icon/house.webp";
import app from "../../icon/link.png";
import android from "../../icon/android.webp";
import ios from "../../icon/ios.webp";
// import newsicon from "../../icon/icon news.webp";
// import Cric from "../Components/icon/politcs.webp";
// import Bolly from "../Components/icon/bolly.webp"


const Nav = () => {
  const [categories, setCategories] = useState([]);
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
          setCategories([]); // Fallback if categories are not available
        }
      } catch (error) {
        setError(error.message);
      }
    };

    fetchCategories();
  }, []);

  return (
  
      <div id="mai">
        {/* Navbar Section */}
        <div className="Cont">
          <div className="nav">
            {/* Logo Section */}
            <div className="log">
              <img
                src="https://baisahab.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.79083e93.png&w=256&q=75"
                alt="Logo"
              />
            </div>

            {/* Categories Section */}
            <div className="cate">
              {error ? (
                <p className="error-message">Error: {error}</p>
              ) : (
                <ul className="nav-menu">
                  <a href="होम" className="house">
                    <img className="houseicon" src={home} alt="Home" />
                    <p className="housetext">होम</p>
                  </a>
                  <li className="nav-item">
                    <span className="cate-icon">
                      <img
                        src="https://baisahab.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdurg.7316a2a4.png&w=32&q=75"
                        alt="Category Icon"
                      />
                    </span>
                    <a href="दुर्ग" className="nav-link">
                      दुर्ग
                    </a>
                  </li>

                  <li className="nav-item">
                    <span className="cate-icon">
                      <img
                        src="https://baisahab.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbhilai.79ee4325.png&w=32&q=75"
                        alt="Category Icon"
                      />
                    </span>
                    <a href="भिलाई" className="nav-link">
                      भिलाई
                    </a>
                  </li>

                  <li className="nav-item">
                    <span className="cate-icon">
                      <img
                        src="https://baisahab.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fraipur.2c2fca26.png&w=32&q=75"
                        alt="Category Icon"
                      />
                    </span>
                    <a href="रायपुर" className="nav-link">
                      रायपुर
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {/* Right Section Links */}
            <div className="rig-section">
              <nav>
                <a className="rig-link">
                  गोपनीयता नीति
                </a>
                <span className="separator"> | </span>
                <a className="rig-link">
                  नियम एवं शर्तें
                </a>
              </nav>
            </div>
          </div>
        </div>

        {/* Content Section */}

        <div className="con">
          <h1>बाईसाहब के लिए नियम एवं शर्तें</h1>
          <p>बाईसाहब में आपका स्वागत है! हमारी वेबसाइट का उपयोग या उस तक पहुँच कर, आप निम्नलिखित नियमों और शर्तों का पालन करने और उनसे <br></br> बंधे रहने के लिए सहमत होते हैं। कृपया इस साइट का उपयोग करने से पहले इन शर्तों को ध्यानपूर्वक पढ़ें। यदि आप इनमें से किसी भी शर्त <br></br> से असहमत हैं, तो कृपया हमारी वेबसाइट का उपयोग करने से बचें।</p>

          <h2>1. नियमों की स्वीकृति</h2>
          <p>आपकी बाईसाहब तक पहुंच और उसका उपयोग विशेष रूप से इन नियमों और शर्तों के अधीन है। हम बिना किसी पूर्व सूचना के इन शर्तों <br></br> को अपडेट करने का अधिकार सुरक्षित रखते हैं। किसी भी परिवर्तन के बाद वेबसाइट का निरंतर उपयोग करना आपके द्वारा नई शर्तों की <br></br>स्वीकृति को दर्शाता है।</p>

          <h2>2. सामग्री की सटीकता</h2>
          <p>बाईसाहब विश्वसनीय स्रोतों पर आधारित समाचार लेख और जानकारी प्रदान करता है। हालांकि, हम किसी भी प्रकार की, स्पष्ट या अप्रत्यक्ष, <br></br>किसी भी सामग्री की सटीकता, पूर्णता या विश्वसनीयता के बारे में कोई भी प्रतिनिधित्व या गारंटी नहीं देते हैं। प्रदान की गई जानकारी केवल <br></br> सामान्य सूचना उद्देश्यों के लिए है, और हम पाठकों को स्वतंत्र रूप से जानकारी की सत्यता की पुष्टि करने की सलाह देते हैं।</p>

          <h2>3. बौद्धिक संपदा</h2>
          <p>इस वेबसाइट पर सभी सामग्री, जिसमें पाठ, ग्राफिक्स, लोगो और अन्य सामग्री शामिल हैं, बाईसाहब या इसके सामग्री आपूर्तिकर्ताओं की <br></br>संपत्ति है। इस वेबसाइट पर किसी भी सामग्री की बिना अनुमति के पुनरुत्पादन या वितरण मना है, जब तक कि स्पष्ट रूप से लिखित<br></br> रूप में अनुमति न दी गई हो।</p>

          <h2>4. उपयोगकर्ता आचार</h2>
          <p>आप सहमत हैं कि बाईसाहब का उपयोग जिम्मेदारी से करेंगे और ऐसी किसी भी गतिविधि में संलिप्त नहीं होंगे जो वेबसाइट की कार्यक्षमता <br></br>को हानि पहुंचा सकती है या उसे प्रभावित कर सकती है। विशेष रूप से, आप सहमत हैं कि आप:</p>
          <ul>
            <li>वेबसाइट का उपयोग अवैध उद्देश्यों के लिए नहीं करेंगे।</li>
            <li>कोई भी आपत्तिजनक या हानिप्रद सामग्री पोस्ट नहीं करेंगे।</li>
            <li>वेबसाइट या उसके सिस्टम के किसी भी हिस्से तक अवैध रूप से पहुँच प्राप्त करने का प्रयास नहीं करेंगे।</li>
          </ul>

          <h2>5. अन्य वेबसाइटों के लिंक</h2>
          <p>हमारी वेबसाइट में तृतीय पक्ष वेबसाइटों के लिंक हो सकते हैं। ये लिंक आपकी सुविधा के लिए प्रदान किए गए हैं, और बाईसाहब को इन <br></br> साइटों की सामग्री पर कोई नियंत्रण नहीं है। हम इन बाहरी साइटों पर जाने से उत्पन्न किसी भी प्रकार के नुकसान या हानि के लिए जिम्मेदार <br></br>नहीं हैं।</p>

          <h2>6. जिम्मेदारी की सीमा</h2>
          <p>बाईसाहब आपकी इस वेबसाइट तक पहुँच या उसका उपयोग करने से उत्पन्न किसी भी प्रत्यक्ष, अप्रत्यक्ष, आकस्मिक, परिणामी, या दंडात्मक <br></br> हानि के लिए जिम्मेदार नहीं है। इसमें गलतियाँ, चूक, रुकावटें, फाइलों का हटना, वायरस, देरी, या अन्य त्रुटियों से उत्पन्न होने वाली हानियाँ  <br></br>शामिल हैं।</p>

          <h2>7. गोपनीयता</h2>
          <p>हम आपकी गोपनीयता का सम्मान करते हैं। कृपया हमारी गोपनीयता नीति को देखें, जिसमें जानकारी दी गई है कि हम आपके व्यक्तिगत डेटा <br></br> को कैसे एकत्रित, उपयोग और सुरक्षा करते हैं।</p>

          <h2>8. वेबसाइट में परिवर्तन</h2>
          <p>हम किसी भी समय बिना सूचना के वेबसाइट के किसी भी पहलू, जिसमें सामग्री और सुविधाएँ शामिल हैं, को संशोधित या समाप्त करने का अधिकार <br></br>सुरक्षित रखते हैं।</p>

          <h2>9. प्रभावी कानून</h2>
          <p>इन नियमों और शर्तों पर भारत के कानूनों का पालन होगा। आपकी वेबसाइट के उपयोग से उत्पन्न होने वाले किसी भी विवाद का निपटारा [आपके क्षेत्राधिकार]  <br></br>के न्यायालयों की विशेष अधिकारिता के अधीन होगा।</p>

          <h2>10. संपर्क करें</h2>
          <p className="sup">यदि आपको इन नियमों और शर्तों के बारे में कोई प्रश्न हो, तो कृपया हमसे support@baisahab.com पर संपर्क करें।</p>
        </div>

        <div id="foot">
          <div class="foot-content">
            <div className="foot-logo">
              <img
                src="https://baisahab.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Flogo.79083e93.png&w=256&q=75"
                alt="Logo"
              />
            </div>
          </div>
          <div className="rig-section-footer">
            <div className="grid-cont">
              <a className="rig-link-footer">
                गोपनीयता नीति
              </a>
              <p> हमसे संपर्क करे </p>
              <a className="rig-link-footer">
                नियम एवं शर्तें
              </a>
              <p className="mail"> support@baisahab.com </p>
            </div>

            <p className="app-link"> ऐप डाउनलोड करें </p>
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
                    <img className="homeicon-second" src={home} />
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
}

export default Nav;
