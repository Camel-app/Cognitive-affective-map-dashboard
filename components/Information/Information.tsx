import {
  Title,
  Text,
  Anchor,
  List,
  ThemeIcon,
  Button,
  Group,
  Center,
  Image,
  Grid,
} from '@mantine/core';
import { IconArrowAutofitRight, IconHelp, IconPhoneCalling, IconUsers } from '@tabler/icons-react';

import image from '../../public/logoCAM2.svg';

import classes from './Information.module.css';

export function Information() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={10} mb={20}>
        <Text
          inherit
          variant="gradient"
          component="span"
          gradient={{ from: 'blue', to: 'darkblue' }}
        >
          Thank you for checking out our Cognitive Affective Map tools!
        </Text>
      </Title>
      <Title className={classes.subtitle} ta="center">
        <Text inherit component="span">
          Cognitive-Affective Maps (CAM) tools encompass the following tools:
        </Text>
      </Title>
      <Grid ta={'left'} ml={20} mr={20}>
        <Grid.Col span={4}>
          <Image src={image.src} />
        </Grid.Col>
        <Grid.Col span={8}>
          <List
            mt={30}
            mb={20}
            spacing="sm"
            size="sm"
            icon={
              <ThemeIcon size={20} radius="xl">
                <IconArrowAutofitRight size={12} stroke={1.5} />
              </ThemeIcon>
            }
          >
            <List.Item>
              for data collection: Cognitive-Affective Map extended logic (C.A.M.E.L.)
            </List.Item>
            <List.Item>for data analysis: CAM-App (Shiny)</List.Item>
            <List.Item>
              for setting up studies with different designs and preprocessing steps: administrative
              panel (you are currently on)
            </List.Item>
          </List>
          For detailed information and how to register have a look in our{' '}
          <a
            key="Documentation"
            href="https://camtools-documentation.readthedocs.io/en/master/Set%20up%20study/"
            target="_blank"
          >
            <span>Documentation</span>
          </a>
        </Grid.Col>
      </Grid>
      <Title className={classes.subtitle} ta="center">
        <Text inherit component="span">
          No coding is required:
        </Text>
      </Title>
      <List
        ta="left"
        mt={30}
        ml={20}
        mr={20}
        spacing="sm"
        size="sm"
        icon={
          <ThemeIcon size={20} radius="xl">
            <IconArrowAutofitRight size={12} stroke={1.5} />
          </ThemeIcon>
        }
      >
        <List.Item>
          It is possible to set up CAM studies using a visual interface and all kind of adjustments
          are possible (see{' '}
          <a
            key="Config file documentation"
            href="https://camtools-documentation.readthedocs.io/en/master/Cognitive-Affective%20Map%20extended%20logic/#define-your-config-file"
            target="_blank"
          >
            <span>Config file documentation</span>
          </a>{' '}
          for details).
        </List.Item>
        <List.Item>
          Thanks to our ready-made example studies, constructing studies couldn't be easier (see{' '}
          <a
            key="example studies"
            href=" https://camtools-documentation.readthedocs.io/en/master/Set%20up%20study/#example-studies"
            target="_blank"
          >
            <span>example studies</span>
          </a>
          ).
        </List.Item>
        <List.Item>
          Using the visual interface of the CAM-App data can be easily summarized and analyzed (see{' '}
          <a
            key="CAM-App documentation"
            href="https://camtools-documentation.readthedocs.io/en/master/CAM-App/"
            target="_blank"
          >
            <span>CAM-App documentation</span>
          </a>
          ).
        </List.Item>
      </List>
      <Title className={classes.subtitle} ta="center" mt={40}>
        <Text inherit component="span">
          Flexible and extensible:
        </Text>
      </Title>
      <List
        ta="left"
        mt={30}
        ml={20}
        mr={20}
        spacing="sm"
        size="sm"
        icon={
          <ThemeIcon size={20} radius="xl">
            <IconArrowAutofitRight size={12} stroke={1.5} />
          </ThemeIcon>
        }
      >
        <List.Item>
          There are no limits: If it's possible on a web page, you can theoretically implement it in
          the C.A.M.E.L. software.
        </List.Item>
        <List.Item>
          Set up the C.A.M.E.L. software on your own server to have full control. Here it is
          possible to implement even more advanced features (for inspiration see future features
          sections in the documentation).
        </List.Item>
        <List.Item>
          If you want to extend the features of the CAM-App you can freely adjust our written
          functions in R or write your own (check out our source code).
        </List.Item>
      </List>
      <Title className={classes.subtitle} ta="center" mt={40}>
        <Text inherit component="span">
          There's so much more:
        </Text>
      </Title>
      <List
        ta="left"
        mt={30}
        ml={20}
        mr={20}
        spacing="sm"
        size="sm"
        icon={
          <ThemeIcon size={20} radius="xl">
            <IconArrowAutofitRight size={12} stroke={1.5} />
          </ThemeIcon>
        }
      >
        <List.Item>
          Learn the{' '}
          <a
            key="theoretical background"
            href="https://camtools-documentation.readthedocs.io/en/master/Cognitive-Affective%20Maps/#what-are-cognitive-affective-maps"
            target="_blank"
          >
            <span>theoretical background</span>
          </a>{' '}
          of Cognitive-Affective Maps and see{' '}
          <a
            key="how this method can help you"
            href="https://camtools-documentation.readthedocs.io/en/master/Cognitive-Affective%20Maps/#what-are-the-advantages-of-using-cognitive-affective-maps"
            target="_blank"
          >
            <span>how this method can help you</span>
          </a>{' '}
          with your research.
        </List.Item>
        <List.Item>
          Watch our{' '}
          <a
            key="introductory video"
            href="https://www.youtube.com/watch?v=ugrAo8wEPiI"
            target="_blank"
          >
            <span>introductory video</span>
          </a>{' '}
          online and build your first study after we have generated an account for you in minutes.
        </List.Item>

        <List.Item
          icon={
            <ThemeIcon size={20} radius="xl">
              <IconHelp size={12} stroke={1.5} />
            </ThemeIcon>
          }
        >
          You'll always find friendly people{' '}
          <a
            key="in our Slack channel"
            href="https://join.slack.com/t/cognitiveaffe-um96332/shared_invite/zt-1cybwr0tf-u2PWQh4L3BP3tuxLuH4c5w"
            target="_blank"
          >
            <span>in our Slack channel</span>
          </a>
          . We're happy to help!
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon size={20} radius="xl">
              <IconUsers size={12} stroke={1.5} />
            </ThemeIcon>
          }
        >
          Learning to build Cognitive-Affective Maps studies is most fun in a group. We offer
          workshops tailored to your needs (send an E-Mail to:{' '}
          <a key="Email" href="mailto:cam.contact@drawyourminds.de">
            <span>cam.contact@drawyourminds.de</span>
          </a>
          ).
        </List.Item>
        <List.Item
          icon={
            <ThemeIcon size={20} radius="xl">
              <IconPhoneCalling size={12} stroke={1.5} />
            </ThemeIcon>
          }
        >
          Whether you're in a hurry or looking for a custom study, we'll find an expert to help you.
          Please get in touch (send an E-Mail to:{' '}
          <a key="Email" href="mailto:cam.contact@drawyourminds.de">
            <span>cam.contact@drawyourminds.de</span>
          </a>
          ).
        </List.Item>
      </List>
      .
    </>
  );
}
