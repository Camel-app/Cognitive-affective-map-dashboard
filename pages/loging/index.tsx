import { useState } from 'react';
import { AuthenticationTitle } from '@/components/LogingWindow/Authentication';
import { HeaderSimple } from '../../components/Header/Header';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  function submitForm(data: any) {
    if (data.password === '123') {
      setIsLoading(true);
    }
    setTimeout(() => {
      setIsLoading(false);
      setIsError(true);
    }, 500);
  }

  return (
    <>
      <HeaderSimple />
      <AuthenticationTitle
        submitFormEvent={submitForm}
        isLoading={isLoading}
        isError={isError}
      />
      {isLoading &&
      <input type="button" value="12"></input>
      }
    </>
  );
}
