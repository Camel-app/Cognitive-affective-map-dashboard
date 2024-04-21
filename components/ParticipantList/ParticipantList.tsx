import { Table, Progress, Anchor, Text, Group, Container, Badge, Button } from '@mantine/core';
import { BsClipboardData, BsDoorOpen } from 'react-icons/bs';

import classes from './ParticipantList.module.css';
import Link from 'next/link';

export function TableParticipants({ data }: any) {
  console.log(data);

  const rows = data.daughters.map((row: any) => {
    return (
      <Table.Tr key={row.participantID}>
        <Table.Td>
          <Anchor component="button" fz="sm">
            {row.participantID}
          </Anchor>
        </Table.Td>
        <Table.Td>{new Date(row.creationDate).toLocaleDateString()}</Table.Td>
      </Table.Tr>
    );
  });

  return (
    <Container>
      <Table.ScrollContainer minWidth={200}>
        <Table verticalSpacing="xs">
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Participant id</Table.Th>
              <Table.Th>Submission date</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
      </Table.ScrollContainer>
    </Container>
  );
}
