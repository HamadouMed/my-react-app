import React from "react";
import Layout from '../components/layout';
import axios from "axios";
import Head from "next/head";


const Home = ({data}) => {
  const styles = {
    main: {
      padding: 20,
      margin: 20,
      borderBottom: "1px solid #DDD"
    },
    img: {
      height: 400,
      width: 400
    }
  }
  return (
   <>
   <Head>
     <title>Accueil</title>
   </Head>
    <Layout>
      {/* <Carousel /> */}
      <div className="container">
      <img className="d-block w-100" src="/dj.jpg" alt="Second slide" style={styles.img}/>
      <br/>
      {data.map(region => (
        <div key={region.code} style={styles.main}>
          {/* <Link href="/region/[code]" as={`/region/${region.code}`} passHref> */}
            <h3>{region.nom}</h3>
          {/* </Link> */}
          <p>Nombre d'habitant : {region.code}</p>
          <p>Superficie : {region.code}</p>
          <p>Nombre d'habitant : {region.code}</p>
          <p>Nombre d'habitant : {region.code}</p>
        </div>
      ))}
      </div>
    </Layout>
   </>
  )
}

export const getServerSideProps = async (context) => {
  // url dans le fichier .env
  //const urlBase = "https://geo.api.gouv.fr";
  const {data} = await axios.get(`${process.env.API_GEO}/regions`);
  return {
    props: {
      data
    }
  }
}
export default Home;