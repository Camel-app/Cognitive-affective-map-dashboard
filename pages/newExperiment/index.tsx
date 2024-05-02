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
  const [errorStatus, setErrorStatus] = useState(0);
  const [error, setError] = useState('');
  const router = useRouter();

  async function submitForm(data: any) {
    const body = {
      name: data.expName,
      link: data.link,
      numberOfParticipantsWanted: data.numberOfParticipantsWanted,
      configuration: JSON.stringify(data.configuration),
    };
    console.log(body);
    console.log(data);

    setIsError(!validateConfiguration(data));

    const url = 'http://localhost:3001' + '/researchers/addExperiment';
    setIsLoading(true);

    fetch(url, {
      body: JSON.stringify(body),
      headers: { 'Content-Type': 'application/json' },
      method: 'POST',
      credentials: 'include',
    })
      .then((res) => {
        if (res.status != 201) {
          setErrorStatus(res.status);
        }
        return res.json();
      })
      .then((data) => {
        if (errorStatus != 201) {
          setIsError(true);
          setError(data.message);
          return;
        }
        setIsLoading(false);
        router.push('/experiments');
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }
  return (
    <>
      <HeaderSimple activeLink="/experiments" loggedIn={true} />
      <NewExpForm submitFormEvent={submitForm} />
      {isError && (
        <Container size={420}>
          <Blockquote color="red" radius="lg" iconSize={30} mt="xl">
            {error}
          </Blockquote>
        </Container>
      )}
    </>
  );
}
