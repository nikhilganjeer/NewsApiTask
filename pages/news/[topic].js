import NavBar from '../../components/navbar'
import HeadTag from '../../components/head-tag'
import Link from 'next/link'
import {useRouter} from 'next/router'

const Business = ({ data }) => {
  const router = useRouter();
  return (
  <div>
    <HeadTag />
    <NavBar />
    {data.articles.map(item => (
      <div>
        <Link href={item.url}>
        <h1>{item.title}</h1>
        </Link>

        <p>{item.description}</p>
        <img src={item.urlToImage}/>
        <p>{item.author}</p>  
        <p>{item.source.id}</p>     
        <p>{item.source.name}</p>   
      </div>
    ))}
    {/* <h2>{router.query.topic}</h2> */}
  </div> 
)}

Business.getInitialProps = async(ctx) => {
  const {query} = ctx;
  console.log(ctx)
  const res = await fetch(`https://newsapi.org/v2/top-headlines/?country=us&apiKey=85a2aee1a68b4ebea4ad678ef23576e3&category=`+ query.topic)
  const data = await res.json()
  return {
    data: data
  }
}

export default Business