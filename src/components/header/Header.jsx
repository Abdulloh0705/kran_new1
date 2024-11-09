import React, { useEffect } from 'react';
import "../header/header.scss";

const Header = () => {
  useEffect(() => {
    // Text typing effect for krn_text
    const title = document.querySelector('.krn_text');
    const text = title.innerHTML;
    title.innerHTML = ''; // Clear text initially

    function rec(i = 0) {
      title.innerHTML += text[i];
      i++;
      if (i < text.length) {
        setTimeout(() => {
          rec(i);
        }, 50); // Typing speed
      }
    }

    rec(); // Start typing animation

    // Scroll animation
    const krnImg = document.querySelector('.krn_img');
    const krnTitle = document.querySelector('.krn_title');

    function animation() {
      krnImg.style.transform = `translateX(${window.scrollY}px)`;
      krnTitle.style.transform = `translateX(${window.scrollY}px)`;
    }

    window.addEventListener('scroll', animation);
    window.addEventListener('load', animation);

    return () => {
      // Cleanup event listeners when component is unmounted
      window.removeEventListener('scroll', animation);
      window.removeEventListener('load', animation);
    };
  }, []); // Empty dependency array ensures it runs only once on mount

  return (
    <header>
      <div className="container">
        <div className="krn_all">
          <div className="krn_str">
            <h1 className="krn_title">Avto Kran Zakaz</h1>
            <p className="krn_text">Assalomu aleykum siz bu saytda o'zingizga qulay kranlarni talashingiz mumkin</p>
          </div>
          <div className="krn_img">
            <img src="aaa.jpg" alt="Kran" className="krn_img1" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
