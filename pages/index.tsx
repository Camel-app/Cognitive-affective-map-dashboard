import { Welcome } from '../components/Welcome/Welcome';
import { ColorSchemeToggle } from '../components/ColorSchemeToggle/ColorSchemeToggle';
import { HeaderSimple } from '../components/Header/Header';
import { useRouter } from 'next/router';

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <HeaderSimple activeLink="/" loggedIn="false" />
      <Welcome />
    </>
  );
}
