import "../../components/footer/footer.scss";
import { BsTelegram } from "react-icons/bs";
import { FaPhoneSquareAlt } from "react-icons/fa";
const Footer = () => {
  return (
    <>
    <footer className="footer">
      <div className="container">
        <div className="info_bac">
          <div className="info_esse"> 
          <h2 className="info_title">Murojat uchun ; </h2>
          </div>
          <div className="info_web">
          <a href="https://t.me/@izana_07_05" className="footer_link">
              <div className="teg_info"><BsTelegram /></div>
            </a>
            <a href="tel:+998993084090" className="footer_link">
              <div className="cal_info"><FaPhoneSquareAlt /></div>
            </a>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer