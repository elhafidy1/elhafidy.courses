import React from 'react';
import Layout from '@theme/Layout';

export default function About() {
  return (
    <Layout
      title="About"
      description="About Dr. Abderrahim EL HAFIDY"
    >
      <main
        style={{
          maxWidth: '1000px',
          margin: '0 auto',
          padding: '3rem 1rem',
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <img
            src="/elhafidy.courses/img/abderrahim.png"
            alt="Dr. Abderrahim EL HAFIDY"
            style={{
              width: '150px',
              height: '150px',
              borderRadius: '50%',
              objectFit: 'cover',
              border: '2px solid #2214b8',
              marginBottom: '5px',
            }}
          />

          <h1>Dr. Abderrahim EL HAFIDY</h1>

          <h3 style={{ color: '#14b8a6' }}>
            Ph.D. in Computer Science
          </h3>

          <p>
            ENSIAS – Mohammed V University, Rabat, Morocco
          </p>
        </div>

        <hr />

        <h2>👨‍🏫 About Me</h2>

        <p>
          Welcome to <strong>EL HAFIDY Courses</strong>, an educational
          platform dedicated to providing free, high-quality learning
          resources for students in Computer Science and Software Engineering.
        </p>

        <p>
          I am <strong>Dr. Abderrahim EL HAFIDY</strong>, a Computer Science
          researcher with experience in Mobile Application Development (native and cross platform), software usablity assessment, Linux Administration, Artificial
          Intelligence, Software Engineering, and Human–Computer Interaction.
        </p>

        <p>
          My goal is to make technical education accessible by sharing
          complete courses, laboratory sessions, practical projects,
          tutorials, and educational resources.
        </p>

        <hr />

        <h2>🎓 Education</h2>

        <ul>
          <li>
            <strong>Ph.D. in Computer Science</strong><br />
            ENSIAS, Mohammed V University, Rabat (2025)
          </li>

          <br />

          <li>
            <strong>M.S. in Internet of Things & Mobile Services</strong><br />
            ENSIAS, Mohammed V University (2018)
          </li>

          <br />

          <li>
            <strong>B.S. in Computer Science</strong><br />
            Mohammed V University (2011)
          </li>
        </ul>

        <hr />

        <h2>🔬 Research Interests</h2>

        <ul>
          <li>Artificial Intelligence</li>
          <li>Machine Learning</li>
          <li>Software Engineering</li>
          <li>Human–Computer Interaction</li>
          <li>Mobile Applications</li>
          <li>Road Safety Technologies</li>
          <li>Behavior Change Technologies</li>
        </ul>

        <hr />

        <h2>📚 Courses Available</h2>

        <ul>
          <li>🐧 Linux Administration</li>
          <li>📱 Flutter Development</li>
          <li>🤖 Kotlin Programming</li>
        </ul>

        <hr />

        <h2>📫 Contact</h2>

        <p>
          <strong>Email:</strong><br />
          abderrahim_elhafidy@um5.ac.ma
        </p>

        <p>
          <strong>GitHub:</strong><br />
          <a
            href="https://github.com/elhafidy1"
            target="_blank"
            rel="noopener noreferrer"
          >
            github.com/elhafidy1
          </a>
        </p>

        <p>
          <strong>Google Scholar:</strong><br />
          <a
            href="https://scholar.google.com/citations?user=Xuz-4QgAAAAJ"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google Scholar Profile
          </a>
        </p>

        <hr />

        <div style={{ textAlign: 'center', marginTop: '40px' }}>
          <h3 style={{ color: '#14b8a6' }}>
            "Learning never exhausts the mind."
          </h3>

          <p>
            Thank you for visiting EL HAFIDY Courses.
          </p>
        </div>
      </main>
    </Layout>
  );
}