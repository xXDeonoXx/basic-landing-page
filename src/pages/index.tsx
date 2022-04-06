import * as React from 'react';
import Button from '../components/Button';
import Layout from '../components/Layout';
import TwoSqaureSection from '../components/TwoSquareSection';
import BannerImage from '../images/new-york.jpg';
import GirlStudying from '../images/girl-studying.jpg';
import ManLaptop from '../images/man-laptop.jpg';

// markup
const IndexPage = () => {
  return (
    <main>
      <title>Home Page</title>
      <body
        className='bg-no-repeat bg-fixed bg-top'
        style={{ backgroundImage: `url(${GirlStudying})` }}
      >
        <Layout>
          <section
            style={{ backgroundImage: `url(${ManLaptop})` }}
            className={`h-[600px] w-full bg-center bg-no-repeat bg-cover`}
          >
            <div className='flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-40 text-white'>
              <h1 className='text-4xl'>
                Accessible design is good design. You can count on us.
              </h1>
              <div className='text-center my-6 text-lg'>
                <h2>
                  Everybody knows design and style should work toward making you
                  look good and feel <br /> good without a lot of effort so you
                  can get on with the things that matter.
                </h2>
              </div>
              <Button />
            </div>
          </section>
          <section className='bg-white flex flex-col justify-center items-center h-80'>
            <img
              src='https://www.metaltoad.com/sites/default/files/styles/large_personal_photo_870x500_/public/2020-05/react-js-blog-header.png?itok=VbfDeSgJ'
              alt='Logo'
              className='h-16'
            />
            <p className='w-2/4 text-center text-slate-500'>
              “ Your work is going to fill a large part of your life, and the
              only way to be truly satisfied is to do what you believe is great
              work. And the only way to do great work is to love what you do. If
              you have not found it yet, then keep looking. Don't settle. As
              with all matters of the heart, you'll know when you find it.”
            </p>
          </section>
          <section>
            <TwoSqaureSection>
              <div className='flex flex-col w-1/2 h-[30rem] overflow-hidden justify-center items-center relative'>
                <img
                  src={BannerImage}
                  alt=''
                  className='object-cover h-full w-full'
                />
                <div className='w-full h-full bg-black bg-opacity-40 absolute' />
              </div>
              <div className='flex flex-col w-1/2 h-full min-h-[30rem] justify-center items-center bg-center relative bg-slate-200'>
                <div className='w-5/6'>
                  <h2 className='text-3xl mb-4 text-slate-600'>
                    Vivamus malesuada ipsum nibh ligula saepe eveniet praesent.
                  </h2>
                  <h3 className='text-xl mb-4 font-semibold'>
                    Clean, Simple & Elegant
                  </h3>
                  <p className='text-slate-600 leading-6'>
                    {`Pellentesque ets laoret mauris, dapibis volutpatum etsum, vivamus malesuada ipsum
                   etsumis nibh ligula saepe eveniet praesent. Quis consequatur voluptas sit aspernaturis
                    aut odit aut fugit justo sed mauris vel, lobortis tempor ets lorem quiastis voluptas
                     sit aspernatur aut odit aut fugit justo sed mauris.`}
                  </p>
                </div>
              </div>
            </TwoSqaureSection>
          </section>
          <section>
            <TwoSqaureSection>
              <div className='flex w-full h-full min-h-[30rem] justify-center items-center bg-center relative bg-slate-200'>
                <div className='w-5/6'>
                  <h2 className='text-3xl mb-4 text-slate-600'>
                    Vivamus malesuada ipsum nibh ligula saepe eveniet praesent.
                  </h2>
                  <h3 className='text-xl mb-4 font-semibold'>
                    Clean, Simple & Elegant
                  </h3>
                  <p className='text-slate-600 leading-6 mb-4'>
                    {`Pellentesque ets laoret mauris, dapibis volutpatum etsum, vivamus malesuada ipsum
                   etsumis nibh ligula saepe eveniet praesent. Quis consequatur voluptas sit aspernaturis
                    aut odit aut fugit justo sed mauris vel, lobortis tempor ets lorem quiastis voluptas
                     sit aspernatur aut odit aut fugit justo sed mauris.`}
                  </p>
                  <Button />
                </div>
              </div>
              <div className='flex flex-col w-full h-[30rem] overflow-hidden justify-center items-center relative'>
                <img
                  src={BannerImage}
                  alt=''
                  className='object-cover h-full w-full'
                />
                <div className='w-full h-full bg-black bg-opacity-40 absolute' />
              </div>
            </TwoSqaureSection>
          </section>
          <section className='text-white h-[30rem] bg-black bg-opacity-40 flex flex-col justify-center items-center'>
            <h1 className='text-4xl w-96 text-center'>
              Se inscreva hoje e fique informado sobre o lançamento!
            </h1>
            <form className='my-8 flex'>
              <input
                className='rounded-l-lg p-4 border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white'
                placeholder='exemplo@mail.com'
              />
              <button className='px-8 rounded-r-lg bg-sky-600  font-bold p-4 uppercase border-sky-600 border-t border-b border-r text-white'>
                Inscrever
              </button>
            </form>
          </section>
        </Layout>
      </body>
    </main>
  );
};

export default IndexPage;
