import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import "./Niti.css";
import "./Media.css"
import homeImg from "../../icon/house.webp";
import app from "../../icon/link.png";
import android from "../../icon/android.webp";
import ios from "../../icon/ios.webp";
// import newsicon from "../../icon/icon news.webp";
// import Cric from "../../icon/politcs.webp";
// import Bolly from "../../icon/bolly.webp"


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
    <BrowserRouter>
      <div id="main">
        {/* Navbar Section */}
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
                    <img className="homeicon" src={homeImg} alt="Home" />
                    <p className="hometext">होम</p>
                  </a>
                  <li className="navbar-item">
                    <span className="category-icon">
                      <img
                        src="https://baisahab.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fdurg.7316a2a4.png&w=32&q=75"
                        alt="Category Icon"
                      />
                    </span>
                    <a href="दुर्ग" className="navbar-link">
                      दुर्ग
                    </a>
                  </li>

                  <li className="navbar-item">
                    <span className="category-icon">
                      <img
                        src="https://baisahab.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fbhilai.79ee4325.png&w=32&q=75"
                        alt="Category Icon"
                      />
                    </span>
                    <a href="भिलाई" className="navbar-link">
                      भिलाई
                    </a>
                  </li>

                  <li className="navbar-item">
                    <span className="category-icon">
                      <img
                        src="https://baisahab.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fraipur.2c2fca26.png&w=32&q=75"
                        alt="Category Icon"
                      />
                    </span>
                    <a href="रायपुर" className="navbar-link">
                      रायपुर
                    </a>
                  </li>
                </ul>
              )}
            </div>

            {/* Right Section Links */}
            <div className="right-section">
              <nav>
                <Link to="/niti" className="right-link">
                  गोपनीयता नीति
                </Link>
                <span className="separator"> | </span>
                <Link to="/terms" className="right-link">
                  नियम एवं शर्तें
                </Link>
              </nav>
            </div>
          </div>
        </div>

        {/* Content Section */}

        <div className="content">
          <h1>बाईसाहब के लिए गोपनीयता नीति</h1>
          <p>बाईसाहब में, हम अपने उपयोगकर्ताओं की गोपनीयता को महत्व देते हैं। यह गोपनीयता नीति बताती है कि हम आपकी दी गई जानकारी को कैसे<br></br> एकत्रित, उपयोग और सुरक्षा करते हैं जब आप हमारी वेबसाइट का उपयोग करते हैं। बाईसाहब तक पहुँचने या उसका उपयोग करने के द्वारा,<br></br> आप इस नीति में उल्लिखित शर्तों से सहमत होते हैं।</p>
          <h2>1. परिचय</h2>
          <p>लाइट स्पीड इंटरनेशनल कंसल्टिंग L.L.C-FZ [ Light Speed International Consulting L.L.C-FZ ]  ("कंपनी" या “लाइट स्पीड” या "हम")<br></br> आपको सबसे प्रभावी तरीके से सेवा देने के लिए प्रतिबद्ध है। हालांकि, आपको सेवा देते समय, हम आपकी गोपनीयता को सर्वोच्च प्राथमिकता देते<br></br> हैं और इसे पूरी तरह से सुरक्षित और संरक्षित रखते हैं। अपनी प्रतिबद्धता को पूरा करने के लिए, हम यह सुनिश्चित करते हैं कि उपयोगकर्ताओं से<br></br> एकत्र किए गए डेटा और उसके उपयोग से जुड़े प्रक्रियाओं को पारदर्शी रखा जाए और यह भी सुनिश्चित किया जाए कि इसे किसी भी तीसरे पक्ष के<br></br> साथ, हमारी जानकारी या बिना जानकारी के, कभी साझा नहीं किया जाएगा।

            <br></br><br></br>यह गोपनीयता नीति उन सभी उपयोगकर्ताओं पर लागू होगी जो लाइट स्पीड द्वारा विकसित हमारे वेबसाइट(s)/मोबाइल एप्लिकेशन(s) पर आते हैं<br></br> और उनका उपयोग करते हैं। उपयोगकर्ता इस बात से बिना शर्त सहमत हैं कि लाइट स्पीड के वेबसाइट(s)/मोबाइल एप्लिकेशन(s) को ब्राउज़<br></br> करना और/या इसकी सेवाओं का उपयोग करना, इस गोपनीयता नीति और यहां प्रकाशित उपयोग की शर्तों को उनकी बिना शर्त सहमति दर्शाता<br></br> है।<br></br><br></br>

            हम अपने उपयोगकर्ताओं की गोपनीयता का सम्मान करते हैं और इसे हर दृष्टिकोण से सुरक्षित रखने के लिए प्रतिबद्ध हैं। गोपनीयता से संबंधित<br></br> किसी भी विवाद में, यह गोपनीयता नीति और लाइट स्पीड के वेबसाइट(s)/मोबाइल एप्लिकेशन(s) पर प्रकाशित 'उपयोग की शर्तों' के साथ पढ़ा<br></br> जाएगा। वेबसाइट(s)/मोबाइल एप्लिकेशन(s) को एक्सेस और/या उपयोग करके, उपयोगकर्ता इस गोपनीयता नीति को स्वीकार करने के लिए <br></br>सहमति प्रकट करते हैं। यदि आप गोपनीयता नीति के किसी भी या सभी शर्तों से सहमत नहीं हैं, तो कृपया लाइट स्पीड के वेबसाइट(s)/मोबाइल<br></br> एप्लिकेशन(s) का एक्सेस और/या उपयोग न करें।</p>
          <h2>2. हम कौन सी जानकारी एकत्रित करते हैं</h2>
          <p>हम बेहतर उपयोगकर्ता अनुभव प्रदान करने और अपनी सामग्री को सुधारने के लिए जानकारी एकत्रित करते हैं। हम जो जानकारी एकत्रित कर <br></br>सकते हैं, उसमें शामिल हैं:</p>
          <ul className='keypoint'>
            <li><strong>उपयोग डेटा:</strong>आपकी डिवाइस, ब्राउज़र और हमारी साइट के साथ आपकी इंटरएक्शन (जैसे IP पता, ब्राउज़र प्रकार, पृष्ठों पर यात्रा, और<br></br> प्रत्येक पृष्ठ पर समय) के बारे में जानकारी स्वचालित रूप से एकत्रित की जा सकती है।</li>
          </ul>
          <ul className='keypoint1'>
            <li><strong>कुकीज़:</strong>हम आपकी ब्राउज़िंग अनुभव को बेहतर बनाने के लिए कुकीज़ और समान ट्रैकिंग तकनीकों का उपयोग कर सकते हैं। कुकीज़ हमें<br></br> आपकी प्राथमिकताओं को याद रखने और यह समझने में मदद करती हैं कि उपयोगकर्ता हमारी साइट के साथ कैसे इंटरएक्ट करते हैं।</li>
          </ul>
          <h2>3. हम आपकी जानकारी का उपयोग कैसे करते हैं</h2>
          <p>हम एकत्रित की गई जानकारी का उपयोग करते हैं:</p>
          <ul className='keypoint2'>
            <li>हमारी वेबसाइट पर सामग्री और सेवाओं को प्रदान करने और सुधारने के लिए।</li>
            <li>यदि आपने हमारी मेलिंग सूची के लिए सब्सक्राइब किया है तो आपको न्यूज़लेटर और अपडेट भेजने के लिए।</li>
            <li>हमारे उपयोगकर्ता अनुभव और सामग्री को सुधारने के लिए वेबसाइट उपयोग पैटर्न का विश्लेषण करने के लिए।</li>
            <li>आपकी पूछताछ का उत्तर देने और आवश्यकतानुसार आपके साथ संवाद करने के लिए।</li></ul>

          <h2>4. डेटा साझा करना और प्रकटीकरण</h2>
          <p>बाईसाहब आपकी व्यक्तिगत जानकारी को बाहरी पक्षों को बेचता, व्यापार करता या किसी अन्य तरीके से स्थानांतरित नहीं करता है। हालांकि, हम<br></br> निम्नलिखित परिस्थितियों में डेटा साझा कर सकते हैं:</p>
          <ul className='keypoint2'><li><strong>सेवा प्रदाता: </strong>हम तृतीय-पक्ष सेवा प्रदाताओं को अपनी संचालन में सहायता करने के लिए नियोजित कर सकते हैं (जैसे, विश्लेषण, ईमेल<br></br> डिलीवरी)। इन पक्षों को केवल उनकी कार्यों को निष्पादित करने के लिए आवश्यकतानुसार व्यक्तिगत जानकारी तक सीमित पहुंच होती है।
          </li></ul>
          <ul className='keypoint2'><li><strong>कानूनी आवश्यकताएँ:</strong>हम जानकारी का प्रकटीकरण कर सकते हैं यदि कानून द्वारा आवश्यक हो या बाईसाहब या हमारे उपयोगकर्ताओं के<br></br> अधिकारों, सुरक्षा या संपत्ति की रक्षा करने के लिए।</li></ul>
          <h2>5. डेटा सुरक्षा</h2>
          <p>हम आपके डेटा की सुरक्षा के लिए प्रतिबद्ध हैं। हम आपकी व्यक्तिगत जानकारी तक अनधिकृत पहुंच, परिवर्तन, या प्रकटीकरण से बचाने के लिए<br></br> उचित सुरक्षा उपाय लागू करते हैं। हालांकि, ऑनलाइन प्रसारण या भंडारण का कोई भी तरीका पूरी तरह से सुरक्षित नहीं होता है, और हम पूर्ण <br></br>सुरक्षा की गारंटी नहीं दे सकते।</p>
          <h2>6. तृतीय-पक्ष लिंक</h2>
          <p>हमारी वेबसाइट में तृतीय-पक्ष वेबसाइटों के लिंक हो सकते हैं। हम इन बाहरी साइटों पर नियंत्रण नहीं रखते हैं या उनका समर्थन नहीं करते हैं, और<br></br> हम उनकी सामग्री या गोपनीयता प्रथाओं के लिए जिम्मेदार नहीं हैं। हम आपको सलाह देते हैं कि आप किसी भी तृतीय-पक्ष साइटों की गोपनीयता <br></br>नीतियों की समीक्षा करें जिन्हें आप विजिट करते हैं।</p>
          <h2>7. कुकी नीति</h2>
          <p>कुकीज़ हमारी उपयोगकर्ता अनुभव को सुधारने में मदद करती हैं, जिससे वेबसाइट आपकी क्रियाओं और प्राथमिकताओं को याद रख सकती है।<br></br> आप अपने ब्राउज़र सेटिंग्स के माध्यम से कुकी प्राथमिकताओं को प्रबंधित कर सकते हैं, और अधिकांश ब्राउज़र आपको कुकीज़ को ब्लॉक करने<br></br> की अनुमति देते हैं। हालांकि, कुकीज़ को निष्क्रिय करने से आपकी वेबसाइट की कुछ विशेषताओं का उपयोग प्रभावित हो सकता है।</p>
          <h2>8. बच्चों की गोपनीयता</h2>
          <p>हमारी वेबसाइट 13 वर्ष से कम उम्र के व्यक्तियों की ओर निर्देशित नहीं है, और हम जानबूझकर बच्चों से व्यक्तिगत जानकारी एकत्रित नहीं करते हैं।<br></br> यदि हमें यह पता चलता है कि हमने 13 वर्ष से कम उम्र के बच्चे से डेटा एकत्रित किया है, तो हम उस जानकारी को तुरंत हटाने के कदम<br></br> उठाएंगे।</p>
          <h2>9. इस गोपनीयता नीति में परिवर्तन</h2>
          <p>हम समय-समय पर इस गोपनीयता नीति को अपडेट कर सकते हैं ताकि हमारी प्रथाओं में बदलाव को प्रतिबिंबित किया जा सके। हम आपको <br></br>सलाह देते हैं कि आप इस नीति की समय-समय पर समीक्षा करें। वेबसाइट का निरंतर उपयोग करना किसी भी संशोधन के बाद आपके द्वारा <br></br>अद्यतन नीति की स्वीकृति को दर्शाता है।</p>
          <h2>10. आपके अधिकार और विकल्प</h2>
          <p>आपके स्थान के आधार पर, आपके पास अपनी व्यक्तिगत जानकारी के बारे में अधिकार हो सकते हैं, जैसे कि अपनी जानकारी का एक्सेस,<br></br> अपडेट या हटाने का अधिकार। इन अधिकारों का उपयोग करने के लिए या हमारी गोपनीयता प्रथाओं के बारे में कोई प्रश्न पूछने के लिए, कृपया<br></br> हमसे संपर्क करें।</p>
          <h2>11. हमसे संपर्क करे</h2>
          <p>यदि आपको इस गोपनीयता नीति या हमारे डेटा प्रथाओं के बारे में कोई प्रश्न या चिंता हो, तो कृपया हमसे संपर्क करें:<br></br></p>

          <p className="support"><strong>ईमेल:</strong> support@baisahab.com</p>

        </div>
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
    </BrowserRouter>


  );

}

export default Nav;
