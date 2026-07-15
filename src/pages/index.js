import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';

export default function Home() {
  return (
    <Layout
      title="ELHAFIDY Courses"
      description="Linux, Flutter and Kotlin Courses">

      <main
        style={{
          maxWidth: "1000px",
          margin: "50px auto",
          padding: "20px"
        }}
      >
        <h1 style={{textAlign:"center"}}>
          🎓 ELHAFIDY Courses
        </h1>

        <p
          style={{
            textAlign:"center",
            fontSize:"20px"
          }}
        >
          Free Courses and Practical Labs
        </p>

        <hr/>

        <h2>🐧 Linux Administration</h2>

        <p>
          Learn Linux administration from beginner to advanced.
        </p>

        <Link
          className="button button--primary"
          to="/docs/linux/intro">
          Open Linux Course
        </Link>

        <br/><br/>

        <h2>📱 Flutter Development</h2>

        <p>
          Learn Flutter by building real applications.
        </p>

        <Link
          className="button button--primary"
          to="/docs/flutter/intro">
          Open Flutter Course
        </Link>

        <br/><br/>

        <h2>🤖 Kotlin Programming</h2>

        <p>
          Learn Kotlin and Android development.
        </p>

        <Link
          className="button button--primary"
          to="/docs/kotlin/intro">
          Open Kotlin Course
        </Link>

      </main>

    </Layout>
  );
}