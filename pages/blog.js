import Head from "next/head"
import Link from 'next/link'
import Layout from '../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>Blog</title>
            <meta name="description" content="Blog" />
        </Head>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Coming soon</h1>
                    </header>

                    <h2 id="content"> Watch out for this space...</h2>
                </div>
            </section>

        </div>
    </Layout>
)
