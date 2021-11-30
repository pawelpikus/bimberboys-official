import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.scss'
import { Layout } from '../components'


const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Bimber Boys - Official Page</title>
        <meta name="description" content="Oficjalna strona zespołu Bimber Boys... czyli retro and folk band. Naszą specjalnością są stare, niezapomniane przeboje w akustycznych aranżacjach. Inspirują nas szlagiery dwudziestolecia międzywojennego, miejski folk z różnych stron świata oraz... poetyckie ballady." />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className="title">Home page</h1>
      </Layout>
    </div>
  )
}

export default Home
