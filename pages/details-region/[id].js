import React from "react";
import Layout from "../../components/layout";
import axios from 'axios';
import Head from "next/head";

const DetailRegion = ({data}) => {
  const styles = {
    info: {
      padding: 20,
      margin: 20,
      border: "3px solid #4ca1af"
    },
    details: {
      padding: 20,
      margin: 20,
      border: "3px solid #4ca1af"
    }
  }

  return (
    <>
    {
      data && (
        <>
        <Head>
           <title>{data.region.nomRegion}</title>
        </Head>
        <Layout>
        <div className="container">
          <h1>{data.region.nomRegion}</h1>
          <br/>
          <h3>Petit resumé : </h3>
          <div style={styles.info}>
            {data.region.description}
          </div>
          <h3>Plus de details :</h3>
          <div style={styles.details}>
            <ul>
              <li>Supercifie : {data.region.superficie}</li>
              <li>Nombres d'habitants : {data.region.nbHabitants}</li>
              <li>Sous regions : {data.region.sousRegions}</li>
            </ul>
          </div>
          <h3>Loisirs :</h3>
          <div style={styles.details}>
            <ul>
              <li>{data.nomLoisir}</li>
            </ul>
          </div>
        </div>
        </Layout>
        </>
      )
    }
    </>
  )
}

export const getStaticPaths = async () => {
  const {data} = await axios.get(`${process.env.API_REGIONS}/regions`);
  const paths = data.map(post => ({
    params: {id : post.id.toString()}
  }))
  console.log(paths);

  return {paths, fallback: true}
}

export const getStaticProps = async ({params}) => {
  const id = params.id;
  const {data} = await axios.get(`${process.env.API_REGIONS}/details/region/${id}`);
  console.log(id);
  return {
    props: {
      data
    }
  }
}

export default DetailRegion;