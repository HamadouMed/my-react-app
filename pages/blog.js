import React from "react"
import Layout from '../components/layout'
import Link from "next/link";
import axios from "axios";
import Head from "next/head";


const Blog = ({posts}) => {

  const styles = {
    main: {
      padding: 20,
      margin: 20,
      borderBottom: "1px solid blue"
    },
    img: {
      height: 200,
      width: 300,
      float: "right"
    }
  }

  return (
    <>
      <Head>
        <title>details regions</title>
      </Head>
      <Layout>
        <div className="container">
        <img className="w-100 h-30" src="/dj.jpg" style={styles.img}/>
        {
          posts.map(post => (
            <div style={styles.main} key={post._id}>
              <h1>{post.title}</h1>
              <div>
                <Link href="/blog/[id]" as={`/blog/${post._id}`} passHref>
                  <img src={post.pictures[0]} style={styles.img} />
                </Link>
              </div>
              <div>
                {post.body}
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
  // url dans le fichier .env
  //https://aqueous-meadow-07678.herokuapp.com";
  const {data} = await axios.get(`${process.env.API_POSTS}/api/posts`);
  const posts = data.data;
  return {
    props: {
      posts
    }
  }
}
export default Blog;