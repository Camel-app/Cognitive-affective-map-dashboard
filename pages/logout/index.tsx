import { useEffect, useState } from 'react';
import { AuthenticationTitle } from '@/components/LoginWindow/Authentication';
import { HeaderSimple } from '../../components/Header/Header';
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
