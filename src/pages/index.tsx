import React from 'react';

import { GetServerSideProps, NextPage } from 'next';

import Benefits from '@containers/Main/Benefits';
import Categories from '@containers/Main/Categories';
import Contacts from '@containers/Main/Contacts';
import Discounts from '@containers/Main/Discounts';
import Hero from '@containers/Main/Hero';
import Improvement from '@containers/Main/Improvement';
import Map from '@containers/Main/Map';
import OurWork from '@containers/Main/OurWork';
import Reviews from '@containers/Main/Reviews';
import WorkPlan from '@containers/Main/WorkPlan';
import { mainPageApi } from '@services/api/mainPage.api';

type Props = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  stocks: any
  reviews: any
  ourWorks: any
  workPlan: any
}

const Main: NextPage<Props> = ({
  stocks,
  reviews,
  ourWorks,
  workPlan,
}) => {
  return (
    <div>
      <Hero />
      <Categories />
      <Benefits />
      <Improvement />
      <WorkPlan workPlan={workPlan} />
      <OurWork ourWorks={ourWorks} />
      <Discounts stocks={stocks} />
      <Reviews reviews={reviews} />
      <Contacts />
      <Map />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59',
  );

  const [
    { data: stocksData },
    { data: reviewsData },
    { data: ourWorks },
    { data: workPlan },
  ] = await Promise.all([
    mainPageApi.getStocks(),
    mainPageApi.getReviews(),
    mainPageApi.getOurWorks(),
    mainPageApi.getWorkPlans(),
  ]);

  return {
    props: {
      stocks: stocksData || [],
      reviews: reviewsData || [],
      ourWorks: ourWorks || [],
      workPlan: workPlan || [],
    },
  };
};

export default Main;
