import { StatsGridIcons } from '@/components/StatExperiment/StatExperiment';
import { HeaderSimple } from '../../components/Header/Header';
import { TableReviews } from '@/components/ExperimentList/ExperimentList';
import { useEffect, useState } from 'react';
import { useCookies } from 'react-cookie';

export default function HomePage() {
  const [cookies, setCookies] = useCookies(['CAM-API-KEY']);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  const dataStat = [
    {
      title: 'Participants',
      value: '13,456',
      diff: 34,
      text: 'participants joined the experiment',
    },
    { title: 'Profit', value: '4,145', diff: 13, text: 'concepts have been drawn' },
    { title: 'Mean valence', value: '745', diff: -8, text: 'mean valence over all cams drawn' },
  ];

  const url = 'http://localhost:3001' + '/researchers/getExperimentByAuthor';
  useEffect(() => {
    fetch(url, {
      credentials: 'include',
    })
      .then((res) => res.json())
      .then((data) => {
        setData(data);
        console.log(data);

        setIsLoading(false);
      });
  }, []);

  //setIsLoading(false);

  //<TableReviews data={dataExperiment} />
  return (
    <>
      <HeaderSimple />
      <StatsGridIcons data={dataStat} />
      {data && <TableReviews data={data} />}
    </>
  );
}
