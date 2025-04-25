// web/components/SignupForm/SignupForm.tsx
import { useState } from 'react';
import { TextInput, PasswordInput, Button, Paper, Title, Text, Container, Group, Anchor } from '@mantine/core';
import { useForm } from '@mantine/form';
import { useAuth } from '../../contexts/AuthContext';
import Link from 'next/link';

export function SignupForm() {
  const { signup } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    },
    validate: {
      name: (value: string | any[]) => (value.length > 0 ? null : 'Name is required'),
      email: (value: string) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value: string | any[]) => (value.length < 6 ? 'Password must be at least 6 characters' : null),
      confirmPassword: (value: any, values: { password: any; }) => 
        value !== values.password ? 'Passwords do not match' : null,
    },
  });

  const handleSubmit = async (values: { name: string; email: string; password: string; confirmPassword: string }) => {
    setError(null);
    setLoading(true);
    
    try {
      const { confirmPassword, ...signupData } = values;
      await signup(signupData);
    } catch (err: any) {
      setError(err.message || 'Registration failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container size={420} my={40}>
      <Title ta="center">Create an account</Title>
      <Text c="dimmed" size="sm" ta="center" mt={5}>
        Already have an account?{' '}
        <Link href="/login" passHref>
          <Anchor size="sm" component="a">Login</Anchor>
        </Link>
      </Text>

      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Name"
            placeholder="Your name"
            required
            {...form.getInputProps('name')}
          />
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            mt="md"
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...form.getInputProps('password')}
          />
          <PasswordInput
            label="Confirm Password"
            placeholder="Confirm your password"
            required
            mt="md"
            {...form.getInputProps('confirmPassword')}
          />
          
          {error && (
            <Text c="red" size="sm" mt="sm">
              {error}
            </Text>
          )}

          <Group justify="flex-end" mt="md">
            <Button type="submit" fullWidth loading={loading}>
              Sign up
            </Button>
          </Group>
        </form>
      </Paper>
    </Container>
  );
}