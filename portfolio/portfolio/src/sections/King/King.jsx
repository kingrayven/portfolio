import styles from './KingStyles.module.css';
import pro from '../../assets/pro.jpg'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import linkedinIconLight from '../../assets/linkedin-light.svg';
import linkedinIconDark from '../../assets/linkedin-dark.svg';
import Form from '../../assets/Form.pdf';
import { useTheme } from '../../common/ThemeContext';
import Typewriter from 'typewriter-effect';


function King() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinIconLight : linkedinIconDark ;
   
    return (
        <section id='king' className={styles.container}>
            <div className={styles.colorModeContainer}>
                <img className={styles.king} src={pro} alt="Profile picture of King." />

                <img className={styles.colorMOde} src={themeIcon} alt="Color mode icon."  onClick={toggleTheme}/>
            </div>

            <div className={styles.info}>
                <h1>Revin
                    <br />
                    King
                </h1>
                 <h2>
                    <Typewriter
                        options={{
                            strings: ["Full Stack Developer", "Frontend Enthusiast", "Backend Expert"],
                            autoStart: true,
                            loop: true,
                          }}
                     />
                 </h2>
                <span>
                    <a href="https://twitter.com/" target='_blank'>
                        <img src={twitterIcon} alt="twitter Icon" />
                    </a>
                    <a href="https://github.com/kingrayven" target='_blank'>
                        <img src={githubIcon} alt="Fithub Icon" />
                    </a>
                    <a href="https://linkedin.com/" target='_blank'>
                        <img src={linkedinIcon} alt="Finkedind Icon" />
                    </a>
                </span>
                
                <p className={styles.description}>
                    "Code today, innovate tomorrow, shape the future."
                </p>

                <a href={Form} download>
                    <button className='hover' >Resume</button>
                </a>
            </div>
        </section>
    );
    
}

export default King;
