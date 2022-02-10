import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { getAxios } from '../utils/request';

export default function Home({ categories, error = '' }) {
  if (error) return <>{error}</>
  return (
    <div className={styles.container}>
      <Head>
        <title>Yarui Sheying</title>
        <meta name="description" content="Welcome to Yarui Sheying" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>

      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export async function getStaticProps() {
  try {

    const res = await getAxios('/categories');
    const categories = res.data ?? {};
    return {
      props: { categories }
    };
  } catch (error) {
    const { message } = error.toJSON()
    return { props: { error: message } };
  }
}
