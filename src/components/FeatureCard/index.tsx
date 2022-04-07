import React from 'react';

interface FeatureCardProp {
  icon: any;
  title: string;
  description: string;
}

const FeatureCard = ({ description, icon, title }: FeatureCardProp) => {
  return (
    <div className='flex flex-col items-center w-64 text-center mb-8'>
      <div className='w-20 bg-blue-400 p-4 rounded-xl'>
        <img src={icon} alt='' />
      </div>
      <h3 className='my-4 font-bold text-xl'>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default FeatureCard;
