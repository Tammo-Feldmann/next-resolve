import Head from 'next/head'
import data from '../public/placeholder.json'

export const Home: React.FC = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Index Resolution</title>
      <link rel="icon" href="/favicon.svg" />
    </Head>

    <main>
      <div>
        {data.tokens.map((token) => (
          <>
            <span
              style={{
                width: '14px',
                height: '4px',
                background: 'green',
                position: 'absolute',
              }}
            ></span>
            <span key={token.idx}>{`${token.value} `}</span>
          </>
        ))}
      </div>
    </main>
  </div>
)

export default Home
