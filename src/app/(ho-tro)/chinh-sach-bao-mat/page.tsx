import { Metadata } from 'next'
import React from 'react'

import './styles.sass'

export const metadata: Metadata = {
    title: 'Chính sách bảo mật'
}

// Dữ liệu JSON
const privacyPolicyData = {
    title: "Chính sách bảo mật",
    content: [
        {
            subtitle: "Chúng tôi là ai",
            description: "Địa chỉ website là: http://smartloyalty.mauwebsite.work."
        },
        {
            subtitle: "Thông tin cá nhân nào bị thu thập và tại sao thu thập",
            description: "Khi khách truy cập để lại bình luận trên trang web, chúng tôi thu thập dữ liệu được hiển thị trong biểu mẫu bình luận và cũng là địa chỉ IP của người truy cập và chuỗi user agent của người dùng trình duyệt để giúp phát hiện spam."
        },
        {
            subtitle: "Thư viện",
            description: "Nếu bạn tải hình ảnh lên trang web, bạn nên tránh tải lên hình ảnh có dữ liệu vị trí được nhúng (EXIF GPS) đi kèm. Khách truy cập vào trang web có thể tải xuống và giải nén bất kỳ dữ liệu vị trí nào từ hình ảnh trên trang web."
        },
        {
            subtitle: "Cookies",
            description: "Nếu bạn viết bình luận trong website, bạn có thể cung cấp cần nhập tên, email địa chỉ website trong cookie. Các thông tin này nhằm giúp bạn không cần nhập thông tin nhiều lần khi viết bình luận khác."
        },
        {
            subtitle: "Nội dung nhúng từ website khác",
            description: "Các bài viết trên trang web này có thể bao gồm nội dung được nhúng (ví dụ: video, hình ảnh, bài viết, v.v.)."
        },
        {
            subtitle: "Phân tích",
            description: "Chúng tôi chia sẻ dữ liệu của bạn với ai."
        },
        {
            subtitle: "Dữ liệu của bạn tồn tại bao lâu",
            description: "Nếu bạn để lại bình luận, bình luận và siêu dữ liệu của nó sẽ được giữ lại vô thời hạn."
        },
        {
            subtitle: "Các quyền nào của bạn với dữ liệu của mình",
            description: "Bạn có thể yêu cầu nhận tệp xuất dữ liệu cá nhân mà chúng tôi lưu giữ về bạn."
        },
        {
            subtitle: "Các dữ liệu của bạn được gửi tới đâu",
            description: "Các bình luận của khách có thể được kiểm tra thông qua dịch vụ tự động phát hiện spam."
        },
        {
            subtitle: "Cách chúng tôi bảo vệ dữ liệu của bạn",
            description: "Các quá trình tiết lộ dữ liệu mà chúng tôi thực hiện."
        }
    ]
};

export default function PrivacyPolicy() {
    return (
        <><h1>{privacyPolicyData.title}</h1>
            <div className='policy-content'>
                {privacyPolicyData.content.map((item, index) => (
                    <div key={index}>
                        <h2>{item.subtitle}</h2>
                        <p>{item.description}</p>
                    </div>
                ))}
            </div></>

    );
};
