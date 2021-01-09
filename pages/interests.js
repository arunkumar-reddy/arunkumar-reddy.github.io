import Head from "next/head"
import Layout from '../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>Interests</title>
            <meta name="description" content="Interests" />
        </Head>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Interests</h1>
                    </header>

                    <p> 
                        I have a varied set of interests that i follow and try to stay up to date with which can be pretty hard with how
                        fast the world moves. I'm always open to and interested in learning new technologies because learning is fun. 
                        Outside of Tech, I am very passionate about Football and Tennis. I have been an Arsenal Fan for more than 10 years
                        and one of my dreams is to visit the Emirates Stadium. I enjoy listening to 80s and 90s music such as The Smiths, 
                        Oasis, U2 etc. My favorite TV shows are The Leftovers and Bojack Horseman which are must watch.
                    </p>

                    <h3>App Development</h3>
                    <p>
                        I have developed a passion for app development and work mostly on the Android platform in my current role at 
                        Flipkart. I am well versed with Android Architecture Components and the various libraries in the ecosystem. 
                        Kotlin Coroutines is fantastic for async programming and have been wanting to try out Jetpack Compose for 
                        declarative UI on Android. React Native is a fantastic framework for building cross platform applications 
                        for pure UI and with the introduction of Hermes has become even more light weight and faster. Recently, I 
                        have started experimenting with Flutter and my initial experiences have been positive despite Dart being 
                        the language of choice
                    </p>
                    <h3>Web Development</h3>
                    <p>
                        Similar to App Development, I enjoy building websites for the web and have worked on the mobile website at 
                        Flipkart. Declarative UI with reusable components made popular by react is definitely the way forward.
                        Progressive Web Applications are the future of the web as the web evolves to stay close to their mobile 
                        counterparts. I am well versed with the Browser and Javascript fundamentals as well as libraries like Redux for state management
                        at scale. The Next.js framework which builds on top of react and gives much needed features such 
                        as server side rendering and static site generation out of the box is very interesting as well.
                    </p>
                    <h3>Robotics</h3>
                    <p>
                        I have a lot of interest in the field of robotics having worked on multiple projects as part of my masters studies
                        as well as an internship with Addverb Robotics. As part of my masters thesis, I worked on designing a socially acceptable 
                        navigation strategy for mobile robots in pedestrian rich environments. This work was also published in a couple of robotics 
                        journals which you can check out on my publications page. My primary interests include applications of reinforcement learning 
                        in robotics, planning strategies for navigation and applications of mobile robots in social environments.
                    </p>
                    <h3>Artificial Intelligence / Deep Learning</h3>
                    <p>
                        I have worked on a bunch of projects in Reinforcement Learning, Computer vision, Generative Models, Evolutionary algorithms 
                        etc. with some of them involving building and training ML/DL models from scratch. You can find more details around these 
                        in my projects page. There was a lot of learning from these in terms of the potential of these techniques but also their
                        limitations. I decided to move on as i had to focus more on robotics as part of my masters studies and later on began
                        working at Flipkart. I still try to keep up to date by watching out for advances and solutions to existing limitations 
                        such as Transformers, One Shot Learning, Meta Learning etc.
                    </p>
                </div>
            </section>

        </div>
    </Layout>
)
