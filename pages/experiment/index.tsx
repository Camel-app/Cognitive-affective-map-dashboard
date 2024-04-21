import { StatsGridIcons } from '@/components/StatExperiment/StatExperiment';
import { HeaderSimple } from '../../components/Header/Header';
import { TableReviews } from '@/components/ExperimentList/ExperimentList';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { TableParticipants } from '@/components/ParticipantList/ParticipantList';
import { useParams, useSearchParams } from 'next/navigation';
import { GetStaticProps } from 'next';
import {
  Badge,
  Blockquote,
  Button,
  Container,
  Loader,
  Notification,
  Space,
  rem,
} from '@mantine/core';
import StatusModal from '@/components/StatusModal/StatusModal';
import Router from 'next/router';
import { getStatusColor } from '@/utils/generals';
import { Experiment } from '@/utils/types';
import { IconCheck } from '@tabler/icons-react';

export default function HomePage() {
  const [cookies, setCookies] = useCookies(['CAM-API-KEY']);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [experimentContent, setExperimentContent] = useState({} as Experiment);
  const [errorMessage, setErrorMessage] = useState('');
  const [idExperiment, setIdExperiment] = useState('');
  const [isDataReady, setIsDataReady] = useState(false);
  const [isDeleted, setIsDeleted] = useState(false);
  const searchParams = useSearchParams();
  const checkIcon = <IconCheck style={{ width: rem(20), height: rem(20) }} />;

  useEffect(() => {
    let id = searchParams.get('id') || '';
    if (id != '') {
      window.localStorage.setItem('id', id);
    } else {
      id = window.localStorage.getItem('id') || '';
    }
    setIdExperiment(id);
    const url = 'http://localhost:3001' + '/researchers/getExperimentById?id=' + id;
    console.log(id);

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
        setExperimentContent(data);
        setIsDataReady(true);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }, []);

  async function updateExperimentStatus(id: string, status: string) {
    fetch('http://localhost:3001' + '/researchers/changeExperimentStatus', {
      body: JSON.stringify({ id: id, status: status }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      method: 'PUT',
    })
      .then((res) => res.json())
      .then((data) => {
        setIsLoading(false);
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
    Router.reload();
  }

  async function downloadExperiment(id: string, experiment: Experiment) {
    const blobConfig = new Blob([JSON.stringify(experiment)], { type: 'text/json;charset=utf-8' });
    const blobUrl = URL.createObjectURL(blobConfig);
    const anchor = document.createElement('a');
    anchor.href = blobUrl;
    anchor.target = '_blank';
    anchor.download = id + '.json';
    anchor.click();

    URL.revokeObjectURL(blobUrl);
  }

  async function deleteExperiment(id: string) {
    fetch('http://localhost:3001' + '/researchers/deleteExperiment', {
      body: JSON.stringify({ id: id }),
      headers: { 'Content-Type': 'application/json' },
      credentials: 'include',
      method: 'DELETE',
    })
      .then((res) => {
        setIsDeleted(true);
        return res.json();
      })
      .catch((err) => {
        setIsLoading(false);
        setIsError(true);
      });
  }

  function confirmDeleteExperiment(id: string, name: string) {
    const resp = window.prompt(
      `Please enter the name of your experiment ${name} to confirm the deletion and press "Ok":`
    );
    if (resp === name) {
      deleteExperiment(id);
      setInterval(() => Router.push('/experiments'), 3000);
    }
  }

  return (
    <>
      <HeaderSimple activeLink="/login" loggedIn="true" />
      {isDeleted && (
        <Container
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            flexDirection: 'column',
          }}
        >
          <Notification icon={checkIcon} color="teal" title="Deletion completed!" mt="md">
            The experiment has been deleted, redirection to home page
          </Notification>
        </Container>
      )}
      {!isDeleted && isDataReady && (
        <>
          <Container
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              flexDirection: 'column',
            }}
          >
            <h1>{experimentContent.name}</h1>
            <Space />
            <Badge variant="outline" color={getStatusColor(experimentContent.status.toUpperCase())}>
              {experimentContent.status}
            </Badge>
          </Container>

          <StatsGridIcons daughters={experimentContent.daughters} />
          <TableParticipants daughters={experimentContent.daughters} />
          <Container
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <StatusModal id={idExperiment} getDataEvent={updateExperimentStatus} />
            <Button
              variant="outline"
              onClick={() => confirmDeleteExperiment(idExperiment, experimentContent.name)}
              style={{ color: 'red', borderColor: 'red' }}
            >
              Delete Experiment
            </Button>
            <Button
              variant="outline"
              onClick={() => downloadExperiment(idExperiment, experimentContent)}
            >
              Download data
            </Button>
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
