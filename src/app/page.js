"use client"

import Slider from './components/Slider/Slider';
import Header from './components/Header/Header';
import '../lib/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Analytics } from "@vercel/analytics/react"

const fadeTopDown = {
  hidden: { opacity: 0, y: -50 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, 
};

export default function Home() {

  return (
    <>
      
      <Header />
      <motion.main
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }} 
        variants={fadeTopDown} 
        className="flex flex-col items-center justify-center pt-16 min-h-[calc(100vh-3rem)] bg-[#ffffff] dark:bg-[#141313] selection:text-black selection:bg-blue-700 dark:selection:bg-[#EEEEEE]">

        <div id="about" className="w-full mx-8 mt-3 min-h-80 grid grid-cols-1 md:grid-cols-[1fr_auto] gap-10 px-7 relative">
          <div className="px-2 py-3 w-full text-left self-center">
            <TypeAnimation
              sequence={[
                'Software Engineer (Full-stack), Cybersecurity.', 
                1000, 
              ]}
              speed={40} 
              className="text-black dark:text-white font-mono text-2xl md:text-5xl"
              repeat={0} 
            />
            <p className="obj-description-bright dark:obj-description mt-3 text-sm md:text-base">
              Hello everyone, my name is Gabriel Arruda. I am a Software Engineer and Cybersecurity
              enthusiast, currently completing my degree in Computer Science. Over the years, I’ve developed a strong
              foundation in software development and a deep passion for protecting systems from emerging threats.
              I have worked on building secure, scalable applications and am particularly
              excited about the intersection of engineering and security.
            </p>
          </div>

          <div className="py-4 w-60 flex flex-col justify-center items-center relative md:order-none order-first md:row-auto row-start-1 md:justify-self-end justify-self-center">
            <img
              src="/image.png"
              alt="Profile Picture"
              className="w-40 h-40 max-h-40 object-contain rounded-full mx-auto md:mx-0 mb-4"
            />
            <p className="text-black dark:text-white font-mono text-xl">Gabriel Arruda</p>
            <p className="obj-description-bright dark:obj-description">@arrudagba</p>

            <div className="flex justify-center items-center gap-5 mt-4 p-2 w-full">
              <a href="https://github.com/arrudagba">
                <FontAwesomeIcon icon={['fab', 'github']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
              </a>
              <a href="https://www.linkedin.com/in/arrudagba/">
                <FontAwesomeIcon icon={['fab', 'linkedin']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
              </a>
              <a href="https://mastodon.social/@arrudagba">
                <FontAwesomeIcon icon={['fab', 'mastodon']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
              </a>
              <a href="mailto:gabriel@arrudagba.dev">
                <FontAwesomeIcon icon={['fas', 'envelope']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        <h2 id="programming-languages" className="obj-title-bright dark:obj-title pt-3">Programming Languages</h2>
        <Slider />

        <h2 id="key-skills" className="obj-title-bright dark:obj-title pt-3">Key Skills</h2>
        <div className="big-div-bright dark:big-div">
          <div className="obj-grid">
            <div className="obj-bright dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="shield-halved" className="icon-bright dark:icon" />
                <h2 className="obj-title-bright dark:obj-title">
                  Security Best Practices
                </h2>
                <p className="obj-description-bright dark:obj-description">
                Security should never be overlooked. From data encryption to protection against common attacks like SQL injection and XSS, I’ll help you secure your systems and data by creating safe solutions for your business.
                </p>
              </div>
            </div>
            <div className="obj-bright dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="cloud" className="icon-bright dark:icon" />
                <h2 className="obj-title-bright dark:obj-title">
                  Cloud Computing & DevOps
                </h2>
                <p className="obj-description-bright dark:obj-description">
                Building scalable and cost-effective systems based on cloud platforms such as AWS, Azure, and Google Cloud is central to the business world today. I work with cloud infrastructure, containerization with Docker, and building CI/CD pipelines, easing deployment and making it automated, highly available, and fault-tolerant.
                </p>
              </div>
            </div>
            <div className="obj-bright dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="code" className="icon-bright dark:icon" />
                <h2 className="obj-title-bright dark:obj-title">
                  Clean Code & Best Practices
                </h2>
                <p className="obj-description-bright dark:obj-description">
                Writing clean, readable, and secured code is the basic key behind the long-term success of software. My aim is to keep your codebase as clean, simple, and maintainable as possible so that it can be easily read and expanded in the future by other developers. Let's forge software that stands through time and highlights security issues.
                </p>
              </div>
            </div>
            <div className="obj-bright dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="clock" className="icon-bright dark:icon" />
                <h2 className="obj-title-bright dark:obj-title">
                  Agile Development
                </h2>
                <p className="obj-description-bright dark:obj-description">
                Agile methodologies are important for high-quality software to be delivered fast and iteratively. I’ve had a hands-on experience with Scrum and Kanban, where I have been a part of a cross-functional team figuring out the priority of work, improving processes, and delivering value to the customers in short and frequently occurring sprints.
                </p>
              </div>
            </div>
            <div className="obj-bright dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="compass-drafting" className="icon-bright dark:icon" />
                <h2 className="obj-title-bright dark:obj-title">
                  Software Architecture
                </h2>
                <p className="obj-description-bright dark:obj-description">
                Building scalable, maintainable, and robust applications is my passion. Whether it is microservices or monolithic architectures, on-premises or cloud solutions, I work with you to design the best approach that suits your needs. Using principles such as Domain-Driven Design(DDD), I ensure that the application remains flexible and future-proof.
                </p>
              </div>
            </div>
            <div className="obj-bright dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="mobile" className="icon-bright dark:icon" />
                <h2 className="obj-title-bright dark:obj-title">
                  Cross-Platform Integration
                </h2>
                <p className="obj-description-bright dark:obj-description">
                This global era demands you to reach out to your audience across multiple devices. Be it mobile has embedded web app integration or consistency across multiple environments; I could create a seamless cross-platform experience for you. Through implementing modern frameworks and APIs, I will ensure that your application runs seamlessly across systems, mobile, and anything in between.
                </p>
              </div>
            </div>
        </div>

        </div>
        <h2 id="core-values" className="obj-title-bright dark:obj-title pt-3">Core Values</h2>
        <div className="big-div-bright dark:big-div">
          <div className="obj-grid">
            <div className="obj-bright dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="puzzle-piece" className="icon-bright dark:icon" />
                <h2 className="obj-title-bright dark:obj-title">
                  Adaptability
                </h2>
                <p className="obj-description-bright dark:obj-description">
                The tech world is ever-evolving, and so must I. I actively search for opportunities to broaden my knowledge and my use of newer tools, technologies, practices, frameworks, other team's workflows, or switching development approach. I wish to remain flexible and highly adaptable toward each change, as these are important for continued success in this line of work.
                </p>
              </div>
            </div>
            <div className="obj-bright dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="handshake" className="icon-bright dark:icon" />
                <h2 className="obj-title-bright dark:obj-title">
                  Collaboration
                </h2>
                <p className="obj-description-bright dark:obj-description">
                The best solutions undertake diverse perspectives. I believe in congenial communication, honest feedback, and a concerted effort with others-whether it is fellow developers, designers, product managers, or other stakeholders. I will work tooth and nail to see that each voice has been given oyce and that we are walking toward the same goal in equal strides.
                </p>
              </div>
            </div>
            <div className="obj-bright dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="chart-line" className="icon-bright dark:icon" />
                <h2 className="obj-title-bright dark:obj-title">
                  Scalability
                </h2>
                <p className="obj-description-bright dark:obj-description">
                Programming must evolve as the company grows. While writing software, I will always think of how it will scale-and this also at a level beyond just adding features, but in terms of performance and maintainability. I shall build solutions that would easily adapt when demand increases, user growth, or with increasing feature requests, causing no bottlenecks or technical debt.
                </p>
              </div>
            </div>
            <div className="obj-bright dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="eye" className="icon-bright dark:icon" />
                <h2 className="obj-title-bright dark:obj-title">
                  Transparency
                </h2>
                <p className="obj-description-bright dark:obj-description">
                Clear and honest communication is key to any successful project. I normally keep my team informed about my progress, hurdles, and other roadblocks very early on in the process. I believe that transparency fosters trust among the team and helps us all stay aligned and react quickly to changes or issues whenever they arise.
                </p>
              </div>
            </div>
            <div className="obj-bright dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="gears" className="icon-bright dark:icon" />
                <h2 className="obj-title-bright dark:obj-title">
                  Efficiency
                </h2>
                <p className="obj-description-bright dark:obj-description">
                I find it easier to remove unnecessary code than to introduce new features. Software development is more difficult because of feature creep and a lack of focus. I actually rely on the principles drawn from Extreme Programming, UNIX, and Test-Driven Development to produce elegant, scalable solutions. If a feature is not in line with those values, I'm going to raise my voice for quality and sustainability down the line.
                </p>
              </div>
            </div>
        </div>

        </div>
        
        <div id="contact" className="div-contact">
          <h2 className="obj-title-bright dark:obj-title">Contact</h2>
          <p className="obj-description-bright dark:obj-description">
            If you're interested in collaborating on a project, whether it's for professional work or a free/open-source software initiative, don't hesitate to reach out. I’m always open to exploring new ideas and teaming up on exciting opportunities. Feel free to send me an email, and we can discuss how we might work together to create something meaningful.
          </p>
          <p className="text-blue-700 dark:text-white underline font-bold pt-2 text-xl">gabriel@arrudagba.dev</p>

        </div>
        
        <footer className="flex items-center gap-7 text-1xlg font-normal justify-center itens-center py-3 bg-[#E4E4E7] dark:bg-[#191818] w-full mt-3">
          <a href="https://github.com/arrudagba">
            <FontAwesomeIcon icon={['fab', 'github']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
          </a>
          <a href="https://www.linkedin.com/in/arrudagba/">
            <FontAwesomeIcon icon={['fab', 'linkedin']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
          </a>
          <a href="https://mastodon.social/@arrudagba">
            <FontAwesomeIcon icon={['fab', 'mastodon']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
          </a>
          <a href="mailto:gabriel@arrudagba.dev">
            <FontAwesomeIcon icon={['fas', 'envelope']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
          </a>
        </footer>
      </motion.main>
    </>
  );
}