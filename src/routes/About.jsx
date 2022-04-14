import BgBlue from '../components/BgBlue';
import Title from '../components/Title';
import Contact from "../components/Contact";
import Profile from '../components/Profile';
import Introduction from '../components/Introduction';

export default function About() {
  return (
    <main>
      <BgBlue />
      <Title text={'ABOUT'} space={'2em'} />
      <Contact />
      <Profile />
      <Introduction />
    </main>
  )
}