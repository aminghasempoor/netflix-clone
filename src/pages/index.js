import Head from "next/head";
import Header from "@/components/Header/Header";
import NavBar from "@/components/NavBar/NavBar";
import Movies from "@/components/Movies/Movies";
import Request from "@/utils/Request";

export default function Home({ result }) {
  console.log(result);
  return (
    <div>
      <Head>
        <title>Netflix</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <NavBar />
      <Movies result={result} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const genre = context.query.genre;
  const request = await fetch(
    // `${process.env.baseURL}${
    //   requests[genre]?.url || requests.fetchComedyMovies.url
    // }`
    "http://192.168.1.115:8000/api"
  ).then((res) => res.json());
  // const result = request.comedy_movies;
  const result = request.movies;
  return {
    props: { result }, // will be passed to the page component as props
  };
}
