
import "./Header.css"
import { Button } from "@shared-components";
import asset from "../../../public/assets/asset"

const Header = () => {
    return (
        <div className="header-container">
            <div className="wrap-header-infor">
                <div className="container header-infor">
                    <ul>
                        <li className="header-infor-item"><a href="#">
                            <img src={asset.search_icon.src} alt="" />
                        </a></li>
                        <li className="header-infor-item"><a href="#">về Smart Loyalty</a></li>
                        <li className="header-infor-item"><a href="#">Sản phẩm</a></li>
                        <li className="header-infor-item"><a href="#">Dịch vụ</a></li>
                        <li className="header-infor-item"><a href="#">Liên hệ</a></li>
                    </ul>

                </div>
            </div>
            <div className="container header">
                <div className="header-logo">
                    <img src="assets/logo.png" alt="" />
                </div>
                <div className="header-contents">
                    <ul>
                        <li>Trang chủ</li>
                        <li>Sản phẩm</li>
                        <li>Dịch vụ</li>
                        <li>Giải pháp</li>
                        <li>Về chúng tôi</li>
                        <li>Blog</li>
                        <li>Hỗ trợ</li>
                    </ul>
                </div>
                <div className="header-button">

                    <Button >
                        Tư vấn
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Header