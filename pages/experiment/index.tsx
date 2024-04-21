import { StatsGridIcons } from '@/components/StatExperiment/StatExperiment';
import { HeaderSimple } from '../../components/Header/Header';
import { TableReviews } from '@/components/ExperimentList/ExperimentList';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { TableParticipants } from '@/components/ParticipantList/ParticipantList';
import { useParams, useSearchParams } from 'next/navigation';
import { GetStaticProps } from 'next';
import { Blockquote, Container, Loader } from '@mantine/core';
import StatusModal from '@/components/StatusModal/StatusModal';

export default function HomePage() {
  const [cookies, setCookies] = useCookies(['CAM-API-KEY']);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);
  const [errorMessage, setErrorMessage] = useState('');
  const [idExperiment, setIdExperiment] = useState('');
  const searchParams = useSearchParams();

  useEffect(() => {
    let id = searchParams.get('id') || '';
    if (id != '') {
      window.localStorage.setItem('id', id);
    } else {
      id = window.localStorage.getItem('id') || '';
    }
    setIdExperiment(id);
    const url = 'http://localhost:3001' + '/researchers/getExperimentById?id=' + id;
    console.log(url);

    setIsLoading(true);
    fetch(url, {
      credentials: 'include',
    })
      .then(async (res) => {
        const data = await res.json();
        if (res.status != 200) {
          setErrorMessage(data.message);
          throw new Error(errorMessage);
        }
        return data;
      })
      .then((data) => {
        setIsLoading(false);
        setData(data);
        console.log(data);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  async function getData(id: string, status: string) {
    console.log(id, status);

    const res = await fetch('http://localhost:3001' + '/researchers/changeExperimentStatus', {
      body: JSON.stringify({ id: id, status: status }),
      credentials: 'include',
      method: 'PUT',
    });
    const resData = await res.json();
    console.log(resData);
  }

  return (
    <>
      <HeaderSimple />
      {data && (
        <>
          <StatsGridIcons experiment={data} />
          <TableParticipants data={data} />
          <Container
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <StatusModal id={idExperiment} getDataEvent={getData} />
          </Container>
        </>
      )}
      {isLoading && <Loader color="blue" size="xl" />}
      {isError && (
        <Container size={420}>
          <Blockquote color="red" radius="lg" iconSize={30} mt="xl">
            {errorMessage}
          </Blockquote>
        </Container>
      )}
    </>
  );
}
