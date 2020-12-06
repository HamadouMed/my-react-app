import React from "react"
import Layout from '../components/layout'
import Head from "next/head";


const Apropos = () => {

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
        <title>a propos</title>
      </Head>
      <Layout>
        <div className="container">
        <img className="w-100 h-30" src="/dj.jpg" style={styles.img}/>
            <div style={styles.main}>
              <h1>A propos</h1>
              <p>
              What is Lorem Ipsum?
              Lorem Ipsum is simply dummy text of the printing and typesetting industry.
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to make a type specimen book.
              It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
              It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages,
               and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
              </p>
            </div>
        </div>
      </Layout>
    </>
  )
}

export default Apropos;