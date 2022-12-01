/* eslint-disable jsx-a11y/alt-text */
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";
import Head from 'next/head'

const Slug = ({ data }) => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <>
      <Head>
        <title>{`Weather in ${slug}`}</title>
        <meta name="description" content="Live  Weather Generated by OpenWeather API " />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="flex justify-center">
      <div className="mx-2 lg:mx-20 relative flex flex-col justify-between max-w-[500px] w-full h-[90vh] p-4 text-gray-300 z-10">
      {/* Top */}

      <div className="relative flex justify-between pt-12">
        <div className="flex flex-col items-center justify-center">
          <Image
            src={`http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`}
            alt="/"
            width="100"
            height="100"
          />
          <p className="lg:text-4xl">{data.weather[0].main}</p>
        </div>
        <p className="flex text-7xl lg:text-9xl">
          {data.main.temp.toFixed(0)}°<span className="text-6xl">C</span>
        </p>
      </div>

      {/* bottom */}

      <div className="bg-black/50 relative p-8 rounded-md mb-4">
        <p className="text-2xl text-center pb-6">Weather in {data.name}</p>
        <div className="flex justify-between text-center pb-4">
          <div>
            <p className="font-bold text-2xl">{data.main.feels_like.toFixed(0)}°<span className="">C</span></p>
            <p className="lg:text-xl">Feels Like</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.main.humidity}%</p>
            <p className="lg:text-xl">Humidity</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.wind.speed.toFixed(0)} Km/h</p>
            <p className="lg:text-xl">Winds</p>
          </div>
        </div>
        <div className="flex justify-between text-center">
          <div>
            <p className="font-bold text-2xl">{data.main.temp_min.toFixed(0)}°<span className="">C</span></p>
            <p className="lg:text-xl">Min</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.main.temp_max.toFixed(0)}°<span className="">C</span></p>
            <p className="lg:text-xl">Max</p>
          </div>
          <div>
            <p className="font-bold text-2xl">{data.main.pressure}</p>
            <p className="lg:text-xl">Pressure</p>
          </div>
        </div>
      </div>

    </div>
    </div>
    </>
  );
};

export async function getServerSideProps(context) {
  const { slug } = context.query;
  let obj = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?q=${slug}&units=metric&appid=e76d7ffdfc4ecd1ee15be0b8eca92a9e`
  );
  const data = await obj.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}

export default Slug;
