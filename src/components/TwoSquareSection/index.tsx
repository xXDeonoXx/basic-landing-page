import React from 'react';

interface TwoSquareSectionProps {
  className?: string;
}

const TwoSqaureSection: React.FC<TwoSquareSectionProps> = ({
  children,
  className,
}) => {
  return (
    <div
      className={`${className} flex flex-col md:flex-row w-full justify-between items-center h-auto`}
    >
      {children}
    </div>
  );
};

export default TwoSqaureSection;
