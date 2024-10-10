import { Metadata } from 'next';
import React from 'react';



export const metadata: Metadata = {
    title: 'Chính sách bảo mật'
};

// Dữ liệu JSON
const privacyPolicyData = [
    {
        title: 'Chính sách bảo mật',
        content: [
            {
                subtitle: 'Chúng tôi là ai',
                description: 'Địa chỉ website là: http://smartloyalty.mauwebsite.work.'
            },
            {
                subtitle: 'Thông tin cá nhân nào bị thu thập và tại sao thu thập',
                description: 'Khi khách truy cập để lại bình luận trên trang web, chúng tôi thu thập dữ liệu được hiển thị trong biểu mẫu bình luận và cũng là địa chỉ IP của người truy cập và chuỗi user agent của người dùng trình duyệt để giúp phát hiện spam. \nMột chuỗi ẩn danh được tạo từ địa chỉ email của bạn (còn được gọi là hash) có thể được cung cấp cho dịch vụ Gravatar để xem bạn có đang sử dụng nó hay không. Chính sách bảo mật của dịch vụ Gravatar có tại đây: https://automattic.com/privacy/. Sau khi chấp nhận bình luận của bạn, ảnh tiểu sử của bạn được hiển thị công khai trong ngữ cảnh bình luận của bạn.'
            },
            {
                subtitle: 'Thư viện',
                description: 'Nếu bạn tải hình ảnh lên trang web, bạn nên tránh tải lên hình ảnh có dữ liệu vị trí được nhúng (EXIF GPS) đi kèm. Khách truy cập vào trang web có thể tải xuống và giải nén bất kỳ dữ liệu vị trí nào từ hình ảnh trên trang web.'
            }, {
                subtitle: 'Thông tin liên hệ',
                description: ''
            },
            {
                subtitle: 'Cookies',
                description: 'Nếu bạn viết bình luận trong website, bạn có thể cung cấp cần nhập tên, email địa chỉ website trong cookie. Các thông tin này nhằm giúp bạn không cần nhập thông tin nhiều lần khi viết bình luận khác. Cookie này sẽ được lưu giữ trong một năm.\nNếu bạn vào trang đăng nhập, chúng tôi sẽ thiết lập một cookie tạm thời để xác định nếu trình duyệt cho phép sử dụng cookie.Cookie này không bao gồm thông tin cá nhân và sẽ được gỡ bỏ khi bạn đóng trình duyệt.\nKhi bạn đăng nhập, chúng tôi sẽ thiết lập một vài cookie để lưu thông tin đăng nhập và lựa chọn hiển thị.Thông tin đăng nhập gần nhất lưu trong hai ngày, và lựa chọn hiển thị gần nhất lưu trong một năm.Nếu bạn chọn thông tin đăng nhập sẽ được lưu trong hai tuần.Nếu bạn thoát tài khoản, thông tin cookie đăng nhập sẽ bị xoá.\nNếu bạn sửa hoặc công bố bài viết, một bản cookie bổ sung sẽ được lưu trong trình duyệt.Cookie này không chứa thông tin cá nhân và chỉ đơn giản bao gồm ID của bài viết bạn đã sửa.Nó tự động hết hạn sau 1 ngày.'
            },
            {
                subtitle: 'Nội dung nhúng từ website khác',
                description: 'Các bài viết trên trang web này có thể bao gồm nội dung được nhúng (ví dụ: video, hình ảnh, bài viết, v.v.). Nội dung được nhúng từ các trang web khác hoạt động theo cùng một cách chính xác như khi khách truy cập đã truy cập trang web khác.\nNhững website này có thể thu thập dữ liệu về bạn, sử dụng cookie, nhúng các trình theo dõi của bên thứ ba và giám sát tương tác của bạn với nội dung được nhúng đó, bao gồm theo dõi tương tác của bạn với nội dung được nhúng nếu bạn có tài khoản và đã đăng nhập vào trang web đó.'
            },
            {
                subtitle: 'Phân tích',
                description: ''
            }]
    },
    {
        title: 'Chúng tôi chia sẻ dữ liệu của bạn với ai',
        content: [

            {
                subtitle: 'Dữ liệu của bạn tồn tại bao lâu',
                description: 'Nếu bạn để lại bình luận, bình luận và siêu dữ liệu của nó sẽ được giữ lại vô thời hạn. Điều này là để chúng tôi có thể tự động nhận ra và chấp nhận bất kỳ bình luận nào thay vì giữ chúng trong khu vực đợi kiểm duyệt.\nĐối với người dùng đăng ký trên trang web của chúng tôi(nếu có), chúng tôi cũng lưu trữ thông tin cá nhân mà họ cung cấp trong hồ sơ người dùng của họ.Tất cả người dùng có thể xem, chỉnh sửa hoặc xóa thông tin cá nhân của họ bất kỳ lúc nào(ngoại trừ họ không thể thay đổi tên người dùng của họ).Quản trị viên trang web cũng có thể xem và chỉnh sửa thông tin đó.'
            },
            {
                subtitle: 'Các quyền nào của bạn với dữ liệu của mình',
                description: 'Nếu bạn có tài khoản trên trang web này hoặc đã để lại nhận xét, bạn có thể yêu cầu nhận tệp xuất dữ liệu cá nhân mà chúng tôi lưu giữ về bạn, bao gồm mọi dữ liệu bạn đã cung cấp cho chúng tôi. Bạn cũng có thể yêu cầu chúng tôi xóa mọi dữ liệu cá nhân mà chúng tôi lưu giữ về bạn. Điều này không bao gồm bất kỳ dữ liệu nào chúng tôi có nghĩa vụ giữ cho các mục đích hành chính, pháp lý hoặc bảo mật.'
            },
            {
                subtitle: 'Các dữ liệu của bạn được gửi tới đâu',
                description: 'Các bình luận của khách có thể được kiểm tra thông qua dịch vụ tự động phát hiện spam.'
            },
            {
                subtitle: 'Cách chúng tôi bảo vệ dữ liệu của bạn',
                description: 'Các quá trình tiết lộ dữ liệu mà chúng tôi thực hiện.'
            }
        ]
    }];


export default function PrivacyPolicy() {
    return (
        <div>
            {privacyPolicyData.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                    <h1>{section.title}</h1>
                    <div className='policy-content'>
                        {section.content.map((item, itemIndex) => (
                            <div key={itemIndex}>
                                <h2>{item.subtitle}</h2>
                                {item.description.split('\n').map((text, textIndex) => (
                                    <p key={textIndex}>{text}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>


    );
};
