import { useState } from 'react';

function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {

    const { name, value } = event.target;

    setFormData((previous) => ({
      ...previous,
      [name]: value
    }));

  };


  const handleSubmit = (event) => {

    event.preventDefault();

    const subject = encodeURIComponent(
      `Website enquiry from ${formData.name}`
    );

    const body = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `${formData.message}`
    );

    window.location.href =
      `mailto:beyondvisionentpr@gmail.com?subject=${subject}&body=${body}`;

    setSubmitted(true);
  };


  return (
    <>

      <section className="page-hero">

        <div className="container">

          <span className="eyebrow">
            CONTACT
          </span>

          <h1>
            Let's start a conversation.
          </h1>

          <p>
            Tell us about your project, transport or logistics
            requirements.
          </p>

        </div>

      </section>


      <section className="section">

        <div className="container contact-grid">

          <div className="contact-info">

            <span className="eyebrow">
              GET IN TOUCH
            </span>

            <h2>
              We'd like to hear from you.
            </h2>

            <p>
              Whether you have a construction project,
              transportation requirement or logistics challenge,
              contact us to discuss your needs.
            </p>


            <div className="contact-item">

              <span className="contact-label">
                Email
              </span>

              <p>
                beyondvisionentpr@gmail.com
              </p><br/>

              <span className="contact-label">
                Or WhatsApp
              </span>

              <p>
                Tshepo Pati on +27 69 486 4549<br/>
                Oratile Mbonise on +27 60 795 3239
              </p>

            </div>


            <div className="contact-item">

              <span className="contact-label">
                Location
              </span>

              <p>
                Koster, North West,South Africa
              </p>

            </div>


            <div className="contact-item">

              <span className="contact-label">
                Business
              </span>

              <p>
                Beyond Vision Enterprise
              </p>

            </div>

          </div>


          <div className="contact-form-wrapper">

            <form
              className="contact-form"
              onSubmit={handleSubmit}
            >

              <div className="form-group">

                <label htmlFor="name">
                  Full Name
                </label>

                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="email">
                  Email Address
                </label>

                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-group">

                <label htmlFor="message">
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="7"
                  placeholder="Tell us how we can help..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>


              <button
                type="submit"
                className="btn btn-primary"
              >
                Send Message
              </button>


              {submitted && (

                <p className="form-success">
                  Your email application should now open.
                </p>

              )}

            </form>

          </div>

        </div>

      </section>

    </>
  );
}

export default Contact;