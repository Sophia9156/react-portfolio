import BgRed from "../components/BgRed";
import Intro from "../components/Intro";
import TextBtn from "../components/TextBtn";
import Clock from "../components/Clock";
import Title from "../components/Title";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <main>
      <Intro />
      <BgRed />
      <TextBtn />
      <Clock />
      <Title text={'Portfolio LEE SU HYUN'} space={'0.2em'} />
      <Contact />
    </main>
  )
}