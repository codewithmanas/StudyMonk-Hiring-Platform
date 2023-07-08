import styles from "./styles/registration.module.css";
import containerStyles from "./styles/container.module.css";
import headerImg from "./assets/images/undraw_Sign_up_n6im-1.png";

import { useNavigate } from 'react-router-dom';

function Registration() {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('/signup');
    console.log("clicked");
  }
  return (
    <div className={styles.registration}>
        <header className={`${styles.header} ${containerStyles.container}`}>
          <div className={styles.header__container}>
              <div className={styles.header__left}>
                <h1 className={styles.header__title}>Unlock Recruitment Power</h1>
                <div>
                  <button type="button" className={styles.login__btn}>Log In</button>
                  <button type="button" className={styles.signup__btn} onClick={handleButtonClick}>Sign Up</button>
                </div>
              </div>
              <div className={styles.header__right}>
                <img className={styles.header__image}  src={headerImg} alt="Header Image" />
              </div>
          </div>
        </header>
    </div>
  )
}

export default Registration