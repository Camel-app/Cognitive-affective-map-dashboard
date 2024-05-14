import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { useRouter } from 'next/navigation';

export default function HomePage() {
  const [cookies, setCookies, removeCookies] = useCookies(['CAM-API-KEY']);
  const router = useRouter();
  useEffect(() => {
    setTimeout(() => {
      removeCookies('CAM-API-KEY', { path: '/' });
      router.push('/');
    }, 500);
  }, []);
  return <div></div>;
}
