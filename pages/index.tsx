import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderSimple } from '../components/Header/Header';
import { FooterSimple } from '../components/Footer/Footer';
export default function HomePage() {
  return (
    <>
      <HeaderSimple />
      <Welcome />
      <ColorSchemeToggle />
      <FooterSimple />
    </>
  );
}
