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
                        Outside of Tech, I am very passionate about Football and Tennis. My Music Interests are primarily from the last
                        century while I enjoy good television on weekends. 
                    </p>

                    <h3>App Development</h3>
                    <p>
                        I have developed a passion for app development and work mostly on the Android platform in my current role at 
                        Flipkart. Designing the App Architecture is my favorite part about App Development. I am well versed with
                        Android Architecture Components and the various libraries in the ecosystem. I am a massive fan of Kotlin
                        Coroutines for async programming and want to try out Jetpack Compose for declarative UI on Android.
                        React Native is a fantastic framework for building cross platform applications for pure UI and with the 
                        introduction of Hermes has become even more light weight and faster. Recently, I have started experimenting 
                        with Flutter and my initial experiences have been positive despite Dart being the language of choice
                    </p>
                    <h3>Web Development</h3>
                    <p>
                        Similar to App Development, I enjoy building websites for the web and have worked on the mobile website at Flipkart.
                        I very much believe in the concept of UI being a function of state and declarative UI made popular by React. It is
                        great to see the app world taking inspiration and coming up with Jetpack Compose for Android and Swift UI for IOS.
                        Progressive Web Applications are the future as the web evolves to stay close to their mobile counterparts.
                        I am well versed with the Browser and Javascript fundamentals as well as libraries like Redux for state management
                        at scale. I very much like the Next.js framework which builds on top of react and gives much needed features such 
                        as server side rendering and static site generation out of the box.
                    </p>
                    <h3>Robotics</h3>
                    <p>
                        I have a lot of interest in the field of robotics having worked on multiple projects as part of my masters studies
                        as well as an internship. My primary interests include applications of reinforcement learning for training robotic
                        agents to perform complex tasks, planning strategies for navigation and applications of mobile robots in social 
                        environments. ROS is the perfect middleware / framework which does most of the heavy lifting allowing the developers 
                        to focus more on the business logic.   
                    </p>
                    <h3>Artificial Intelligence / Deep Learning</h3>
                    <p>
                        It has been some time, but i still retain a keen interest in the advances being made in AI / Deep Learning techniques
                        which have helped solve a lot of complex problems this decade. My areas of interest include convolutional neural 
                        networks, recurrent networks and sequence to sequence models for time series data and generative models such as 
                        GANs. It is hard to keep up in this field as the developments are rapid and there isn't enough time to read up 
                        about all the new advances such as Transformers, One Shot Learning, Meta Learning etc.
                    </p>
                </div>
            </section>

        </div>
    </Layout>
)
