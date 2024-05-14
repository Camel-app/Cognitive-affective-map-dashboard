import { useState } from 'react';
import { Container, Group, Burger, ActionIcon } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Footer.module.css';
import { IconBrandTwitter, IconBrandYoutube } from '@tabler/icons-react';


const links = [
  { link: 'https://github.com/Camel-app', label: 'by Julius Fenn, Florian Gouret', target: "_blank"},
  { link: '/impressum', label: 'Impressum (Notice)', target: "_self"},
];


export function FooterSimple() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      target={link.target}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        //event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <footer className={classes.footer}>
      <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />



      <Group>
        <a href='https://www.youtube.com/channel/UC4pzmfkNS_P-W6CByGyVYlg' target='_blank'>
          <ActionIcon size="lg" variant="default" radius="xl">
            <IconBrandYoutube size={18} stroke={1.5} />
          </ActionIcon>
          </a>
        </Group>
        </Container>
    </footer>
  );
}
