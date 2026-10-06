import { Link } from 'react-router-dom';

function Home(){
    return(
        <>
            {/* HERO */}

            <section className='hero'>
                <div className='hero-overlay'></div>
                <div className='container hero-content'>
                    <span className='eyebrow'>BEYOND EXPECTATIONS</span>
                    <h1>
                        Building the Future.
                        <span>Moving What Matters.</span>
                    </h1>

                    <p>
                        Beyond Vision Enterprise provides professional construction,
            transport and logistics solutions designed to support businesses
            and communities across South Africa.
                    </p>

                    <div className='hero-buttons'>
                        <Link to='/services' className='btn btn-primary'>Explore Our Services</Link>
                        <Link to='/contact' className='btn btn-outline'></Link>
                    </div>
                </div>
            </section>

            {/* INTRO */}

            <section className='section'>
                <div className='container'>
                    <div className='section-heading'>
                        <span className='eyebrow'>WHO WE ARE</span>
                        <h2>Business solutions built around reliability</h2>

                        <p>
                          Beyond Vision Enterprise is focused on delivering dependable,
              professional and practical solutions across construction,
              transportation and logistics.  
                        </p>
                    </div>

                    <div className='feature-grid'>
                        <article className='feature-card'>
                            <div className='feature-icon'>01</div>
                            <h3>Professional</h3>

                            <p>
                                We approach every project with professionalism,
                accountability and attention to detail.
                            </p>
                        </article>

                        <article className='feature-card'>
                            <div className='feature-icon'>02</div>
                            <h3>Reliable</h3>

                            <p>
                              Our solutions are designed around dependable service
                delivery and long-term relationships.  
                            </p>
                        </article>

                        <article className='feature-card'>
                            <div className='feature-icon'>03</div>
                            <h3>Forward Thinking</h3>

                            <p>
                              We continuously look for smarter and more efficient
                ways to solve business and operational challenges.  
                            </p>
                        </article>
                    </div>
                </div>
            </section>

            {/* Services */}

            <section className='section section-dark'>
                <div className='container'>
                    <div className='section-heading light'>
                        <span className='eyebrow'>WHAT WE DO</span>
                        <h2>Our core services</h2>
                    </div>

                    <div className='service-grid'>
                        <article className='service-card'>
                            <span className='service-number'>01</span>
                            <h3>Construction Services</h3>

                            <p>
                              Professional construction solutions supporting
                              commercial, infrastructure and development projects.  
                            </p>

                            <Link to='/services'>Learn More →</Link>
                        </article>

                        <article className='service-card'>
                            <span className='service-number'>02</span>
                            <h3>Transport Solutions</h3>

                            <p>
                              Reliable transportation solutions designed to
                              move goods efficiently and safely.  
                            </p>

                            <Link to='/services'>Learn More →</Link>
                        </article>

                        <article className='service-card'>
                            <span className='service-number'>03</span>
                            <h3>Logistics Management</h3>

                            <p>
                              Practical logistics support designed to improve
                              coordination, movement and operational efficiency.  
                            </p>

                            <Link to='/services'>Learn More →</Link>
                        </article>
                    </div>
                </div>
            </section>

            {/* CTA */}

            <section className='cta-section'>
                <div className='container cta-content'>
                    <div>
                        <span className='eyebrow'>LET'S WORK TOGETHER</span>
                        <h2>Have a project in mind?</h2>

                        <p>
                          Let's discuss how Beyond Vision Enterprise can
              support your next project or operational requirement.  
                        </p>
                    </div>

                    <Link to='/contact' className='btn btn-primary'>Contact Us</Link>
                </div>
            </section>
        </>
    );
};

export default Home;