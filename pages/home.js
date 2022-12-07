export async function getStaticProps(){
  const res = await
  fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();
  return{
    props: {
      data
    },
    revalidate: 30,
  }
}
const home = ({data}) => {
  return (
    <div>
      {data.map(item=>
          <li key={item.id}>{item.name}</li>
        
      )}
    </div>
  )
}

export default home