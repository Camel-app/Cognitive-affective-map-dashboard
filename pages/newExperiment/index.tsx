import { HeaderSimple } from '@/components/Header/Header';
import { TableReviews } from '@/components/ExperimentList/ExperimentList';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { useCookies } from 'react-cookie';
import { Blockquote, Container, Loader } from '@mantine/core';
import { redirect } from 'next/navigation';
import { NewExpForm } from '@/components/NewExpForm/NewExpForm';

function validateConfiguration(file: string) {
  return true;
}

export default function HomePage() {
  const [cookies, setCookies] = useCookies(['CAM-API-KEY']);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const router = useRouter();

  async function submitForm(data: any) {
    setIsError(!validateConfiguration(data));

    const body = { data };
    const url = 'http://localhost:3001' + '/researchers/login';
    setIsLoading(true);
  }
  return (
    <>
      <HeaderSimple activeLink="/experiments" loggedIn={true} />
      <NewExpForm submitFormEvent={submitForm} />
      <Container size={420}>
        <Blockquote color="red" radius="lg" iconSize={30} mt="xl">
          It looks like something is not good well. Try again later.
        </Blockquote>
      </Container>
    </>
  );
}
