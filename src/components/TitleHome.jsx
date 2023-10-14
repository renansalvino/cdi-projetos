import { Box } from "@chakra-ui/react";
import React from "react";
import '../pages/Home/home.css';

function TitleHome() {
    return (
        <>
            <Box h="80vh" zIndex="-1">
                <svg viewBox="0 0 100 50" xmlns="http://www.w3.org/2000/svg" fill="#ffffff">
                    <path d="M0 35 Q20 20 40 30 T70 35 Q100 20 120 30 V50 T0 50 Z" />
                    <image x="65" y="10" xlinkHref="./img/pinguim.png" width="20" height="20" className="penguinImage" />

                    <foreignObject x="5" y="6" width="90" height="45">
                        <div class="textHeaderCover">
                            <p style={{fontSize: '0.1rem' , fontWeight: 'bold', marginTop: '2px'}}>nós somos a</p>
                            <h2 style={{fontSize: '0.2rem', fontWeight: 'bold'}}>Comissão discente de</h2>
                            <h1 style={{fontSize: '0.3rem', fontWeight: 'bold'}}>INFORMÁTICA</h1>
                            <p style={{fontSize: '0.1rem', fontWeight: 'bold'}}>da faculdade de tecnologia da Unicamp</p>
                        </div>
                    </foreignObject>
                </svg>
            </Box>
        </>
    )
}

export default TitleHome;
