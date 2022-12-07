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
    {/* <div className="image-wrapper"> */}
    <Image className='image-wrapper' src="/sokin.png" height={100} width={100} alt="banner" />
    {/* </div> */}
    </Layouts>
  )
}
export default Home