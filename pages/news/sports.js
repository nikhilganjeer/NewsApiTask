import NavBar from '../../components/navbar'
import HeadTag from '../../components/head-tag'
import Link from 'next/link'

export async function getStaticProps() {
  const res = await fetch(`https://newsapi.org/v2/top-headlines/?country=us&apiKey=85a2aee1a68b4ebea4ad678ef23576e3&category=sports`)
  const data = await res.json()
  return {
    props: {
      data,
    },
  }
}

const Sports = ({ data }) => (
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
  </div>
)

export default Sports