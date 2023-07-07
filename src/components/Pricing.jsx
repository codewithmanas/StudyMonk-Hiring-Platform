
function Pricing() {
  return (
    <section className="pricing container">
        <div className="price__container">
            <div className="price__card">
                <h3 className="price__heading">Basic</h3>
                <p className="price__amount">$9.99/mo</p>
                <div className="price__benefits">
                    <div>
                        <img src="images/tick-svgrepo-com.svg" alt="tick symbol" />
                        <p>100 Resumes</p>
                    </div>
                    <div>
                        <img src="images/tick-svgrepo-com.svg" alt="tick symbol" />
                        <p>Basic Support</p>
                    </div>
                    <div>
                        <img src="images/tick-svgrepo-com.svg" alt="tick symbol" />
                        <p>5 Users</p>
                    </div>
                    <div>
                        <img src="images/tick-svgrepo-com.svg" alt="tick symbol" />
                        <p>Mobile App</p>
                    </div>
                </div>
                <button type="button" className="price__btn">Get Started</button>

            </div>
            <div className="price__card">
                <h3 className="price__heading">Pro</h3>
                <p className="price__amount">$29.99/mo</p>
                <div className="price__benefits">
                    <div>
                        <img src="images/tick-svgrepo-com.svg" alt="tick symbol" />
                        <p>Unlimited Resumes</p>
                    </div>
                    <div>
                        <img src="images/tick-svgrepo-com.svg" alt="tick symbol" />
                        <p>Premium Support</p>
                    </div>
                    <div>
                        <img src="images/tick-svgrepo-com.svg" alt="tick symbol" />
                        <p>Unlimited Users</p>
                    </div>
                    <div>
                        <img src="images/tick-svgrepo-com.svg" alt="tick symbol" />
                        <p>Advanced Analytics</p>
                    </div>
                </div>
                <button type="button" className="price__btn">Go Pro</button>
            </div>
        </div>

    </section>
  )
}

export default Pricing