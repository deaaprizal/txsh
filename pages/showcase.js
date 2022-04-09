import Head from "next/head"
import styles from "../styles/Home.module.css"
import DarkButton from "../components/DarkMode"
import ShowCase from "../components/ShowCase"
import { useEffect, useState } from "react"
import axios from "axios"
import NaviBar from "../components/NaviBar"
export default function Contact() {
  const [getShowCaseName, setShowCaseName] = useState("")
  const [getShowCaseImage, setShowCaseImage] = useState([])
  const [getShowCaseVideo, setShowCaseVideo] = useState([])

  useEffect(() => {
    axios.get("/api/showcase").then((result) => {
      setShowCaseName(result.data.name)
      setShowCaseImage(result.data.imageCollection)
      setShowCaseVideo(result.data.videoCollection)
    })
  }, [])

  return (
    <div>
      <NaviBar />
      <div className={styles.showcase}>
        <Head>
          <title>{getShowCaseName}</title>
          <meta name="description" content="Generated by create next app" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
        <div className={styles.slider}>
          <div className={styles.scSlider}>
            <ShowCase
              showCaseImage={getShowCaseImage}
              showCaseVideo={getShowCaseVideo}
            />
          </div>
        </div>
        <div className={styles.modeButton}>
          <DarkButton />
        </div>
      </div>
    </div>
  )
}