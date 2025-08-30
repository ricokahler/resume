import Head from 'next/head';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faGithub,
  faStackOverflow,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import styles from '../styles/Home.module.css';
import classNames from 'classnames';

const OpenSourceItem = ({ title, description, stars, link }) => (
  <li>
    <div className={styles.openSource}>
      <div>
        <a className={styles.noUnderline} href={link}>
          <code className={styles.code}>{title}</code>
        </a>
         — {description}
      </div>
      <div style={{ flex: '0 0 auto' }}>
        <svg
          className={styles.star}
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
          />
        </svg>{' '}
        {stars}
      </div>
    </div>
  </li>
);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Rico Kahler's Resume</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <header className={styles.header}>
          <h1 className={styles.title}>Rico Kahler</h1>
          <div className={styles.links}>
            <div className={styles.icons}>
              <div className={styles.pdf}>
                {/* <span>
                  For clickable links:{' '}
                  <a href="https://rico.codes/resume">rico.codes/resume</a>
                </span> */}
              </div>
              <a
                title="Rico Kahler's GitHub"
                href="https://github.com/ricokahler"
              >
                <FontAwesomeIcon className={styles.icon} icon={faGithub} />
              </a>
              <a
                title="Rico Kahler's Twitter"
                href="https://twitter.com/rico_kahler"
              >
                <FontAwesomeIcon className={styles.icon} icon={faTwitter} />
              </a>
              <a
                title="Rico Kahler's Stackoverflow"
                href="https://stackoverflow.com/users/5776910/rico-kahler"
              >
                <FontAwesomeIcon
                  className={styles.icon}
                  icon={faStackOverflow}
                />
              </a>
              <a
                title="Rico Kahler's LinkedIn"
                href="https://www.linkedin.com/in/ricokahler/"
              >
                <FontAwesomeIcon className={styles.icon} icon={faLinkedin} />
              </a>
            </div>
            <div className={styles.contact}>
              <a className={styles.email} href="mailto:ricokahler@gmail.com">
                ricokahler@gmail.com
              </a>
              <span aria-hidden="true">/</span>
              <a href="tel:1-313-269-9072">(313) 269-9072</a>
            </div>
          </div>
        </header>
        <div className={styles.subtitle}>
          Software Engineer, DX & Platform Tooling 🎉
        </div>
        <div className={styles.mission}>
          <p>
            I build foundational tools and systems for the modern web. My
            passion lies in untangling complex, low-level engineering problems
            and architecting elegant, large-scale systems with a deep focus on
            performance and computational efficiency.
          </p>
        </div>
        <div className={styles.grid}>
          <div div className={styles.column}>
            <section>
              <h2 className={classNames(styles.h2, styles.experienceTitle)}>
                <span className={styles.emoji} aria-hidden="true">
                  💼
                </span>{' '}
                Experience
              </h2>
              <ul className={styles.experienceList}>
                <li>
                  <h3 className={styles.workplaceTitle}>🌶 Sanity</h3>
                  <div className={styles.formalTitle}>
                    <span>Sr. Software Engineer</span>
                    <span aria-hidden="true">/</span>
                    <span>2021 - 2022, 2023 - 2025</span>
                    <span aria-hidden="true">/</span>
                    <span>Remote</span>
                  </div>
                  <ul className={styles.list}>
                    <li>
                      Architected and led the development of the{' '}
                      <a href="https://github.com/sanity-io/sdk">
                        Sanity App SDK
                      </a>
                      , a foundational toolkit for building real-time,
                      multiplayer content apps.
                    </li>
                    <li>
                      Authored numerous performance-critical libraries for the
                      Sanity ecosystem, including{' '}
                      <a href="https://github.com/sanity-io/json-match">
                        @sanity/json-match
                      </a>
                      , a lazy JSON query engine.
                    </li>
                    <li>
                      Designed and implemented the core{' '}
                      <a href="https://www.sanity.io/docs/configuration">
                        configuration API
                      </a>{' '}
                      for the Sanity Studio, enabling deep developer
                      customization of the CMS.
                    </li>
                  </ul>
                </li>
                <li>
                  <h3 className={styles.workplaceTitle}>😏 Amazon</h3>
                  <div className={styles.formalTitle}>
                    <span>Sr. Front End Engineer</span>
                    <span aria-hidden="true">/</span>
                    <span>2022 - 2023</span>
                    <span aria-hidden="true">/</span>
                    <span>Remote</span>
                  </div>
                  <ul className={styles.list}>
                    <li>
                      Lead efforts to bring server rendering to Seller Central
                    </li>
                    <li>
                      Consulted internal teams on Web performance for Seller
                      Central
                    </li>
                  </ul>
                </li>

                <li>
                  <h3 className={styles.workplaceTitle}>🌿 Bloomscape</h3>
                  <div className={styles.formalTitle}>
                    <span>Sr. Frontend Developer</span>
                    <span aria-hidden="true">/</span>
                    <span>2019 - 2021</span>
                    <span aria-hidden="true">/</span>
                    <span>Detroit + Remote</span>
                  </div>
                  <ul className={styles.list}>
                    <li>
                      Led headless jamstack rebuild of{' '}
                      <a href="https://bloomscape.com">Bloomscape.com</a> in
                      Next.js, Sanity, and BigCommerce
                    </li>
                    <li>
                      Continuously worked on perf, a11y, SEO, and Core Web
                      Vitals
                    </li>
                    <li>
                      Contributed to{' '}
                      <a href="https://bloomscape.com/vera/">Vera</a> — React
                      Native + Firebase App
                    </li>
                    <li>
                      Built headless, react-based checkout for Bloomscape.com
                    </li>
                  </ul>
                </li>

                <li>
                  <h3 className={styles.workplaceTitle}>🚀 Sift</h3>
                  <div className={styles.formalTitle}>
                    <span>Software Engineer II</span>
                    <span aria-hidden="true">/</span>
                    <span>2018 - 2019</span>
                    <span aria-hidden="true">/</span>
                    <span>Detroit</span>
                  </div>
                  <ul className={styles.list}>
                    <li>
                      Created an{' '}
                      <a href="https://www.justsift.com/features/org-chart">
                        interactive Org Chart
                      </a>{' '}
                      with React, D3, and SVGs
                    </li>
                    <li>
                      Architected and built a{' '}
                      <a href="https://www.justsift.com/features/profile">
                        configurable user profile
                      </a>
                    </li>
                    <li>
                      Created a{' '}
                      <a href="https://resift.org">
                        data-fetching and state management library
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </section>
            <section>
              <h2 className={classNames(styles.h2, styles.experienceTitle)}>
                <span className={styles.emoji} aria-hidden="true">
                  ⚒️
                </span>{' '}
                Open Source
              </h2>

              <ul className={classNames(styles.list, styles.openSourceList)}>
                <OpenSourceItem
                  link="https://color2k.com"
                  title="color2k"
                  description="small color manipulation library (2.9kB)"
                  stars={624}
                />
                <OpenSourceItem
                  link="https://github.com/ricokahler/next-data-hooks"
                  title="next-data-hooks"
                  description="next.js static react hooks"
                  stars={720}
                />
                <OpenSourceItem
                  link="https://github.com/ricokahler/pool"
                  title="@ricokahler/pool"
                  description="limited concurrency Promise.all"
                  stars={142}
                />
                <OpenSourceItem
                  link="https://www.sanity.io/plugins/sanity-codegen"
                  title="sanity-codegen"
                  description="sanity.io TypeScript codegen"
                  stars={270}
                />
                <OpenSourceItem
                  link="https://color2k.com"
                  title="babel-plugin-tsconfig-paths-module-resolver"
                  description={
                    <>
                      <br />
                      resolves tsconfig paths in babel
                    </>
                  }
                  stars={41}
                />
              </ul>
            </section>
          </div>

          <div className={styles.column}>
            <section>
              <h2 className={classNames(styles.h2, styles.experienceTitle)}>
                <span className={styles.emoji} aria-hidden="true">
                  🧠
                </span>{' '}
                Skills
              </h2>

              <ul className={styles.list}>
                <li>System Architecture / Design</li>
                <li>DX / API Design</li>
                <li>React / Next.js</li>
                <li>HTML / CSS</li>
                <li>JavaScript / TypeScript</li>
                <li>Testing / Vitest</li>
                <li>Node.js / npm</li>
                <li>Perf / Core Web Vitals</li>
                <li>Redux / Flux Patterns</li>
                <li>RxJS / Async Programming</li>
                <li>Vite / Plugin Authoring</li>
                <li>Rollup / Package Authoring</li>
              </ul>
            </section>

            <section>
              <h2 className={classNames(styles.h2, styles.experienceTitle)}>
                <span className={styles.emoji} aria-hidden="true">
                  🎥
                </span>{' '}
                Media
              </h2>

              <ul className={classNames(styles.list, styles.publicationList)}>
                <li>
                  <a href="https://youtu.be/aMNTPYq9CPY?si=izr2XQOHqvF8Snw2">
                    Who puts a CMS in the terminal?!
                  </a>
                </li>
                <li>
                  <a href="https://www.sanity.io/blog/obvious-features-aren-t-obviously-made">
                    Obvious features aren't obviously made
                  </a>
                </li>
                <li>
                  <a href="https://dev.to/sanity-io/make-a-progressive-web-app-with-react-45gh">
                    Make a Progressive Web App with React
                  </a>
                </li>
                <li>
                  <a href="https://longtweet.io/3hiz8afxa">
                    longtweet.io — a use case for on-demand static site
                    generation
                  </a>
                </li>
                <li>
                  <a href="https://blog.logrocket.com/windowing-wars-react-virtualized-vs-react-window/">
                    Windowing wars: React-virtualized vs. react-window
                  </a>
                </li>
                <li>
                  <a href="https://medium.com/free-code-camp/how-the-golden-rule-of-react-components-can-help-you-write-better-code-127046b478eb">
                    How the “Golden Rule” of React components can help you write
                    better code
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className={classNames(styles.h2, styles.experienceTitle)}>
                <span className={styles.emoji} aria-hidden="true">
                  🎓
                </span>{' '}
                Education
              </h2>

              <div>University of Michigan-Dearborn</div>
              <ul className={styles.list}>
                <li>Bachelor of Science: Software Engineering</li>
              </ul>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
