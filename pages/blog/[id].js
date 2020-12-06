import React from "react";
import Layout from "../../components/layout";
import axios from 'axios';
import Head from "next/head";


const Post = ({data}) => {
  return (
    <>
    {
      data && (
        <>
        <Head>
           <title>{data.title}</title>
        </Head>
        <Layout>
          <h1>{data.title}</h1>
          <div>
            <img src={data.pictures[0]} />
          </div>
          <p>{data.description}</p>
        </Layout>
        </>
      )
    }
    </>
  )
}

export const getStaticPaths = async () => {
  // url dans le fichier .env
 // const url = "https://aqueous-meadow-07678.herokuapp.com";
  const {data} = await axios.get(`${process.env.API_POSTS}/api/posts`);
  const posts = data.data;
  const paths = posts.map(post => ({
    params: {id : post._id}
  }))

  return {paths, fallback: true}
}

export const getStaticProps = async ({params}) => {
  const id = params.id;
  // url dans le fichier .env
 // const url = "https://aqueous-meadow-07678.herokuapp.com";
  const {data} = await axios.get(`${process.env.API_POSTS}/api/post/${id}`);
  return {
    props: {
      data
    }
  }
}

export default Post;