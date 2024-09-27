import { useEffect, useRef, useState } from 'react';

export const useInView = () => {
    const [isInView, setIsInView] = useState(false);
    const ref = useRef<HTMLDivElement>(null); // Đảm bảo ref là HTMLDivElement

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsInView(entry.isIntersecting);
            },
            {
                threshold: 0.2, // Thay đổi giá trị này để điều chỉnh độ sâu
            }
        );

        if (ref.current) {
            observer.observe(ref.current);
        }

        return () => {
            if (ref.current) {
                observer.unobserve(ref.current);
            }
        };
    }, []);

    return { ref, isInView }; // Trả về ref và trạng thái isInView
};
