import React from "react";
import Layout from "../../components/layout";
import axios from 'axios';
import Head from "next/head";


const DetailRegion = ({data}) => {
  return (
    <>
    {
      data && (
        <>
        <Head>
           <title>{data.description}</title>
        </Head>
        <Layout>
        <div className="container">
          <h1>{data.region.nomRegion}</h1>
          <p><h3>Information sur la ville : </h3><br/>{data.description}</p>
          <p><h3>Plus de details :</h3></p><br/>
          <div>
            <ul>
              <li>Supercifie : {data.region.superficie}</li>
              <li>Nombres d'habitants : {data.region.nbHabitants}</li>
              <li>Sous regions : {data.region.sousRegions}</li>
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