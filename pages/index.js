import React from "react";
import Head from "next/head";
import Banner from "../components/Banner";
import Nav from "../components/Nav";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";

const Home = ({ exploreData, cardData }) => {
  return (
    <div>
      <Head>
        <title>Airbnb Clone</title>

        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="mt-5">
          <h1 className="text-2xl sm:text-3xl font-semibold pb-5">
            Explore Nearby
          </h1>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map((item) => (
              <SmallCard
                key={item.img}
                img={item.img}
                location={item.location}
                distance={item.distance}
              />
            ))}
          </div>
        </section>

        <section className="mt-5">
          <h1 className="text-2xl sm:text-3xl font-semibold pb-5">
            Live Anywhere
          </h1>

          <div className="flex space-x-3 overflow-scroll scrollbar-hide ">
            {cardData?.map((item) => (
              <MediumCard key={item.img} img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <section className="py-16 cursor-pointer">
          <LargeCard
            img="https://links.papareact.com/4cj"
            title="The greatest outdoors"
            description="Wishlists curated by airbnb"
            btnText="Get Inspired"
          />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export const getStaticProps = async () => {
  const exploreData = await fetch("https://links.papareact.com/pyp").then(
    (res) => res.json()
  );

  const cardData = await fetch("https://links.papareact.com/zp1").then((res) =>
    res.json()
  );

  return {
    props: {
      exploreData,
      cardData,
    },
  };
};

export default Home;
