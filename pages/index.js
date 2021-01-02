import Link from 'next/link'

import Layout from '../components/Layout'
import Banner from '../components/Banner'

export default () => (
    <Layout>
        <div>
            <Banner />

            <div id="main">
                <section id="one" className="tiles">
                    <article style={{backgroundImage: `url('/static/images/pic01.jpg')`}}>
                        <header className="major">
                            <h3>About</h3>
                            <p>Read more about me</p>
                        </header>
                        <Link href="/about"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic02.jpg')`}}>
                        <header className="major">
                            <h3>Projects</h3>
                            <p>Check out my projects </p>
                        </header>
                        <Link href="/projects"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic03.jpg')`}}>
                        <header className="major">
                            <h3>Interests</h3>
                            <p>Read up about my interests</p>
                        </header>
                        <Link href="/interests"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic04.jpg')`}}>
                        <header className="major">
                            <h3>Skills</h3>
                            <p>Take a Peek at my skillset</p>
                        </header>
                        <Link href="/skills"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic05.jpg')`}}>
                        <header className="major">
                            <h3>Publications</h3>
                            <p>Find my publications</p>
                        </header>
                        <Link href="/publications"><a className="link primary"></a></Link>
                    </article>
                    <article style={{backgroundImage: `url('/static/images/pic06.jpg')`}}>
                        <header className="major">
                            <h3>Blog</h3>
                            <p>Read my Blog Posts</p>
                        </header>
                        <Link href="/blog"><a className="link primary"></a></Link>
                    </article>
                </section>
                {/*<section id="two">
                    <div className="inner">
                        <header className="major">
                            <h2>Massa libero</h2>
                        </header>
                        <p>Nullam et orci eu lorem consequat tincidunt vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus pharetra. Pellentesque condimentum sem. In efficitur ligula tate urna. Maecenas laoreet massa vel lacinia pellentesque lorem ipsum dolor. Nullam et orci eu lorem consequat tincidunt. Vivamus et sagittis libero. Mauris aliquet magna magna sed nunc rhoncus amet pharetra et feugiat tempus.</p>
                        <ul className="actions">
                            <li><Link href="/landing"><a className="button next">Get Started</a></Link></li>
                        </ul>
                    </div>
                </section>*/}
            </div>

        </div>
    </Layout>
)
