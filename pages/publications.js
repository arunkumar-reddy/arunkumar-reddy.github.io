import Head from "next/head"
import Link from 'next/link'
import Layout from '../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>Publications</title>
            <meta name="description" content="Publications" />
        </Head>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Publications</h1>
                    </header>

                    <h2 id="content">1. Social Cues in the Autonomous Navigation of Indoor Mobile Robots</h2>
                    <p>Arun Kumar Reddy, Vaibhav Malviya, Rahul Kala - International Journal of Social Robotics</p>
                    <p><Link href="/static/pdfs/soro.pdf"><a><span> PDF Link </span></a></Link></p>

                    <h2 id="content">2. Autonomous Social Robot Navigation using a Behavioral Finite State Social Machine</h2>
                    <p>Vaibhav Malviya, Arun Kumar Reddy, Rahul Kala - Robotica</p>
                    <p><Link href="/static/pdfs/robotica.pdf"><a><span> PDF Link </span></a></Link></p>
                </div>
            </section>

        </div>
    </Layout>
)
