import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';
import { BsClipboardData } from 'react-icons/bs';

const links = {
  logged: [
    { link: '/experiments', label: 'Experiments' },
    { link: '/documentation', label: 'Documentation' },
    { link: '/logout', label: 'Log out' },
  ],
  notLogged: [
    { link: '/documentation', label: 'Documentation' },
    { link: '/login', label: 'Log in' },
  ],
};

export function HeaderSimple({ activeLink, loggedIn }: any) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(activeLink);

  const items = (loggedIn == true ? links.logged : links.notLogged).map((link) => (
    <a
      key={link.label}
      href={link.link}
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
        <BsClipboardData size={28} />
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
