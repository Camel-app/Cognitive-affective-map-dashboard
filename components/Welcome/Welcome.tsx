import { Title, Text } from '@mantine/core';
import classes from './Welcome.module.css';
import { Image } from '@mantine/core';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Cognitive Affective Maps
      </Title>
      <Text c="dimmed" ta="center" size="xl" mx="auto" mt="xl" style={{ width: 500, fontSize: 30 }}>
        Think of{' '}
        <Text span c="green" style={{ fontSize: 30 }}>
          this
        </Text>
        , connect{' '}
        <Text span c="red" style={{ fontSize: 30 }}>
          that
        </Text>
        , and let us map{' '}
        <Text span c="yellow" style={{ fontSize: 30 }}>
          people's mind
        </Text>
      </Text>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <Image mt="xl" radius="md" src="./canvas.png" h={500} w="auto" fit="contain" />
      </div>
      <Text c="dimmed" ta="center" mx="auto" mt="xl" style={{ width: 1000, fontSize: 30 }}>
        Uncover the hidden connections, unlock the power of emotions, and embark on a journey of
        discovery with Cognitive Affective Maps.
      </Text>
    </>
  );
}
