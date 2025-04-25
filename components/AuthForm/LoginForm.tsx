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
  Grid,
  Box,
  useMantineTheme,
  rem,
} from '@mantine/core';
import { useMediaQuery } from '@mantine/hooks';
import { useForm } from '@mantine/form';
import { useAuth } from '../../contexts/AuthContext';
import { IconLeaf } from '@tabler/icons-react';

export function LoginForm() {
  const { login } = useAuth();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const theme = useMantineTheme();
  const isMobile = useMediaQuery(`(max-width: ${theme.breakpoints.md})`);

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
    <Container size="xl" py={40}>
      <Grid>
        {/* Left icon section - only visible on large screens */}
        <Grid.Col visibleFrom="md" span={6}>
          <Box 
            style={{ 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              height: '100%' 
            }}
          >
            <IconLeaf 
              size={rem(240)} 
              color={theme.colors.green[6]} 
              stroke={1.2}
            />
          </Box>
        </Grid.Col>

        {/* Login form section */}
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Box maw={420} mx="auto">
            <Paper 
              p={30} 
              radius="md"
              withBorder={!isMobile}
              shadow={isMobile ? "none" : "md"}
            >
              <Title ta="center" c="green">Bem-vindo de volta!</Title>
              <Text ta="center" mb="xl">Faça login para continuar!</Text>

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

                <Group justify="space-between" mt="sm">
                  <Text size="sm" c="dimmed">
                    Esqueceu a senha?
                  </Text>
                </Group>

                {error && (
                  <Text c="red" size="sm" mt="sm">
                    {error}
                  </Text>
                )}

                <Button 
                  type="submit" 
                  fullWidth 
                  loading={loading}
                  mt="xl"
                  variant="gradient"
                  gradient={{ from: 'green.7', to: 'lime.5' }}
                >
                  Sign in
                </Button>

                <Text size="xs" c="dimmed" ta="center" mt="md">
                  Ao fazer login você concorda com os Termos de Uso e Política de Privacidade
                </Text>
                
                <Text c="dimmed" size="sm" ta="center" mt="lg">
                  Não tem uma conta?{' '}
                  <Link href="/signup" passHref>
                    <Anchor size="sm" component="a" c="green">
                      Se cadastre
                    </Anchor>
                  </Link>
                </Text>
              </form>
            </Paper>
          </Box>
        </Grid.Col>
      </Grid>
    </Container>
  );
}