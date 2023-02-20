import type { NextPage } from "next";
import Head from "next/head";
import Banner from "../components/banner/Banner";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import LargeCard from "../components/largeCard/LargeCard";
import MediumCard from "../components/mediumCard/MediumCard";
import SmallCard from "../components/smallCard/SmallCard";

const data = [
  {
    id: 1,
    image: "/images/img1.jpg",
    location: "Dhaka",
    distance: "4.5-hour drive",
  },
  {
    id: 2,
    image: "/images/img2.jpg",
    location: "Dhaka",
    distance: "4.5-hour drive",
  },
  {
    id: 3,
    image: "/images/img3.jpg",
    location: "Dhaka",
    distance: "4.5-hour drive",
  },
  {
    id: 4,
    image: "/images/img4.jpg",
    location: "Dhaka",
    distance: "4.5-hour drive",
  },
  {
    id: 5,
    image: "/images/img1.jpg",
    location: "Dhaka",
    distance: "4.5-hour drive",
  },
  {
    id: 6,
    image: "/images/img3.jpg",
    location: "Dhaka",
    distance: "4.5-hour drive",
  },
];

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Airbnb</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {data.map((item) => (
              <SmallCard item={item} key={item.id} />
            ))}
          </div>
        </section>

        <section>
          <h2 className="text-4xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-5 overflow-scroll scrollbar-hide p-3 -ml-3">
            {data.slice(0, 4).map((mitem) => (
              <MediumCard mitem={mitem} key={mitem.id} />
            ))}
          </div>
        </section>

        <LargeCard
          img="/images/img2.jpg"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"
        />
      </main>
      <Footer />
    </>
  );
};

export default Home;
