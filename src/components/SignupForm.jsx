
import styles from "../styles/signup.module.css";

function SignupForm() {
  return (
    <div className={styles.signupform}>
        <div className={styles.signup__container}>
            <div className={styles.signup__card}>
                <h1>Sign Up</h1>
                <form>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" placeholder="Enter Name" />

                    <label htmlFor="email">Email:</label>
                    <input type="email" id="email" placeholder="Enter Email" />

                    <label htmlFor="password">Password:</label>
                    <input type="password" id="password" placeholder="Enter Password" />

                    <label htmlFor="company__name">Company Name:</label>
                    <input type="text" id="company__name" placeholder="Enter Company Name" />

                    <input type="submit" id="submit" value="Submit" />
                </form>
            </div>
        </div>
    </div>
  )
}

export default SignupForm