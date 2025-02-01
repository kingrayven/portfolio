import React from 'react'
import styles from './ProjectsStyles.module.css'
import vigan from '../../assets/vigan.jpg'
import inventory from '../../assets/inventory.jpg'
import Race from '../../assets/Race.jpg'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
      <section id='projects' className={styles.container}>
          <h1 className='sectionTitle'> Finished Projects</h1>
          
          <div className={styles.projectsContainer}>
              <ProjectCard
                  src={inventory}
                  link='https://github.com/kingrayven/inventory'
                  h3="Inventory"
                  p="Inventory Website" />
              
              <ProjectCard
                  src={vigan}
                  link='https://github.com/kingrayven/MyCityApp'
                  h3="Tourist City App"
                  p="Favorite number one city in Ilocos Sur" />
              
              <ProjectCard
                  src={Race}
                  link='https://github.com/kingrayven/RaceTracker'
                  h3="Race Tracker App"
                  p="Simple race tracker app."/>
          </div>
      </section>
  )
}

export default Projects
