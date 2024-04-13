import { StatsGridIcons } from '@/components/StatExperiment/StatExperiment';
import { HeaderSimple } from '../../components/Header/Header';
import { TableReviews } from '@/components/ExperimentList/ExperimentList';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';
import { TableParticipants } from '@/components/ParticipantList/ParticipantList';

export default function HomePage() {
  const [cookies, setCookies] = useCookies(['CAM-API-KEY']);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const url = 'http://localhost:3001' + '/researchers/getExperimentById';
  useEffect(() => {
    fetch(url, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        setIsLoading(false);
      });
  }, []);

  return (
    <>
      <HeaderSimple />
      <StatsGridIcons experiment={data} />
      {data && <TableParticipants data={data} />}
    </>
  );
}
