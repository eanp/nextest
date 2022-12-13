import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Layouts from '../components/Layouts'
 const Home = () =>  {
  return (
    <Layouts>
    <div className={styles.container}>
        <Link href={"/home"}>home</Link>
        <Link href={"/product/1"}>product</Link>
        <Link href={"/about"}>about</Link>
    </div>
    <div className={styles.imageWrapper}>
      <Image  src="/sokin.png" alt="banner" layout="fill" objectFit="contain" />
    </div>
    </Layouts>
  )
}
export default Home