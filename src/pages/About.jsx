import { Link } from 'react-router-dom';

function About() {
  return (
    <>

      <section className="page-hero">

        <div className="container">

          <span className="eyebrow">
            ABOUT US
          </span>

          <h1>
            Beyond Vision Enterprise
          </h1>

          <p>
            Building relationships. Delivering solutions.
          </p>

        </div>

      </section>


      <section className="section">

        <div className="container about-grid">

          <div>

            <span className="eyebrow">
              OUR STORY
            </span>

            <h2>
              Driven by a vision beyond the ordinary.
            </h2>

          </div>

          <div>

            <p>
              Beyond Vision Enterprise is a South African business
              operating across construction, transport and logistics.
            </p>

            <p>
              Our approach is centred around professional service,
              reliable execution and building lasting relationships
              with our clients and business partners.
            </p>

            <p>
              We aim to provide practical solutions that respond to
              the real operational needs of our clients while creating
              opportunities for sustainable business growth.
            </p>

          </div>

        </div>

      </section>


      <section className="section section-light">

        <div className="container">

          <div className="values-grid">

            <div className="value-card">

              <span>01</span>

              <h3>
                Integrity
              </h3>

              <p>
                We value transparency, accountability and
                responsible business practices.
              </p>

            </div>


            <div className="value-card">

              <span>02</span>

              <h3>
                Reliability
              </h3>

              <p>
                We focus on dependable service and consistent
                delivery.
              </p>

            </div>


            <div className="value-card">

              <span>03</span>

              <h3>
                Excellence
              </h3>

              <p>
                We continuously seek ways to improve the quality
                of our work and services.
              </p>

            </div>


            <div className="value-card">

              <span>04</span>

              <h3>
                Growth
              </h3>

              <p>
                We believe in sustainable growth for our business,
                clients and communities.
              </p>

            </div>

          </div>

        </div>

      </section>


      <section className="cta-section">

        <div className="container cta-content">

          <div>

            <span className="eyebrow">
              BEYOND VISION
            </span>

            <h2>
              Let's build something meaningful.
            </h2>

          </div>

          <Link to="/contact" className="btn btn-primary">
            Contact Us
          </Link>

        </div>

      </section>

    </>
  );
}

export default About;