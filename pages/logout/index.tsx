import { useState } from 'react';
import { AuthenticationTitle } from '@/components/LoginWindow/Authentication';
import { HeaderSimple } from '../../components/Header/Header';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

export default function HomePage() {
  const [cookies, setCookies, removeCookies] = useCookies(['CAM-API-KEY']);
  const router = useRouter();
  removeCookies('CAM-API-KEY', { path: '/' });
  return <></>;
}
