import BgBlue from '../components/BgBlue';
import Title from '../components/Title';
import Contact from "../components/Contact";
import Profile from '../components/Profile';
import Introduction from '../components/Introduction';
import TopBtn from '../components/TopBtn';
import Skills from '../components/Skills';

export default function About() {
  return (
    <main>
      <BgBlue />
      <Title text={'ABOUT'} space={'2em'} />
      <Contact />
      <TopBtn />
      <Profile />
      <Introduction />
      <Skills />
    </main>
  )
}