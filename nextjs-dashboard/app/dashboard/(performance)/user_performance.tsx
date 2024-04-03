"use client"
import React, { useState, useEffect } from 'react';

interface PerformanceProps {
  score: number;
  maxScore: number;
  circleRadius?: number; 
  stroke?: number;
}

const Performance: React.FC<PerformanceProps> = ({ score, maxScore, circleRadius = 2 , stroke=5, }) => {
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
    <div className=" flex flex-col md:flex-row mx-auto md:w-full gap-5 justify-evenly">
        
        <svg className=' flex justify-center items-center self-center h-56 md:items-center md:w-60 md:m-4' 
        width={2 * circleRadius + stroke} height={2 * circleRadius + stroke} viewBox={`0 0 ${2 * circleRadius+ stroke} ${2 * circleRadius+ stroke}`}>
        {/* Background circle */}
        <circle
            cx={circleRadius + stroke/2}
            cy={circleRadius + stroke/2}
            r={circleRadius}
            fill="none"
            stroke="#eee"
            strokeWidth={stroke}
        />
        {/* Foreground circle - shows the progress */}
            <circle
            cx={circleRadius+ stroke/2}
            cy={circleRadius + stroke/2}
            r={circleRadius }
            fill="#eee"
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

        <div className='flex'>
            <span className='self-center font-bold'>your performace in your previous tests</span>
        </div>
    </div>
  );
};

export default Performance;
