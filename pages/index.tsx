import Image from 'next/image'
import { PageLayout } from '@/layouts'
import { IAPIResponse } from '@/interfaces/IApiResponse'

export default function Home({ articles }: IAPIResponse) {
  return (
    <PageLayout title="Home - NewsApp">
      <main className="grid content-start h-screen px-8">
        <h1 className="text-3xl font-bold">News App 🗞️</h1>
        <h3>hey there!</h3>
        {articles.length === 0 && <p>No articles...</p>}
        {articles.length > 0 &&
          articles.map((article, index) => (
            <article key={article.url}>
              <h2>{article.title}</h2>
              <Image
                src={article.urlToImage}
                alt={`Image for the article ${article.title}`}
                width={600}
                height={300}
                layout="responsive"
                priority={index < 2}
              />
              <p>{article.description}</p>
              <a href={article.url}>Read more</a>
            </article>
          ))}
      </main>
    </PageLayout>
  )
}

// N requests -> executes 1 time on build time / page reload
export async function getStaticProps() {
  const { articles }: IAPIResponse = await fetch(
    `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.NEWS_API_KEY}`
  ).then((response) => response.json())
  return {
    props: {
      articles,
    },
  }
}

// N requests -> executes N times
// useful for extremely on real time data
// has way too much dynamic data

// export async function getServerSideProps() {
//   const { articles } = await fetch(
//     `https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${process.env.NEWS_API_KEY}`
//   ).then((response) => response.json())
//   return {
//     props: {
//       articles,
//     },
//   }
// }
