import {
  Table,
  Progress,
  Anchor,
  Text,
  Group,
  Container,
  Badge,
  Button,
  Modal,
} from '@mantine/core';
import { BsClipboardData, BsDoorOpen } from 'react-icons/bs';
import classes from './ParticipantList.module.css';
import Link from 'next/link';
import { Experiment } from '@/utils/types';
import { useDisclosure } from '@mantine/hooks';

export function TableParticipants({ daughters }: any) {
  const [opened, { open, close }] = useDisclosure(false);

  const rows = daughters.map((row: any) => {
    return (
      <Table.Tr key={row.participantID}>
        <Table.Td>{row.participantID}</Table.Td>
        <Table.Td>{new Date(row.creationDate).toLocaleDateString()}</Table.Td>
        <Group justify="space-between">
          <Text fz="xs" c="teal" fw={700}>
            <Button
              onClick={open}
              leftSection={<BsDoorOpen />}
              variant="subtle"
              className={classes.button}
            >
              See network
            </Button>
          </Text>
        </Group>
      </Table.Tr>
    );
  });

  return (
    <>
      <Modal opened={opened} onClose={close} title="Network" centered>
        {/* Modal content */}
      </Modal>
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
    </>
  );
}
