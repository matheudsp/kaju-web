import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  
  Box,
  Burger,
  Button,
  Container,
  Drawer,
  Group,
  Stack,
  Text,
  useMantineColorScheme,
} from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { useAuth } from '../../contexts/AuthContext';

interface NavItem {
  label: string;
  path: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: 'Início', path: '/' },
  { label: 'Preços', path: '/pricing' },
  { label: 'Como funciona?', path: '/how-to' },
  { label: 'Suporte', path: '/support' },
];

export function Navbar() {
  const [opened, { toggle, close }] = useDisclosure(false);
  const router = useRouter();
  const { isAuthenticated, logout } = useAuth();
  const { colorScheme, setColorScheme } = useMantineColorScheme();
  const dark = colorScheme === 'dark';

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const toggleColorScheme = () => {
    setColorScheme(dark ? 'light' : 'dark');
  };

  const handleNavigation = (path: string) => {
    router.push(path);
    close();
  };

  return (
    <Box
      py="md"
      px="md"
      style={{
        position: 'sticky',
        top: 0,
        zIndex: 1000,
        backgroundColor: dark ? 'var(--mantine-color-dark-6)' : 'var(--mantine-color-white)',
        borderBottom: '1px solid var(--mantine-color-gray-3)',
      }}
    >
      <Container size="xl">
        <Group justify="space-between" align="center">
          {/* Logo */}
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
            <Group>
              <Text size="xl" fw="bold" variant="gradient" gradient={{ from: 'green', to: 'lime' }}>
                KAJU
              </Text>
            </Group>
          </Link>

          {/* Desktop Navigation */}
          <Group visibleFrom="md" gap="lg">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.path}
                variant="subtle"
                onClick={() => handleNavigation(item.path)}
                color={router.pathname === item.path ? 'primary' : 'gray'}
              >
                {item.label}
              </Button>
            ))}
          </Group>

          {/* Actions Group */}
          <Group>
            {/* <ActionIcon
              variant="outline"
              color={dark ? 'yellow' : 'blue'}
              onClick={toggleColorScheme}
              title="Toggle color scheme"
            >
              {dark ? <IconSun size={18} /> : <IconMoon size={18} />}
            </ActionIcon> */}

            <Group visibleFrom="md">
              {isAuthenticated ? (
                <>
                  <Button variant="outline"  color="green" onClick={() => handleNavigation('/dashboard')}>
                    Dashboard
                  </Button>
                  <Button variant="subtle" color="green" onClick={logout}>
                    Sair
                  </Button>
                </>
              ) : (
                <>
                  <Button
                    variant="gradient"
                    gradient={{ from: 'green', to: 'lime' }}
                    onClick={() => handleNavigation('/auth/signup')}
                  >
                    Assinar
                  </Button>
                  <Button
                    variant="outline"
                    color="green"
                    onClick={() => handleNavigation('/auth/login')}
                  >
                    Fazer login
                  </Button>
                </>
              )}
            </Group>

            {/* Mobile Burger */}
            <Burger opened={opened} onClick={toggle} hiddenFrom="md" />
          </Group>
        </Group>
      </Container>

      {/* Mobile Navigation Drawer */}
      <Drawer
        opened={opened}
        onClose={close}
        size="100%"
        padding="xl"
        hiddenFrom="md"
        zIndex={1000}
      >
        <Stack gap="xl" align="center" pt={40}>
          {NAV_ITEMS.map((item) => (
            <Button
              key={item.path}
              variant="subtle"
              size="lg"
              fullWidth
              onClick={() => handleNavigation(item.path)}
              color={router.pathname === item.path ? 'primary' : 'gray'}
            >
              {item.label}
            </Button>
          ))}

          {isAuthenticated ? (
            <>
              <Button
                variant="outline"
                size="lg"
                color="green"
                fullWidth
                onClick={() => handleNavigation('/dashboard')}
              >
                Dashboard
              </Button>
              <Button variant="subtle" size="lg" fullWidth onClick={logout}>
                Logout
              </Button>
            </>
          ) : (
            <>
              <Button
                size="lg"
                fullWidth
                onClick={() => handleNavigation('/auth/signup')}
                variant="gradient"
                gradient={{ from: 'green', to: 'lime' }}
              >
                Assinar
              </Button>
              <Button
                variant="outline"
                color="green"
                size="lg"
                fullWidth
                onClick={() => handleNavigation('/auth/login')}
              >
                Fazer login
              </Button>
            </>
          )}
        </Stack>
      </Drawer>
    </Box>
  );
}
