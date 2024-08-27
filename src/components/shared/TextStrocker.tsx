import React from 'react';

const TextStrocker = ({children}:any) => {
    
  return (
    <div className=' w-60 overflow-hidden' >
      <svg
        className='w-[20vw] '
        strokeWidth={1}
        stroke={'url(#grad1)'}
        viewBox="0 0 200 50"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="red" stopOpacity={1} />
            <stop offset="100%" stopColor="green" stopOpacity={1} />
          </linearGradient>
        </defs>
        <text
          x="0"
          y="35"
          font-family="Arial, Helvetica, sans-serif"
          font-size="30"
          font-weight="bold"
          fill="transparent"
          opacity={1}
          
        >
        {children}
        </text>
      </svg>
      </div>
 
  );
};

export default TextStrocker;