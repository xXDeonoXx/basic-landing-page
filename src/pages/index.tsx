import * as React from 'react';
import StyledLink from '../components/StyledLink';
import Layout from '../components/Layout';
import TwoSqaureSection from '../components/TwoSquareSection';
import BannerImage from '../images/new-york.jpg';
import GirlStudying from '../images/girl-studying.jpg';
import ManLaptop from '../images/man-laptop.jpg';
import PeopleStudying from '../images/people-studying.jpg';
import Profit from '../images/profit.jpg';
import FeatureCard from '../components/FeatureCard';

// markup
const IndexPage = () => {
  return (
    <main>
      <head>
        <meta
          name='description'
          content='This is an example of a
meta description. This will often show up in search results.'
        />
      </head>
      <title>Home Page</title>
      <body
        className='bg-no-repeat bg-fixed bg-top'
        style={{ backgroundImage: `url(${GirlStudying})` }}
      >
        <Layout>
          <section
            id='início'
            style={{ backgroundImage: `url(${ManLaptop})` }}
            className={`h-[600px] w-full bg-center bg-no-repeat bg-cover`}
          >
            <div className='flex flex-col justify-center items-center w-full h-full bg-black bg-opacity-40 text-white '>
              <h1 className='text-3xl lg:text-4xl text-center px-8'>
                Acelere o crescimento e lucro do seu negócio hoje!
              </h1>
              <div className='text-center my-6 text-lg w-full px-8 lg:w-2/3'>
                <h2>
                  Nós da Agência X vamos te ajudar, somos uma equipe de
                  especialistas super competentes com o objetivo de alavancar o
                  seu negócio!
                </h2>
              </div>
              <StyledLink />
            </div>
          </section>
          <section
            id='sobre'
            className='bg-white flex flex-col justify-center items-center lg:h-80 py-8'
          >
            <img
              src='https://placeholderlogo.com/img/placeholder-logo-4.png'
              alt='Logo'
              className='h-16 mb-4'
            />
            <p className='w-full px-8 lg:w-2/4 text-center text-slate-500'>
              Nós desenhamos novos produtos, criamos peças gráficas, conceitos
              visuais para agências de publicidade, planejamento e outros. Somos
              uma provedora de soluções de negócios para empresas de todos os
              portes. Temos uma equipe multi tarefas e multidisciplinar baseadas
              em projetos de prototipagem de um dia.
            </p>
          </section>
          <section id='seção-1'>
            <TwoSqaureSection>
              <div className='flex flex-col md:w-1/2 h-[30rem] overflow-hidden justify-center items-center relative'>
                <img
                  src={PeopleStudying}
                  alt=''
                  className='object-cover h-full w-full'
                />
                <div className='w-full h-full bg-black bg-opacity-10 absolute' />
              </div>
              <div className='flex flex-col md:w-1/2 h-full min-h-[30rem] justify-center items-center bg-center relative bg-slate-200'>
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
                    aut odit aut fugit justo sed mauris vel.`}
                  </p>
                </div>
              </div>
            </TwoSqaureSection>
          </section>

          <section
            id='serviços'
            className='bg-white flex flex-col justify-center items-center lg:h-[28rem] py-8 text-slate-600'
          >
            <h2 className='text-bold text-4xl '>Nossos serviços</h2>
            <p className='w-full p-4 lg:w-2/4 text-center text-slate-500'>
              Alguns dos serviços que disponibilizamos
            </p>
            <div className='flex flex-col md:flex-row justify-evenly items-center w-full mt-8'>
              <FeatureCard
                icon={'https://www.svgrepo.com/show/16734/graphic-design.svg'}
                title={'Design'}
                description={
                  'Trabalhamos com Branding e design da sua marca e da sua logo!'
                }
              />
              <FeatureCard
                icon={
                  'https://www.svgrepo.com/show/235084/id-card-identity.svg'
                }
                title={'Identidade Visual'}
                description={
                  'Trabalhamos com Branding e design da sua marca e da sua logo!'
                }
              />
              <FeatureCard
                icon={'https://www.svgrepo.com/show/261928/website.svg'}
                title={'Criação de Sites'}
                description={
                  'Amplie seu negócio! Tenha sua própria landing page com uma alta captação de leads'
                }
              />
            </div>
          </section>

          <section id='seção-2'>
            <TwoSqaureSection className={'flex-col-reverse md:flex-row'}>
              <div className='flex w-full h-full min-h-[30rem] justify-center items-center bg-center relative bg-slate-200'>
                <div className='w-5/6'>
                  <h2 className='text-3xl mb-4 text-slate-600'>
                    Vivamus malesuada ipsum nibh ligula saepe eveniet praesent.
                  </h2>
                  <h3 className='text-xl mb-4 font-semibold'>
                    Clean, Simple & Elegant
                  </h3>
                  <p className='text-slate-600 leading-6 mb-8'>
                    {`Pellentesque ets laoret mauris, dapibis volutpatum etsum, vivamus malesuada ipsum
                   etsumis nibh ligula saepe eveniet praesent. Quis consequatur voluptas sit aspernaturis
                    aut odit aut fugit justo sed mauris vel.`}
                  </p>
                  <StyledLink />
                </div>
              </div>
              <div className='flex flex-col w-full h-[30rem] overflow-hidden justify-center items-center relative'>
                <img
                  src={Profit}
                  alt=''
                  className='object-cover h-full w-full'
                />
                <div className='w-full h-full bg-black bg-opacity-10 absolute' />
              </div>
            </TwoSqaureSection>
          </section>
          <section
            id='se-inscreva'
            className='text-white h-[30rem] bg-black bg-opacity-40 flex flex-col justify-center items-center'
          >
            <h1 className='text-3xl px-8 md:text-4xl md:w-96 text-center'>
              Se inscreva hoje e fique por dentro do lançamento!
            </h1>
            <form className='my-8 flex'>
              <input
                className='rounded-l-lg border-t mr-0 border-b border-l text-gray-800 border-gray-200 bg-white'
                placeholder='exemplo@mail.com'
              />
              <button className='rounded-r-lg bg-sky-600 font-bold uppercase p-2 border-sky-600 border-t border-b border-r text-white'>
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
