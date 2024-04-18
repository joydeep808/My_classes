"use client"
import React, { useState, useEffect } from 'react';

interface PerformanceProps {
  score: number;
  maxScore: number;
  circleRadius?: number; 
  stroke?: number;
}

export default function Performance({ score, maxScore, circleRadius =85 , stroke=20, }:PerformanceProps){
  const [normalizedScore, setNormalizedScore] = useState(0);

  useEffect(() => {

    const normalized = (score / maxScore) * 100;
    setNormalizedScore(normalized);
  }, [score, maxScore]);

  const circumference = 2 * Math.PI * circleRadius;
  const progress = (normalizedScore / 100) * circumference;

  const getCircleColor = () => {
    return score > 89? 'green' : score > 69 ? 'dodgerblue' :  score > 49 ? 'orange' : 'red';
  };

  return (

    <svg className=' flex justify-center items-center self-center h-56 md:items-center md:w-60 md:m-4' 
    width={2 * circleRadius + stroke} height={2 * circleRadius + stroke} viewBox={`0 0 ${2 * circleRadius+ stroke} ${2 * circleRadius+ stroke}`}>
    {/* Background circle */}
    <circle
        cx={circleRadius + stroke/2}
        cy={circleRadius + stroke/2}
        r={circleRadius}
        fill="#eee"
        stroke="#fff"
        strokeWidth={stroke}
    />
    {/* Foreground circle - shows the progress */}
        <circle
        cx={circleRadius+ stroke/2}
        cy={circleRadius + stroke/2}
        r={circleRadius }
        fill="none  "
        stroke={getCircleColor()} // Use dynamic color based on score
        strokeWidth={stroke}
        strokeDasharray={`${progress} ${circumference}`}
        transform={`rotate(-0 ${circleRadius + stroke} ${circleRadius + stroke})`}
        strokeLinecap="round" 
        /> 
    {/* Text to display the score */}
        <text x={circleRadius + stroke/2} y={circleRadius + 15 + stroke/2} fontSize="50" fill={getCircleColor()} 
        textAnchor="middle" className='font-bold'>
            {score}
        </text>
    </svg>

  );
};

