import React from "react";
import Layout from '../components/layout';
import axios from "axios";
import Head from "next/head";


const Home = ({data}) => {
  const styles = {
    main: {
      padding: 20,
      margin: 20,
      border: "2px solid #4ca1af"
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
        <div key={region.id} style={styles.main}>
            <h3>Nom de la ville : {region.nomRegion}</h3>
          <p>Superficie : {region.superficie} </p>
          <p>Nombre d'habitant : {region.nbHabitants}</p>
        </div>
      ))}
      </div>
    </Layout>
   </>
  )
}

export const getServerSideProps = async (context) => {
  const {data} = await axios.get(`${process.env.API_REGIONS}/regions`);
  return {
    props: {
      data
    }
  }
}
export default Home;