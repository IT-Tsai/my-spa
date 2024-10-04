import classes from "./page.module.css";

const HomePage = () => {
  return <div className={classes.container}>
    <h1>About</h1>
    <p className={classes.paragraph}>
      <b>Multilingual, Techno-Functional Software Developer and Team Player.</b><br /><br />

      Developed an internal web application at IBM, enabling employees to register and select internal projects, using a <b>front-end</b> stack of TypeScript, HTML, and CSS, alongside a robust <b>back-end</b> with <b>database</b> management. Proficient in CI/CD practices for seamless integration and deployment.<br /><br />

      Proven success in delivering robust solutions in high-tech environments, with expertise in agile teams and a commitment to continuous learning. Currently expanding skills in <b>Java, Spring Boot, React</b>, and  <b>MySQL</b> through self-study and side projects.<br /><br />

      Possesses a deep understanding of full-stack development with a focus on scalability, performance, and modern practices. Additionally, I have extensive experience in Salesforce development, specializing in Apex (Java) and Lightning Components (JavaScript) to build scalable, customized solutions.<br /><br />

      I transitioned from an academic career in Theoretical Chemistry and Molecular Medicine to commercial Software Development due to developing a strong affinity for programming as part of my research. During my time as an academic, I published 6 research papers.<br /><br />

      Outside of work, I am open-minded person, and I like to meet new people and learn about their cultures, especially languages. I enjoy working with people, because it allows me to share my ideas, and learn from others.
    </p>
  </div>
}


export default HomePage;