"use client"
import React, { useState, useEffect } from 'react';

interface PerformanceProps {
  score: number;
  maxScore: number;
  circleRadius?: number; // Optional prop for controlling the size of the circle
}

const Performance: React.FC<PerformanceProps> = ({ score, maxScore, circleRadius = 2 }) => {
  const [normalizedScore, setNormalizedScore] = useState(0);

  useEffect(() => {
    
    const normalized = (score / maxScore) * 100;
    setNormalizedScore(normalized);
  }, [score, maxScore]);

  // Calculate the stroke-dasharray for the SVG circle
  const circumference = 2 * Math.PI * circleRadius;
  const progress = (normalizedScore / 100) * circumference;

  // Define a function to determine the color based on the score
  const getCircleColor = () => {
    // Example: Change color to green if score is above 80
    return score > 75 ? 'green' : 'tomato';
  };

  return (
    <div className=" flex mx-auto h-80">
        
        <svg className='mx-auto flex justify-center items-center self-center ' 
        width={2 * circleRadius} height={2 * circleRadius} viewBox={`0 0 ${2 * circleRadius} ${2 * circleRadius}`}>
        {/* Background circle */}
        <circle
            cx={circleRadius}
            cy={circleRadius}
            r={circleRadius-5}
            fill="none"
            stroke="#eee"
            strokeWidth="10"
        />
        {/* Foreground circle - shows the progress */}
  {/* <circle
    cx={circleRadius}
    cy={circleRadius}
    r={circleRadius}
    fill="none"
    stroke={getCircleColor()} // Use dynamic color based on score
    strokeWidth="10"
    strokeDasharray={`${progress} ${circumference}`}
    transform={`rotate(-90 ${circleRadius} ${circleRadius})`}
  /> */}
  {/* Text to display the score */}
  <text x={circleRadius} y={circleRadius + 5} fontSize="20" fill={getCircleColor()} textAnchor="middle">
    {score}
  </text>
</svg>
    </div>
  );
};

export default Performance;
