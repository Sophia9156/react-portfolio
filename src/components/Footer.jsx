import './scss/footer.module.scss';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <p>&copy; {year} LEE SU HYUN All rights reserved.</p>
    </footer>
  )
}