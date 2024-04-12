import { useState } from 'react';
import { AuthenticationTitle } from '@/components/LogingWindow/Authentication';
import { HeaderSimple } from '../../components/Header/Header';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';

export default function HomePage() {
  const [cookies, setCookies] = useCookies(['CAM-API-KEY']);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  async function submitForm(data: any) {
    setIsLoading(true);
    const body = { email: data.email, password: data.password };
    const url = 'http://localhost:3001' + '/researchers/login';
    const res = await fetch(url, {
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
    });

    const result = await res.json();
    setIsLoading(false);

    if (res.status == 200) {
      setCookies('CAM-API-KEY', result.token);
      router.push('/experiments');
    }
    setIsError(true);
  }

  return (
    <>
      <HeaderSimple />
      <AuthenticationTitle submitFormEvent={submitForm} isLoading={isLoading} isError={isError} />
      {isLoading && <input type="button" value="12"></input>}
    </>
  );
}
