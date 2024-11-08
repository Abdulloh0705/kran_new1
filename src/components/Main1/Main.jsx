import React from 'react'
import "../Main1/main.scss"
import { FaTiktok } from "react-icons/fa6";
import { RiYoutubeLine } from "react-icons/ri";
import { BsTelegram } from "react-icons/bs";
import { FaPhoneSquareAlt } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
const Main = () => {
  return (
    <>
      <main className="main">
        <div className="container">
          <div className="krn_esses">
            <div className="infos_esse">
              <h2 className="info_title">Zakaz Uchun Kranlar</h2>
            </div>
          </div>
          <div className="info_card1">
            <div className="krn_infos">
              <h3 className="info_title1">Ism - Nig'matilla Sterla - 14m tonna - 14 </h3>
              <img src="aaaa.jpg" alt="" className="info_img1" />
            </div>
            <div className="web">
              <a href="tel:+99898 128 43 47 " className="intro_link"><div className="cal_img"><FaPhoneSquareAlt /></div></a>
              <a href="https://instagram.com/nigmatillaxoshimov" className="intro_link1"><div className="insta_img"><FaSquareInstagram /></div></a>
              <a href="https://t.me/Xoshimov_avtokran" className="intro_link2"><div className="teg_img"><BsTelegram />
              </div></a>
              <a href="https://tiktok.com/@nigmatillakranchi" className="intro_link3"><div className="tik_img">< FaTiktok /></div></a>
              <a href="https://youtube.com/@nigmatillaxoshimov1965" className="intro_link4"><div className="you_img"><RiYoutubeLine /></div></a>
            </div>
          </div>
        </div>
      </main>
    </>
  )
}

export default Main