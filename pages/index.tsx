import type { NextPage } from 'next'
import Head from 'next/head'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {
  return (
    <div className={styles.container} id="pageWrapper">
      <Head>
        <title>Hollyfields Community</title>
        <meta name="description" content="Hollyfields Community helper website" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&display=swap" rel="stylesheet" />
      </Head>

      <main className={styles.main}>
        <div className={styles.header}>
          <div className={styles.gridItem}>
            <h1 className={styles.title}>
              Hollyfields
            </h1>

            <p className={styles.description}>
              Welcome to the Hollyfields Community microsite with helpful links and information.
            </p>
          </div>
        </div>

        <div className={styles.grid}>
          <div className={styles.gridItem}>
            <h2 className={styles.subHeading}>Shuttle Information:</h2>
            <p><strong>Morning pickup location:</strong> Visitor Bay opposite Berkeley Homes' Sales and Marketing
              Suite on Duncalf Road.</p>
            <p><strong>Evening pickup location:</strong> Outside Tunbridge Wells Station, on the side of The Range store.</p>

            <div className={styles.gridItem}>
              <h2 className={styles.subHeading}>Shuttle timetable:</h2>
              <div className={styles.timeTable}>
                <h3 className={styles.subHeading}>Morning timetable</h3>
                <p>
                  <strong>Hollyfields to Tunbridge Wells Station</strong>
                </p>
                <div className={styles.timeTableLine}>
                  <p>Departs: 6:30</p>
                  <p>Arrives: 6:45</p>
                </div>
                <div className={styles.timeTableLine}>
                  <p>Departs: 7:00</p>
                  <p>Arrives: 7:15</p>
                </div>
                <div className={styles.timeTableLine}>
                  <p>Departs: 7:30</p>
                  <p>Arrives: 7:45</p>
                </div>
                <div className={styles.timeTableLine}>
                  <p>Departs: 8:00</p>
                  <p>Arrives: 8:15</p>
                </div>
              </div>

              <div className={styles.timeTable}>
                <h3 className={styles.subHeading}>Evening timetable</h3>
                <p>
                  <strong>Hollyfields to Tunbridge Wells Station</strong>
                </p>
                <div className={styles.timeTableLine}>
                  <p>Departs: 18:20</p>
                  <p>Arrives: 18:30</p>
                </div>
                <div className={styles.timeTableLine}>
                  <p>Departs: 18:40</p>
                  <p>Arrives: 18:50</p>
                </div>
                <div className={styles.timeTableLine}>
                  <p>Departs: 19:00</p>
                  <p>Arrives: 19:10</p>
                </div>
                <div className={styles.timeTableLine}>
                  <p>Departs: 19:20</p>
                  <p>Arrives: 19:30</p>
                </div>
                <div className={styles.timeTableLine}>
                  <p>Departs: 19:45</p>
                  <p>Arrives: 20:00</p>
                </div>
                <div className={styles.timeTableLine}>
                  <p>Departs: 20:15</p>
                  <p>Arrives: 20:30</p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.gridItem}>
            <h2 className={styles.subHeading}>Useful links:</h2>
            <a className={styles.link} href="https://tunbridgewells-self.achieveservice.com/AchieveForms/?mode=fill&consentMessage=yes&form_uri=sandbox-publish://AF-Process-45947078-d7ec-4252-8e2b-49a127200c0f/AF-Stage-7aae22c4-1a6b-4981-ad87-c9fb598c2544/definition.json&process=1&process_uri=sandbox-processes://AF-Process-45947078-d7ec-4252-8e2b-49a127200c0f&process_id=AF-Process-45947078-d7ec-4252-8e2b-49a127200c0f" target="_blank" rel="noopener noreferrer">Bin collection day checker</a>
            <a className={styles.link} href="https://www.berkeleygroup.co.uk/developments/kent/royal-tunbridge-wells/hollyfields" target="_blank" rel="noopener noreferrer">Hollyfields development website</a>
            <a className={styles.link} href="https://tunbridgewells.gov.uk/" target="_blank" rel="noopener noreferrer">Tunbridge Wells Council</a>
          </div>
        </div>
      </main>
    </div>
  )
}

export default Home
