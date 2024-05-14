import { Information } from '@/components/Information/Information';
import { HeaderSimple } from '../../components/Header/Header';
import { FooterSimple } from '../../components/Footer/Footer';



export default function HomePage() {
  return (
    <>
      <HeaderSimple />
      <Information />
      <FooterSimple />
    </>
  );
}
