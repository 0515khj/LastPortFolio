import { motion } from "framer-motion";

const FadeIn = ({children, delay=0}) => {
    return (
        <motion.div
            /* 초기값 설정임 투명걸고 y축 50px 내림 */
            initial={{opacity:0, y:50}}
            /* 화면에 들어올때 투명 풀고 y축 내린거 원래자리로 돌림 */
            whileInView={{opacity:1,y:0}}
            /* 뷰포트 설정 파트 */
            // once가 true 라면 한번만 실행
            // once가 false 라면 화면에 들어올 때마다 계속 실행
            viewport={{once:false, amount:0.3}}
            /* 움직이는거 속도랑 시간 설정 */
            transition={{duration:0.8, delay:delay, ease:"easeOut"}}
        >   
            {/* 이제 적용하고 싶은 컴포넌트를 감싸주면 된다. */}
            {children}    
        </motion.div>
    );
};

export default FadeIn;