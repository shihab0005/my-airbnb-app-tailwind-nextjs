import { useRouter } from "next/router";
import React from "react";
import Footer from "../components/footer/Footer";
import Header from "../components/header/Header";
import { format } from "date-fns";
import InfoCard from "../components/infoCard/InfoCard";

export default function Search({ searchResult }) {
  console.log(searchResult);
  const router = useRouter();
  const { location, startDate, endDate, noOfGuest } = router.query;
  console.log(router.query);
  const formatedStartDate = format(new Date(startDate), "dd MMM yy");
  const formatedEndtDate = format(new Date(endDate), "dd MMM yy");
  const range = `${formatedStartDate} - ${formatedEndtDate}`;
  return (
    <>
      <Header palceholder={`${location} | ${range} | ${noOfGuest}`} />
      <main className="flex">
        <section className="flex-grow pt-14 px-6">
          <p className="text-sm">
            300+ Stays
            <span className="text-lg font-medium text-red-500 px-3">
              {range}
            </span>{" "}
            for
            <span className="text-lg font-medium text-red-500 px-3">
              {noOfGuest}
            </span>{" "}
            number of guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stays in <span className="text-red-500">{location}</span>
          </h1>
          <div className="hidden lg:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="button">Cancellatopn Flexibility</p>
            <p className="button">Type Of Place</p>
            <p className="button">Price</p>
            <p className="button">More Filters</p>
          </div>
          <div className="flex flex-col">
            {searchResult.map((item) => (
              <InfoCard item={item} key={item?.img} />
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}

export async function getServerSideProps() {
  const searchResult = await fetch("https://www.jsonkeeper.com/b/5NPS").then(
    (res) => res.json()
  );
  return {
    props: {
      searchResult,
    },
  };
}
