import Head from 'next/head'

export default function Home({articles}) {
  return (
    <div className={styles.container}>
   <Head>
    <title>hewwo</title>
    <meta>so cool tags</meta>
   </Head>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=5`)
  const articles = await res.json()
  return {
    props: {
      articles,
    },
  }
}