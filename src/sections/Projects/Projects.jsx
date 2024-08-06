import styles from './ProjectsStyles.module.css';
import blog from '../../assets/blog.png';
import event from '../../assets/event.png';
import hotel from '../../assets/hotel.png';
import realestate from '../../assets/realestate.png';
import socialmed from '../../assets/socialmed.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={hotel}
          link="https://github.com/AsifAnsar-i/Mern-Hotel-Management-Website"
          h3="Hotel Booking"
          p="Hotel Management Website"
        />
        <ProjectCard
          src={realestate}
          link="https://github.com/AsifAnsar-i/MernRealeStateApp"
          h3="Real Estate"
          p="Real Estate Website"
        />
        <ProjectCard
          src={event}
          link="https://github.com/AsifAnsar-i/Next_App-Event-Management-"
          h3="Evently"
          p="Event Management Website"
        />
        <ProjectCard
          src={blog}
          link="https://github.com/AsifAnsar-i/Imaginify-SaaS-App-"
          h3="Imaginify"
          p="Saas App Website"
        />
        <ProjectCard
          src={socialmed}
          link="https://github.com/AsifAnsar-i/Social-Media"
          h3="Social Media"
          p="Social Media Website"
        />
      </div>
    </section>
  );
}

export default Projects;
