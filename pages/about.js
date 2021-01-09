import Head from "next/head"

import Layout from '../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>About Me</title>
            <meta name="description" content="About Me" />
        </Head>

        <div id="main" className="alt">
            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>About Me</h1>
                    </header>
                    <span className="image main"><img src="/static/images/pic12.jpg" alt="" /></span>
                    <p>
                        Hi I am Arun Kumar Reddy, A software developer based in Bengaluru with a passion for learning and research. I am 
                        currently working at Flipkart in the Apps Core team. I primarily work on the Android and Mobile Web apps in my 
                        current role at Flipkart. I completed my masters in Information Technology with a specialisation in Robotics from 
                        Indian Institute of Information Technology, Allahabad in 2019. I have a couple of publications in reputed 
                        robotics journals.  My interest and love for programming started out in college by dabbling with building websites
                        for fun and i haven't looked back since.
                    </p>
                    <p>
                        For a little over the past year, I have been involved in multiple projects across the android and web platforms in 
                        this time frame at Flipkart. Working on some very interesting projects with some of the best minds in the industry has 
                        been a great experience. I have greatly improved my platform knowledge as well as refined my design and architectural 
                        knowledge of building great apps and responsive websites.
                    </p>
                    <p>
                        Being a Gooner, I can be found fretting about how Arsenal keeps giving me heart attacks when not busy with the 
                        above. I follow Football and Tennis regularly and try to play when i get time which is admittedly not much. 
                        Usually, a good bit of music helps me relax and stay sane in such a fast paced world. I love listening to The Smiths, 
                        Oasis, U2, The Beatles and a few more older artists. I am a sucker for really good television or movies which don't 
                        often come by, so i have to manage when they do.
                    </p>
                </div>
            </section>
        </div>
    </Layout>
)
