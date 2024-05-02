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
  Timeline,
  NumberInput,
  FileInput,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import classes from './NewExpForm.module.css';

export function NewExpForm({ isLoading, isError, submitFormEvent }: any) {
  function submitForm(formData: any) {
    let configuration: File = formData.configuration;
    const reader = new FileReader();
    reader.onload = async (e: any) => {
      const text = e.target.result;
      submitFormEvent({
        configuration: text,
        expName: formData.expName,
        participantsNeeded: formData.participantsNeeded,
        link: formData.link,
      });
    };
    reader.readAsText(configuration);
  }

  const form = useForm({
    initialValues: { name: '', participantsNeeded: '', link: '', configuration: '', template: '' },
  });

  return (
    <div>
      <Title ta="center" className={classes.title}>
        Adding a new experiment
      </Title>
      <Container size={420} my={40}>
        <form onSubmit={form.onSubmit(submitForm)}>
          <TextInput
            label="Name of the experiment"
            placeholder="you@mantine.dev"
            {...form.getInputProps('name')}
            required
          />
          <NumberInput
            label="Number of participants needed"
            withAsterisk
            placeholder="10"
            {...form.getInputProps('participantsNeeded')}
          />
          <TextInput
            label="Link to redirect participants to at the end"
            placeholder="you@mantine.dev"
            {...form.getInputProps('link')}
            required
          />

          <FileInput
            label="Configuration"
            description="Input description"
            {...form.getInputProps('configuration')}
          />
          <FileInput
            label="Template"
            description="Input description"
            {...form.getInputProps('template')}
          />
          <Group justify="space-between" mt="lg">
            {isError && <Text c="red">Entered credentials are invalid</Text>}
          </Group>
          <Button type="submit" fullWidth mt="xl">
            Sign in
          </Button>
        </form>
      </Container>
    </div>
  );
}
