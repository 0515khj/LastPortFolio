import { useEffect, useRef } from "react";



export default function useInterval(callback, delay){
    const savedCallback = useRef();

    useEffect(()=>{
        // callback이 바뀔 때마다 ref에 저장
        savedCallback.current = callback;
    },[callback]);

    useEffect(()=>{
        // delay가 null이면 interval 안돌림
        if (delay === null) {
            return;
        }   
        function tick() {
            savedCallback.current();
        }
        const id = setInterval(tick, delay);

        // cleanup : interval 정리하는놈

        return () => clearInterval(id);

    },[delay]);
}





