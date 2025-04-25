import { useState } from 'react';
import Link from 'next/link';
import {
  Anchor,
  Button,
  Container,
  Group,
  Paper,
  PasswordInput,
  Text,
  TextInput,
  Title,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import { useAuth } from '../../contexts/AuthContext';

export function LoginForm() {
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const form = useForm({
    initialValues: {
      email: '',
      password: '',
    },
    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
      password: (value) => (value.length > 0 ? null : 'Password is required'),
    },
  });

  const handleSubmit = async (values: { email: string; password: string }) => {
    setError(null);
    setLoading(true);

    try {
      await login(values);
    } catch (err: any) {
      setError(err.message || 'Login failed. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Container size={420} my={40}>
      <Paper withBorder shadow="md" p={30} mt={30} radius="md">
        <Title ta="center">Bem-vindo de volta!</Title>
        <Text ta="center">Faça login para continuar!</Text>

        <form onSubmit={form.onSubmit(handleSubmit)}>
          <TextInput
            label="Email"
            placeholder="your@email.com"
            required
            {...form.getInputProps('email')}
          />
          <PasswordInput
            label="Password"
            placeholder="Your password"
            required
            mt="md"
            {...form.getInputProps('password')}
          />
          {error && (
            <Text c="red" size="sm" mt="sm">
              {error}
            </Text>
          )}
          Esqueceu a senha?
          <Group justify="flex-end" mt="md">
            <Button type="submit" fullWidth loading={loading}>
              Sign in
            </Button>
          </Group>
          Ao fazer login você concorda com os Termos de Uso e Política de Privacidade
          <Text c="dimmed" size="sm" ta="center" mt={5}>
            Não tem uma conta?{' '}
            <Link href="/signup" passHref>
              <Anchor size="sm" component="a">
                Se cadastre
              </Anchor>
            </Link>
          </Text>
        </form>
      </Paper>
    </Container>
  );
}
