import { Information } from '@/components/Information/Information';
import { HeaderSimple } from '../../components/Header/Header';



export default function HomePage() {
  return (
    <>
        <HeaderSimple activeLink="/information" loggedIn="false" />
      <Information />
    </>
  );
}
