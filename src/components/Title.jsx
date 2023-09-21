import { Box } from "@chakra-ui/react";
import React from "react";

function Title() {
    return (
        <>
            <Box h="70vh" zIndex="-1">
                <svg
                    viewBox="0 0 100 50"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                >
                    <path d="M0 25 Q20 10 40 20 T70 25 Q100 10 120 20 V50 T0 50 Z" />
                    <text x="50" y="5" text-anchor="middle"  fill="#fff" fontFamily="Roboto, sans-serif" fontWeight="bold" fontSize="5">
                        Professores
                    </text>
                    <text x="50" y="10" text-anchor="middle"  fill="#fff" fontFamily="Roboto, sans-serif" fontWeight="bold" fontSize="2">
                    Os melhores professores de tecnologia do Brasil estão aqui na FT-Unicamp!
                    </text>
                </svg>
            </Box>
        </>
    )
}

export default Title;