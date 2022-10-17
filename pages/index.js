import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import SpeakerSection from "../components/Speaker Section/SpeakerSection";
import LandingSection from "../components/LandingSection";
import AboutSection from "../components/About/AboutSection";
import Timeline from "../components/Timeline";

export default function Home() {
  return (
    <div className="">
      <LandingSection />
      <Timeline />
      <AboutSection />
      <SpeakerSection />
    </div>
  );
}
