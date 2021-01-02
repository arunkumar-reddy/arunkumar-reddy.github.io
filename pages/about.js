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
                        robotics journals.
                    </p>
                    <p>
                        My interest and love for programming started out in college by just dabbling with building simple websites for fun.
                        Soon After, I got very interested in the developments that were happening in the AI world in Computer Vision, 
                        NLP, Generative Models etc. I worked on a bunch of projects involving building ML/DL models from scratch and then
                        training them using the GPUs from our labs. It was a very productive and optimistic period which resulted in a lot 
                        of learning until i eventually came to face with the limitations of these techniques. I decided to move on as i had 
                        to focus more on robotics as part of my masters studies. I still try to keep up to date with the advancements by 
                        reading new papers but it can be so hard due to nature of how these things move so quickly.    
                    </p>
                    <p>
                        As part of my masters thesis, I worked on designing a socially acceptable navigation strategy for mobile robots 
                        in pedestrian rich environments. Over the course of multiple iterations, We managed to get it to work successfully
                        on a real world Pioneer LX robot. This was a wonderful learning experience and gave me an incredible insight into
                        what a futuristic world might look like and what problems need to be solved to get there. It also resulted in a 
                        couple of publications which you can checkout on my publications page.
                    </p>
                    <p>
                        For a little over a year, I have been working at Flipkart, at first in the Cross Platform team and then the Apps Core 
                        team. I have been involved in multiple projects across the android and web platforms over this time frame. Working 
                        on some very interesting projects with some of the best minds in the industry has been a great experience. I have
                        greatly improved my platform knowledge of Android, Web and React Native as well as refined my design and 
                        architectural knowledge of building great apps and responsive websites.
                    </p>
                    <p>
                        Being a Gooner, I can be found fretting about how Arsenal keeps giving me heart attacks when not busy with the 
                        above. I follow Football and Tennis regularly and try to play when i get time which is admittedly not much. 
                        Usually, a good bit of music helps me relax and stay sane. I love listening to The Smiths, Oasis, U2, The Beatles 
                        and a few more older artists. I am a sucker for really good TV shows which don't often come by, so i have to 
                        manage when they do. 
                    </p>
                </div>
            </section>
        </div>
    </Layout>
)
