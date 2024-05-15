import { Welcome } from '../components/Welcome/Welcome';
import { HeaderSimple } from '../components/Header/Header';
import { useRouter } from 'next/router';

export default function HomePage() {
  return (
    <>
      <HeaderSimple activeLink="/" loggedIn="false" />
      <Welcome />
    </>
  );
}
