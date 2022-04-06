import React from 'react';

const TwoSqaureSection: React.FC = ({ children }) => {
  return (
    <div className='flex w-full justify-between items-center h-auto'>
      {children}
    </div>
  );
};

export default TwoSqaureSection;
