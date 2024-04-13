import { HeaderSimple } from '../../components/Header/Header';
import { TableReviews } from '@/components/ExperimentList/ExperimentList';
import { useEffect, useState } from 'react';
import { Blockquote, Container, Loader } from '@mantine/core';

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const url = 'http://localhost:3001' + '/researchers/getExperimentByAuthor';
  useEffect(() => {
    setIsLoading(true);
    fetch(url, {
      credentials: 'include',
    })
    .then((res) => res.json())
    .then((data) => {
        setIsLoading(false);
        setData(data);
    }).catch((err) => {
      setIsLoading(false);
      setIsError(true);
    });
  }, []);

  return (
    <>
      <HeaderSimple />
      {data && <TableReviews data={data} />}
      {isLoading && <Loader color="blue" size="xl" />}
      {isError && 
      <Container size={420}>
        <Blockquote color="red" radius="lg" iconSize={30} mt="xl">
          It looks like something is not good well. Try again later.
        </Blockquote>
      </Container>
      }
    </>
  );
}
