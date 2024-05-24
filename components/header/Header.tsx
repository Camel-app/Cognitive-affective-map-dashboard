import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';

const links = {
  notLogged: [
    { link: '/', label: 'Home', target: "_self"},
    { link: '/information', label: 'Information', target: "_self"},
    { link: 'https://osf.io/q5hj4/', label: 'Documentation', target: "_blank"},
    { link: 'https://camgalaxy.github.io/', label: 'C.A.M.E.L. (participant view)', target: "_blank"},
    { link: 'https://fennapps.shinyapps.io/CAMtools_CAMapp/', label: 'CAM-App', target: "_blank"},
    { link: '#', label: 'Register', target: "_self"},
    { link: '/login', label: 'Log in' },
  ],
  logged: [
    { link: '/experiments', label: 'Experiments' },
    { link: 'https://osf.io/q5hj4/', label: 'Documentation', target: "_blank"},
    { link: '/logout', label: 'Log out' },
  ],
};

export function HeaderSimple({ activeLink, loggedIn }: any) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(activeLink);

  const items = (loggedIn == true ? links.logged : links.notLogged).map((link) => (
    <a
      key={link.label}
      href={link.link}
      target={link.target}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        setActive(activeLink);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}