
function Feature() {
  return (
    <section className="features container">
        <div className="features__container">
            <div className="features__sections">
                <div className="features__section__left">
                    <h2 className="features__title">Experience Lightning Speed Recruitment</h2>
                    <p className="features__desc">Say goodbye to the endless manual screening of resumes. Our online recruitment solution will whisk away your hiring woes and make talent acquisition faster, smarter, and more fun.</p>
                </div>
                <div className="features__section__right">
                    <img src="images/resume.png" alt="resume" />
                </div>
            </div>

            <div className="features__sections">
                <div className="features__section__right">
                    <img src="images/job-offers.png" alt="resume" />
                </div>
                <div className="features__section__left">
                    <h2 className="features__title">Convenience at Your Fingertips</h2>
                    <p className="features__desc">Access powerful recruitment tools anywhere, anytime, from any device. Transform your hiring process into a seamless experience that keeps all the right talent just a few clicks away.</p>
                </div>
                
            </div>
        </div>
    </section>
  )
}

export default Feature