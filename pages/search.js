import React from "react";
import { useRouter } from "next/router";
import { format } from "date-fns";
import Footer from "../components/Footer";
import Nav from "../components/Nav";
import Card from "../components/Card";
import Map from "../components/Map";
import Head from "next/head";

const Search = ({ searchResult }) => {
  const router = useRouter();

  const { location, startDate, endDate, numOfGuest } = router.query;

  const range = `${format(new Date(startDate), "dd-MMMM-yy")} - ${format(
    new Date(endDate),
    "dd-MMMM-yy"
  )}`;

  return (
    <div>
      <Head>
        <title>Airbnb Search</title>
      </Head>

      <Nav placeholder={`${location} | ${range} | ${numOfGuest} guests`} />

      <main className="flex">
        <section className="flex-grow pt-14 px-6 pb-8 ">
          <p className="text-sm">
            300+ stays - {range} - for {numOfGuest} number of guests.
          </p>

          <h1 className="text-3xl font-semibold mt-3 mb-6">
            Stays in {location}
          </h1>

          <div className="hidden lg:inline-flex space-x-3 mb-5 text-gray-600 whitespace-nowrap ">
            <p className="button">Cancellation Flexibility</p>

            <p className="button">Type of Place</p>

            <p className="button">Price</p>

            <p className="button">Rooms and Beds</p>

            <p className="button">More Filters</p>
          </div>

          <div className="flex flex-col space-y-3">
            {searchResult.map((item, i) => (
              <Card
                key={i}
                img={item.img}
                location={item.location}
                description={item.description}
                price={item.price}
                star={item.star}
                title={item.title}
                total={item.total}
              />
            ))}
          </div>
        </section>

        <section className="hidden xl:inline xl:min-w-[600px] ">
          <Map searchResults={searchResult} />
        </section>
      </main>

      <Footer />
    </div>
  );
};

export const getServerSideProps = async () => {
  const searchResult = await fetch("https://links.papareact.com/isz").then(
    (res) => res.json()
  );

  return {
    props: {
      searchResult,
    },
  };
};

export default Search;
