import Head from "next/head"
import Link from 'next/link'

import Layout from '../components/Layout'
import BannerLanding from '../components/BannerLanding'

export default () => (
    <Layout>
        <Head>
            <title>Projects</title>
            <meta name="description" content="Projects" />
        </Head>

        <div>
            <BannerLanding header={"Projects"}/>

            <div id="main">
                <section id="two" className="spotlights">
                    <section>
                        <Link href="https://github.com/arunkumar-reddy/Collision-Avoidance">
                            <a className="image"><img src="/static/images/deeprl.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Deep Reinforcement Learning for Socially Acceptable Robot Navigation</h3>
                                </header>
                                <p>
                                    Socially acceptable navigation is designed as a deep reinforcement learning problem with a convolutional 
                                    neural network is defined as the learning agent. The customised network maps the robot sensor readings, 
                                    a goal destination and the positions of moving obstacles to a predefined action space. Through Deep Q-Learning, 
                                    the agent is trained to learn the utilities of the action space for a given state. The reward function is 
                                    designed in order to favour a socially acceptable navigation strategy.
                                </p>
                                <p>
                                    Python | ROS | Tensorflow | Gazebo
                                </p>
                                <ul className="actions">
                                    <li><Link href="https://github.com/arunkumar-reddy/Collision-Avoidance"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="https://github.com/Flipkart/recyclerlistview">
                            <a className="image"><img src="/static/images/rlv.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Contributions to RecyclerListView</h3>
                                </header>
                                <p>
                                    RecyclerListView is a high performance listview for react native and the web, developed at Flipkart.
                                    Built a custom Android View with an algorithm to solve the layout shifting issue that occurs on first 
                                    render in case of non-deterministic mode. The Custom View Wrapper runs a layout correction algorithm 
                                    by hooking into the view lifecycle methods and corrects the positions of the list items based on their 
                                    actual sizes in O(n) time to provider a smooth first render.
                                    Built a capability for RecyclerListView to be rendered server side for the web by eliminating the initial 
                                    blank render.
                                </p>
                                <p>
                                    Java | Typescript | Android | React Native | React Native Web
                                </p>
                                <ul className="actions">
                                    <li><Link href="https://github.com/Flipkart/recyclerlistview"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="https://github.com/arunkumar-reddy/Collision-Avoidance">
                            <a className="image"><img src="/static/images/pioneer.png" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Social Cues In Autonomous Navigation of Indoor Mobile Robots</h3>
                                </header>
                                <p>
                                    Social cues typically used by humans while navigating in pedestrian rich environments, are modelled in
                                    autonomous navigation of mobile robots by extending existing reactive strategies. The potential field
                                    techniques and gap finding methods are extended to introduce social cues. Incrementally, a hybrid novel
                                    strategy is introduced by combining the both techniques and shown to outperform the previous techniques.
                                    This work was published in the International Journal of Social Robotics.  
                                </p>
                                <p>
                                    Python | ROS | Mobilesim | Pioneer LX Robot
                                </p>
                                <ul className="actions">
                                    <li><Link href="https://github.com/arunkumar-reddy/Collision-Avoidance"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/android.png" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Improving Android Cold Start and Background Work with Work Manager</h3>
                                </header>
                                <p>
                                    As part of performance improvements, Worked on improving the cold start times of the Flipkart Retail 
                                    Android App. Profiled and Identified items to offload work off the main thread to background worker 
                                    threads. Employed lazy initialisation and Eager initialisation in background threads for some of the
                                    app dependencies to improve the cold start by 200ms. Integrated Work Manager API into the app for handling
                                    background tasks.
                                </p>
                                <p>
                                    Kotlin | Java | Android
                                </p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="https://github.com/arunkumar-reddy/Image-Captioning">
                            <a className="image"><img src="/static/images/captioning.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Generating Meaningful Captions for Images using Attention Mechanism</h3>
                                </header>
                                <p>
                                    A deep neural network is trained to generate meaningful captions for images through attention mechanism.
                                    The network is two-fold with the first part consisting of a pretrained convolutional neural network used
                                    to extract features from the images. These features are then fed to the second part, a bidirectional
                                    recurrent neural network which generates the textual captions for the image. The network uses attention
                                    mechanism to focus the on parts of the image for each of the words it generates. The implementation is
                                    based on "Show, Attend and Tell. Neural Image Caption Generation with Visual Attention".
                                </p>
                                <p>
                                    Python | Tensorflow | MSCOCO Dataset
                                </p>
                                <ul className="actions">
                                    <li><Link href="https://github.com/arunkumar-reddy/Image-Captioning"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic08.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Product Exchange Feature on Three Platforms with a Single Codebase</h3>
                                </header>
                                <p>
                                    As part of the Apex team at Flipkart, Worked with on revamping the product exchange flow of Flipkart on 
                                    Android, IOS and Mobile Web using the in-house multi widget framework. The framework supports running a 
                                    single codebase on all the three platforms using React Native and React Native Web. Worked on building a
                                    couple of screens and the entire tracking flow for the project. This was my first exposure to building 
                                    a feature at such scale.
                                </p>
                                <p>
                                    Typescript | React Native | React Native Web
                                </p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/sortingrobot.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Automating the Sorting of Packages in Warehouses with Mobile Robots</h3>
                                </header>
                                <p>
                                    As part of an Internship at Addverb Robotics, Worked on a multi robot system for sorting of packages
                                    in a warehouse. The system is fully automated starting from the robot receiving the package from a 
                                    human helper, figuring out the destination of the drop from the package's bar code and navigating to
                                    the drop location. The robots can even check for low battery levels and move to the charging bay for
                                    recharged. A traffic controlling mechanism ensures that the robots can avoid clogging at junctions and 
                                    plan their paths taking into account the traffic from other robots.
                                </p>
                                <p>
                                    Python | ROS | Matplotlib
                                </p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic09.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Generating Fake Celebrity Faces using Generative Adversarial Networks</h3>
                                </header>
                                <p>
                                    A generative adversarial network is trained on a celebrity faces dataset to generate real looking 
                                    images of fake celebrities. The GAN consists of a generator which produces the images and a 
                                    discriminator which classifies the images as being real or fake. The generator and discriminator
                                    are trained adversarially and thereby incrementally improving each other's performance. Both the 
                                    generator and discriminator are modelled as deep convolutional networks. The implementation is 
                                    based on "Unsupervised Representation Learning with Deep Convolutional Neural Networks".
                                </p>
                                <p>
                                    Python | Tensorflow | LFW Dataset
                                </p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic09.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>A Multi Threaded Static Server using Rust</h3>
                                </header>
                                <p>
                                    Recently, I have started to learn the Rust programming language. The promises of performance combined
                                    with memory management and safe concurrency made me want to understand how Rust helps to solve these 
                                    fundamental problems. The learning curve is steep and it took me some time to become familiar with Rust's
                                    ownership model. Once familiar, I built a multi threaded server in safe rust to serve static files. 
                                    A thread pool based implementation is used to achieve concurrency.
                                </p>
                                <p>
                                    Rust
                                </p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                    <section>
                        <Link href="/generic">
                            <a className="image"><img src="/static/images/pic08.jpg" alt="" /></a>
                        </Link>
                        <div className="content">
                            <div className="inner">
                                <header className="major">
                                    <h3>Performance Monitoring for Mobile Web with Firebase</h3>
                                </header>
                                <p>
                                    As part of performance tracking in the real world, Integrated the firebase performance SDK with the
                                    mobile website. Defined the core RUM performance metrics to be monitored such as FCP, LCP and FID.
                                    The Performance Observer APIs were used to extract this information on page loads and create custom
                                    traces with useful tracking information and push them to firebase for monitoring.
                                </p>
                                <p>
                                    Javascript | Typescript | Web | Firebase
                                </p>
                                <ul className="actions">
                                    <li><Link href="/generic"><a className="button">Learn more</a></Link></li>
                                </ul>
                            </div>
                        </div>
                    </section>
                </section>
            </div>

        </div>
    </Layout>
)
