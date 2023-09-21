import { Box } from "@chakra-ui/react";
import React from "react";

function Title({title, subtitle}) {
    return (
        <>
            <Box h="80vh" zIndex="-1">
                <svg
                    viewBox="0 0 100 50"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="#ffffff"
                >
                    <path d="M0 35 Q20 20 40 30 T70 35 Q100 20 120 30 V50 T0 50 Z" />
                    <text x="50" y="10" text-anchor="middle"  fill="#fff" 
                    fontFamily="Roboto, sans-serif" fontWeight="bold" fontSize="4">
                        {title}
                    </text>
                    <text x="50" y="17" text-anchor="middle"  fill="#fff" fontFamily="Roboto, sans-serif" fontWeight="bold" fontSize="2">
                        {subtitle}
                     </text>
                </svg>
            </Box>
        </>
    )
}

export default Title;