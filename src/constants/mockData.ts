import { SolutionData } from "types";

export const solutionData: SolutionData = {
    heading: "SMART LOYALTY",
    subheading: "Giải pháp toàn diện về Loyalty Marketing cho doanh nghiệp",
    cards: [
        {
            id: 1,
            title: "Tư vấn",
            description: "Về chiến lược, thiết kế chương trình, giám sát triển khai và đồng hành hỗ trợ doanh nghiệp.",
            imageUrl: "/assets/Home/CRM_2.png",
            link: "/dich-vu/#dich-vu-tu-van"
        },
        {
            id: 2,
            title: "Đào tạo",
            description: "Đào tạo Loyalty Marketing với giáo trình Loyalty Quốc tế có bản quyền do Loyalty Academy (Mỹ) biên soạn.",
            imageUrl: "/assets/Home/CRM_0.png",
            link: "dich-vu/#dich-vu-dao-tao"
        },
        {
            id: 3,
            title: "Nền tảng công nghệ",
            description: "Với hai lựa chọn: phiên bản điện toán đám mây (Cloud) hoặc cài đặt phần mềm tại máy chủ, tùy vào nhu cầu hoặc quy mô của doanh nghiệp.",
            imageUrl: "/assets/Home/CRM_7.png",
            link: "/san-pham"
        }
    ]
};

export const navbarData = [
    {
        label: 'Trang chủ',
        href: '/',
        submenu: [],
    },
    {
        label: 'Sản phẩm',
        href: '/san-pham',
        submenu: [],
    },
    {
        label: 'Dịch vụ',
        href: '/dich-vu',
        submenu: [
            { label: 'Tư vấn Loyalty Marketing', href: '/dich-vu/tu-van-loyalty-marketing' },
            { label: 'Đào tạo nội bộ Loyalty Marketing', href: '/dich-vu/dao-tao-noi-bo-loyalty-marketing' },
            { label: 'Đào tạo Public Loyalty Marketing', href: '/dich-vu/dao-tao-public-loyalty-marketing' },
        ],
    },
    {
        label: 'Giải pháp',
        href: '/giai-phap',
        submenu: [],
    },
    {
        label: 'Về chúng tôi',
        href: '/ve-smart-loyalty',
        submenu: [
            { label: 'Sản phẩm 1', href: '/san-pham-1' },
            { label: 'Sản phẩm 2', href: '/san-pham-2' },
        ],
    },
    {
        label: 'Blog',
        href: '/blog',
        submenu: [
            { label: 'Blog', href: '/blog' },
            { label: 'E-book', href: '/ebook-tai-lieu' },
            { label: 'Sự kiện', href: '/su-kien' },
            { label: 'Video & Podcast', href: '/video-podcast' },
        ],
    },
    {
        label: 'Hỗ trợ',
        href: '/ho-tro',
        submenu: [],
    },
];
// label: 'Giải pháp',
// href: '/giai-phap',
// submenu: [
//     {
//         category: 'Theo lĩnh vực',
//         subtitle: 'Đa dạng ngành nghề lĩnh vực',
//         items: [
//             { label: 'Tài chính - Ngân hàng', href: '/giai-phap/nganh-hang-1' },
//             { label: 'Bán lẻ', href: '/giai-phap/nganh-hang-2' },
//             { label: 'Sức khỏe làm đẹp', href: '/giai-phap/nganh-hang-3' },
//             { label: 'Du lịch khách sạn', href: '/giai-phap/nganh-hang-4' },
//             { label: 'Dịch vụ ăn uống (FnB)', href: '/giai-phap/nganh-hang-5' },
//             { label: 'B2B', href: '/giai-phap/nganh-hang-6' },
//         ],
//     },
//     {
//         category: 'Theo quy mô',
//         subtitle: 'Phù hợp mọi quy mô doanh nghiệp',
//         items: [
//             { label: 'Doanh nghiệp vừa - nhỏ', href: '/giai-phap/quy-mo-nho' },
//             { label: 'Tập đoàn - DN lớn', href: '/giai-phap/quy-mo-lon' },
//         ],
//     },
// ],