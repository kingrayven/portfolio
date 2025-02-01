import styles from './StylesSkills.module.css'
import checkMarkIcon from '../../assets/checkmark-dark.svg'
import SkillLIst from '../../common/SkillLIst'

function Skills() {
  return (
      <section id='skills' className={styles.container}>
          <h1 className="sectionTitle">Skills Set</h1>

          <div className={styles.skillList}>
             <SkillLIst src={checkMarkIcon} skill='Html'/>
             <SkillLIst src={checkMarkIcon} skill='CSS'/>
             <SkillLIst src={checkMarkIcon} skill='Java Script'/>
             <SkillLIst src={checkMarkIcon} skill='SQl'/>
             <SkillLIst src={checkMarkIcon} skill='React'/>
             <SkillLIst src={checkMarkIcon} skill='Bootstrap'/>
             <SkillLIst src={checkMarkIcon} skill='Python'/>
             <SkillLIst src={checkMarkIcon} skill='PHP'/>
          </div>
  
          <hr />
   </section>
  )
}

export default Skills
