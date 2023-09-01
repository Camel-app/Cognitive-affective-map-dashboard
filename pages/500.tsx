import { Title, Text, Button, Container, Group } from '@mantine/core';
import { useStyles } from '../public/theme';

export default function NotFoundTitle() {
    const { classes } = useStyles();

    return (
        <Container className={classes.root}>
            <div className={classes.label}>404</div>
            <Title className={classes.title}>You have found a secret place.</Title>
            <Text color="dimmed" size="lg" align="center" className={classes.description}>
                Unfortunately, this is only a 500 page. You may have mistyped the address, or the page has
                been moved to another URL.
            </Text>
            <Group position="center">
                <a key='back to homepage' href='/' target='_self'>
                    <Button variant="subtle" size="md">
                        Take me back to home page
                    </Button>
                </a>
            </Group>
        </Container>
    );
}