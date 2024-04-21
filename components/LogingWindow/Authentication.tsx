import {
  TextInput,
  PasswordInput,
  Checkbox,
  Anchor,
  Paper,
  Title,
  Text,
  Container,
  Group,
  Button,
  Box,
  LoadingOverlay,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from './Authentication.module.css';

export function AuthenticationTitle({isLoading, isError, submitFormEvent}) {
  function submitForm(formData: any) {
    submitFormEvent(formData);
  }

  const form = useForm({
    initialValues: { password: '', email: '' },

    // functions will be used to validate values at corresponding key
    validate: {
      password: (value) => (value.length < 2 ? 'Name must have at least 2 letters' : null),
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    },
  });

  return (
    <Container size={420} my={40}>
      <form onSubmit={form.onSubmit(submitForm)}>
        <Title ta="center" className={classes.title}>
          Welcome into your world of thoughts!
        </Title>

      <Box pos="relative">
        <LoadingOverlay visible={isLoading} zIndex={1000} overlayProps={{ radius: 'sm', blur: 2 }} />
        <Paper withBorder shadow="md" p={30} mt={30} radius="md">
          <TextInput label="Email" placeholder="you@mantine.dev" {...form.getInputProps('email')} required />
          <PasswordInput label="Password" placeholder="Your password" {...form.getInputProps('password')} required mt="md" />
          <Group justify="space-between" mt="lg">
            {isError &&
              <Text c="red">Entered credentials are invalid</Text>
            }
          </Group>
          <Button type="submit" fullWidth mt="xl">
            Sign in
          </Button>
        </Paper>
      </Box>
      </form>
    </Container>
  );
}
