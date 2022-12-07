import styles from '../../styles/Recipe.module.css'
import { useRouter } from 'next/router'

export async function getServerSideProps(){
    const res = await
    fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await res.json();
    return{
      props: {
        data
      },
    }
  }
  const Recipe = ({data}) => {
    const router = useRouter()
    return (
      <div className={styles.container}>
        {data.map(item=>
            <div className={styles.card} key={item.id} onClick={()=>router.push(`/recipe/${item.id}`)}
            >
              <h1>{item.title}</h1>
              <p>{item.body}</p>
              </div>
        )}
      </div>
    )
  }
  
  export default Recipe