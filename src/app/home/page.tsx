import classes from "./page.module.css";

const HomePage = () => {
  return <div className={classes.container}>
    <h1>About</h1>
    <p className={classes.paragraph}>
      Multilingual, techno-functional Software Developer with extensive experience in <b>Salesforce development</b>, including Apex and Lightning Components. Proficient in utilizing CI/CD practices for seamless integration and deployment. Proven track record in delivering robust solutions in high-tech environments, adept at collaborating in agile teams, and committed to continuous learning and improvement. Actively expanding expertise in <b>Java, Spring Boot, and React</b> through dedicated self-study and side projects.<br /><br />

      I transitioned from an academic career in Theoretical Chemistry and Molecular Medicine to commercial Software Development due to developing a strong affinity for programming as part of my research. During my time as an academic, I published 6 research papers.<br /><br />

      Outside of work, I am open-minded person, and I like to meet new people and learn about their cultures, especially languages. I enjoy working with people, because it allows me to share my ideas, and learn from others.
    </p>
  </div>
}


export default HomePage;