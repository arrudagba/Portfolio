"use client"

import Slider from './Slider';
import Header from './Header';
import '../lib/fontawesome';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { useTheme } from './ThemeContext';

const fadeTopDown = {
  hidden: { opacity: 0, y: -50 }, 
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }, 
};

export default function Home() {
  const { isDarkMode } = useTheme();

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
              As I continue to learn and grow, I am eager to apply my skills to
              build innovative solutions that are not only efficient but also
              resilient in an increasingly complex digital world.
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
              <a href="mailto:gabrielarrudahash@gmail.com">
                <FontAwesomeIcon icon={['fas', 'envelope']} className="text-black dark:text-[#A5A5A5] text-xl hover:text-blue-700 dark:hover:text-white" />
              </a>
            </div>
          </div>
        </div>

        <h2 id="key-skills" className="obj-title-brigth dark:obj-title pt-3">Key Skills</h2>
        <div className="big-div-brigth dark:big-div">
          <div className="obj-grid">
            <div className="obj-brigth dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="shield-halved" className="icon-brigth dark:icon" />
                <h2 className="obj-title-brigth dark:obj-title">
                  Security Best Practices
                </h2>
                <p className="obj-description-bright dark:obj-description">
                  Security should never be overlooked. 
                  From data encryption to protection against common attacks like SQL injection and XSS, I’ll help you secure your systems and data by creating safe solutions for your business.
                </p>
              </div>
            </div>
            <div className="obj-brigth dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="cloud" className="icon-brigth dark:icon" />
                <h2 className="obj-title-brigth dark:obj-title">
                  Cloud Computing & DevOps
                </h2>
                <p className="obj-description-bright dark:obj-description">
                  Leveraging cloud platforms like AWS, Azure, and Google Cloud to build scalable and cost-efficient systems is essential in today's world. I specialize in cloud infrastructure, containerization (Docker), and setting up CI/CD pipelines, ensuring seamless and automated deployment processes, as well as high availability and fault tolerance.
                </p>
              </div>
            </div>
            <div className="obj-brigth dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="code" className="icon-brigth dark:icon" />
                <h2 className="obj-title-brigth dark:obj-title">
                  Clean Code & Best Practices
                </h2>
                <p className="obj-description-bright dark:obj-description">
                  Writing clean, readable, and secure code is the foundation of long-term software success. I focus on simplicity, readability, and maintainability to ensure that your codebase is not only functional but also easy to understand and extend for future developers. Let's build software that stands the test of time and keeps security top of mind.
                </p>
              </div>
            </div>
            <div className="obj-brigth dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="clock" className="icon-brigth dark:icon" />
                <h2 className="obj-title-brigth dark:obj-title">
                  Agile Development
                </h2>
                <p className="obj-description-bright dark:obj-description">
                  Agile methodologies are key to delivering high-quality software quickly and iteratively. I have hands-on experience with Scrum and Kanban, working in cross-functional teams to prioritize tasks, continuously improve processes, and deliver value to clients in short, frequent cycles.
                </p>
              </div>
            </div>
            <div className="obj-brigth dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="compass-drafting" className="icon-brigth dark:icon" />
                <h2 className="obj-title-brigth dark:obj-title">
                  Software Architecture
                </h2>
                <p className="obj-description-bright dark:obj-description">
                  Building scalable, maintainable, and robust applications is my passion. Whether it's microservices or monolithic architectures, on-premises or cloud solutions, I work closely with you to design the best approach that suits your needs. Using principles like Domain-Driven Design (DDD), I ensure your application is flexible and future-proof.
                </p>
              </div>
            </div>
            <div className="obj-brigth dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="mobile" className="icon-brigth dark:icon" />
                <h2 className="obj-title-brigth dark:obj-title">
                  Cross-Platform Integration
                </h2>
                <p className="obj-description-bright dark:obj-description">
                  In today’s interconnected world, your application needs to work seamlessly across devices. Whether it's integrating your web app with mobile platforms or ensuring consistency across multiple environments, I can help you create smooth, cross-platform experiences. By leveraging modern frameworks and APIs, I'll ensure your app functions flawlessly on desktop, mobile, and everything in between.
                </p>
              </div>
            </div>
        </div>

        </div>
        <h2 id="core-values" className="obj-title-brigth dark:obj-title pt-3">Core Values</h2>
        <div className="big-div-brigth dark:big-div">
          <div className="obj-grid">
            <div className="obj-brigth dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="puzzle-piece" className="icon-brigth dark:icon" />
                <h2 className="obj-title-brigth dark:obj-title">
                  Adaptability
                </h2>
                <p className="obj-description-bright dark:obj-description">
                  The tech world is constantly evolving, and so must I. I actively seek to expand my knowledge and adapt to new tools, technologies, and practices. Whether it's learning a new framework, adjusting to a new team's workflow, or switching to a different development approach, I remain flexible and open to change, knowing it’s key to continued growth and success in the field.
                </p>
              </div>
            </div>
            <div className="obj-brigth dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="handshake" className="icon-brigth dark:icon" />
                <h2 className="obj-title-brigth dark:obj-title">
                  Collaboration
                </h2>
                <p className="obj-description-bright dark:obj-description">
                  The best solutions come from diverse perspectives. I believe in strong communication, transparent feedback, and the value of working closely with others — whether it’s fellow developers, designers, product managers, or stakeholders. I work hard to ensure everyone’s voice is heard and that we are all moving toward the same goals, together.
                </p>
              </div>
            </div>
            <div className="obj-brigth dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="chart-line" className="icon-brigth dark:icon" />
                <h2 className="obj-title-brigth dark:obj-title">
                  Scalability
                </h2>
                <p className="obj-description-bright dark:obj-description">
                  Code should grow as the business does. When I write software, I always consider how it will scale — not just in terms of features but also in terms of performance and maintainability. I strive to build solutions that will easily adapt to increased demand, user growth, or additional features without causing bottlenecks or technical debt.
                </p>
              </div>
            </div>
            <div className="obj-brigth dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="eye" className="icon-brigth dark:icon" />
                <h2 className="obj-title-brigth dark:obj-title">
                  Transparency
                </h2>
                <p className="obj-description-bright dark:obj-description">
                  Clear and honest communication is key to any successful project. I keep my team informed of progress, challenges, and any roadblocks early in the process. I believe that transparency fosters trust and ensures we’re all aligned and can react quickly to changes or issues when they arise.
                </p>
              </div>
            </div>
            <div className="obj-brigth dark:obj">
              <div className="p-8 flex flex-col">
                <FontAwesomeIcon icon="gears" className="icon-brigth dark:icon" />
                <h2 className="obj-title-brigth dark:obj-title">
                  Efficiency
                </h2>
                <p className="obj-description-bright dark:obj-description">
                  I believe removing unnecessary code is more effective than adding new features. Feature creep and lack of focus make software harder to maintain. I follow principles from Extreme Programming, UNIX, and Test-Driven Development to build clean, scalable solutions. If a feature doesn’t align with these values, I’ll speak up to ensure long-term quality and sustainability.
                </p>
              </div>
            </div>
        </div>

        </div>
        
        <div id="contact" className="div-contact">
          <h2 className="obj-title-brigth dark:obj-title">Contact</h2>
          <p className="obj-description-bright dark:obj-description">
            If you're interested in collaborating on a project, whether it's for professional work or a free/open-source software initiative, don't hesitate to reach out. I’m always open to exploring new ideas and teaming up on exciting opportunities. Feel free to send me an email, and we can discuss how we might work together to create something meaningful.
          </p>
          <p className="text-blue-700 dark:text-white underline font-bold pt-2 text-xl">gabrielarrudahash@gmail.com</p>

        </div>
        
        <footer className="text-black dark:text-[#A5A5A5] text-sm flex font-normal justify-center itens-center py-3 bg-[#E4E4E7] dark:bg-[#191818] w-full mt-3">
          <a className="underline pr-3" href="/EN">EN</a> | <a className="underline pl-3" href="/PT-BR">PT</a>
        </footer>
      </motion.main>
    </>
  );
}