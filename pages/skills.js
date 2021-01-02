import Head from "next/head"
import Layout from '../components/Layout'

export default () => (
    <Layout>
        <Head>
            <title>Skills</title>
            <meta name="description" content="Skills" />
        </Head>

        <div id="main" className="alt">

            <section id="one">
                <div className="inner">
                    <header className="major">
                        <h1>Skills</h1>
                    </header>

                    <h3 id="content">Languages</h3>
                    <ul>
                        <li>Kotlin - Using Extensively at work</li>
                        <li>Typescript - Using Extensively at work</li>
                        <li>Java - Working Proficieny</li>
                        <li>Javascript - Working Proficieny</li>
                        <li>Python - Have used Extensively in the past</li>
                        <li>C++ - Have used Extensively for Competitive Programming</li>
                        <li>Rust - Beginner</li>
                    </ul>
                    

                    <h3 id="content">Libraries and Frameworks</h3>
                    <h4>Android</h4>
                    <ul>
                        <li>Kotlin Coroutines - For Concurrency and Asynchronous Behavior</li>
                        <li>Retrofit, OkHttp - For Networking</li>
                        <li>SQLDelight, SQLite - For Persistence</li>
                        <li>Work Manager - For Background Tasks</li>
                        <li>Power Mockito - For Unit Testing and Mocking</li>
                    </ul>

                    <h4>React Native and Web</h4>
                    <ul>
                        <li>React - Declarative UI Components</li>
                        <li>Next.js - A framework on top of React with SSR and Static Site generation out of the box</li>
                        <li>Redux - State Management</li>
                        <li>React Router - For Navigation</li>
                        <li>Node.js - Server Side Javascript Runtime</li>
                        <li>Jest and Enzyme - Mocking and Unit testing</li>
                    </ul>

                    <h4>Robotics</h4>
                    <ul>
                        <li>ROS - Middleware for Robotics Applications</li>
                        <li>Gazebo - A general purpose 3D Simulator</li>
                    </ul>

                    <h4>Artificial Intelligence / Machine Learning</h4>
                    <ul>
                        <li>Tensorflow - Computation Graphs</li>
                        <li>Numpy - Numeric Computation</li>
                        <li>Matplotlib - Visualization and Plotting</li>
                        <li>OpenCV - Computer Vision</li>
                    </ul>
                    
                </div>
            </section>

        </div>
    </Layout>
)
