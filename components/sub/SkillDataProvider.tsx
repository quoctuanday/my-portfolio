'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

interface Props {
    src: string;
    width: number;
    height: number;
    index: number; //để xác định số thứ tự của phần tử => sắp xếp và xuất hiện lúc nào
}

const SkillDataProvider = ({ src, width, height, index }: Props) => {
    const { ref, inView } = useInView({
        triggerOnce: true,
    });
    // Được dùng để xem phần tử có được người dùng nhìn thấy ko, khi cuộn trang đến chỗ phần tử
    // hoặc phóng to web làm xuất hiện phần tử thì triggerOnce sẽ trả về true.

    const imageVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
    };

    const animationDelay = 0.3;
    return (
        <motion.div
            ref={ref}
            initial="hidden" //Trạng thái ban đầu của hình ảnh
            variants={imageVariants}
            animate={inView ? 'visible' : 'hidden'} //Khi inView bên trên true nghĩa là đã cuộn đến phần tử t sẽ cho nó hiện còn ko thì ẩn
            custom={index}
            transition={{ delay: index * animationDelay }} //Tạo hiệu ứng trượt theo độ trễ
        >
            <Image src={src} width={width} height={height} alt="skill image" />
        </motion.div>
    );
};

export default SkillDataProvider;
