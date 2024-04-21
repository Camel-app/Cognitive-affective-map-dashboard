import { useState } from 'react';
import { Container, Group, Burger } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import classes from './Header.module.css';

const links = [
  { link: '/experiments', label: 'Home' },
  { link: '/documentation', label: 'Documentation' },
];
const logLinks = [
  { link: '/login', label: 'Log in' },
  { link: '/logout', label: 'Log out' },
];

export function HeaderSimple({ activeLink, loggedIn }: any) {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(activeLink);

  console.log(loggedIn);
  const items = links.concat(logLinks[loggedIn == false ? 0 : 1]).map((link) => (
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
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}
