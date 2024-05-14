import { Title, Text, Anchor, List, ThemeIcon, Button, Group, Center } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';

import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'blue', to: 'darkblue' }}
        >
          Cognitive Affective Map tools to easily create and integrate CAM studies into online
          experiments.
        </Text>
        <Text color="dimmed" mt="md">
          Build fully functional accessible Cognitive Affective Map experiments faster than ever!
        </Text>
      </Title>

      <List
        ta="center"
        mt={30}
        spacing="sm"
        size="sm"
        icon={
          <ThemeIcon size={20} radius="xl">
            <IconCheck size={12} stroke={1.5} />
          </ThemeIcon>
        }
      >
        <List.Item>
          <b>Online based</b> - all our tools are running online so no need to setup any server
          (although you could)
        </List.Item>
        <List.Item>
          <b>Free and open source</b> - all packages have MIT license, you can use the CAM tools in
          any project, just don't forget to quote us
        </List.Item>
        <List.Item>
          <b>Tested systematically</b> - all the different tools provided were tested to ensure best
          data quality
        </List.Item>
      </List>
      <Center>
        <Group mt={30} ta="center">
          <a key="More information" href="/information" target="_self">
            <Button radius="xl" size="md">
              More information
            </Button>
          </a>
          <a key="Source code" href="https://github.com/Camel-app" target="_blank">
            <Button variant="default" radius="xl" size="md">
              Source code
            </Button>
          </a>
        </Group>
      </Center>
    </>
  );
}
