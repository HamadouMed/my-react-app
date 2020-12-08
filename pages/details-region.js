import React from "react"
import Layout from '../components/layout'
import Link from "next/link";
import axios from "axios";
import Head from "next/head";


const Blog = ({data}) => {

  const styles = {
    main: {
      padding: 20,
      margin: 20,
      border: "2px solid #4ca1af"
    },
    img: {
      height: 200,
      width: 300,
      float: "left"
    }
  }

  return (
    <>
      <Head>
        <title>details regions</title>
      </Head>
      <Layout>
        <div className="container">
        <h4>"Cliquez sur la photo pour plus d'information"</h4>
        {
          data.map(detail => (
            <div style={styles.main} key={detail.id}>
              <h1>{detail.region.nomRegion}</h1>
              <div>
                { 
                <Link href="/details-region/[id]" as={`/details-region/${detail.region.id}`} passHref>
                  <img src={detail.region.pathPictures} style={styles.img} />
                </Link> 
                }
              </div>
              <div>
                {detail.region.description}
              </div>
            </div>
          ))
        }
        </div>
      </Layout>
    </>
  )
}

export const getStaticProps = async (context) => {
  const {data} = await axios.get(`${process.env.API_REGIONS}/details/regions`);
  return {
    props: {
      data
    }
  }
}
export default Blog;