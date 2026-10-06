import { Link } from 'react-router-dom';

function Services() {
  const services = [
    {
      number: '01',
      title: 'Construction Services',
      description:
        'Professional construction support for projects requiring dependable planning, coordination and execution.',
      items: [
        'Project support',
        'Construction coordination',
        'Site-related services',
        'Infrastructure support'
      ]
    },

    {
      number: '02',
      title: 'Transport Solutions',
      description:
        'Transportation solutions focused on the safe and efficient movement of goods and materials.',
      items: [
        'Goods transportation',
        'Fleet coordination',
        'Transportation planning',
        'Delivery support'
      ]
    },

    {
      number: '03',
      title: 'Logistics Management',
      description:
        'Integrated logistics support helping businesses coordinate the movement and management of goods.',
      items: [
        'Logistics coordination',
        'Supply movement',
        'Operational planning',
        'Distribution support'
      ]
    }
  ];

  return (
    <>

      <section className="page-hero">

        <div className="container">

          <span className="eyebrow">
            OUR SERVICES
          </span>

          <h1>
            Solutions that keep business moving.
          </h1>

          <p>
            Construction, transport and logistics services
            designed around your operational requirements.
          </p>

        </div>

      </section>


      <section className="section">

        <div className="container">

          <div className="services-list">

            {services.map((service) => (

              <article
                className="large-service-card"
                key={service.number}
              >

                <div className="large-service-number">
                  {service.number}
                </div>

                <div>

                  <h2>
                    {service.title}
                  </h2>

                  <p>
                    {service.description}
                  </p>

                  <ul>

                    {service.items.map((item) => (
                      <li key={item}>
                        {item}
                      </li>
                    ))}

                  </ul>

                </div>

              </article>

            ))}

          </div>

        </div>

      </section>


      <section className="cta-section">

        <div className="container cta-content">

          <div>

            <span className="eyebrow">
              NEED A SOLUTION?
            </span>

            <h2>
              Let's discuss your requirements.
            </h2>

          </div>

          <Link to="/contact" className="btn btn-primary">
            Request Information
          </Link>

        </div>

      </section>

    </>
  );
}

export default Services;