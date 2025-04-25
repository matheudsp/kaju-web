import { Button, Container, Text, Title, Group, Stack } from '@mantine/core';
import { IconBrandWhatsapp, IconBellRinging, IconShoppingBag, IconArrowRight, IconHandClick } from '@tabler/icons-react';
import classes from './Welcome.module.css';

export function Welcome() {
  return (
    <Container size="lg">
      <Stack gap="xl" align="center" mt={80} mb={60}>
        <Title className={classes.title} ta="center">
          Impulsione seu negócio com{' '}
          <Text inherit variant="gradient" component="span" gradient={{ from: 'green', to: 'lime' }}>
            KAJU
          </Text>
        </Title>

        <Text color="dimmed" ta="center" size="lg" maw={700} mx="auto">
          Envie promoções e notificações para seus clientes via WhatsApp de forma simples e automatizada.
          Conecte-se diretamente com sua audiência através de newsletters e comunidades.
        </Text>

        <Group mt="md">
          <Button 
            size="lg" 
            rightSection={<IconArrowRight size={20} />}
            variant="gradient" 
            gradient={{ from: 'green', to: 'lime' }}
          >
            Cadastrar-se agora
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            color="green"
            leftSection={<IconHandClick size={20} />}
          >
            Ver Planos
          </Button>
        </Group>

        <Group mt={50} gap="xl">
          <Stack align="center" gap="xs">
            <IconBrandWhatsapp size={42} stroke={1.5} color="var(--mantine-color-green-6)" />
            <Text fw={500}>Integração WhatsApp</Text>
            <Text size="sm" color="dimmed" ta="center" maw={200}>
              Conecte-se diretamente com seus clientes onde eles já estão
            </Text>
          </Stack>

          <Stack align="center" gap="xs">
            <IconBellRinging size={42} stroke={1.5} color="var(--mantine-color-green-6)" />
            <Text fw={500}>Automação Inteligente</Text>
            <Text size="sm" color="dimmed" ta="center" maw={200}>
              Programe envios e crie campanhas recorrentes com facilidade
            </Text>
          </Stack>

          <Stack align="center" gap="xs">
            <IconShoppingBag size={42} stroke={1.5} color="var(--mantine-color-green-6)" />
            <Text fw={500}>Promoções Eficazes</Text>
            <Text size="sm" color="dimmed" ta="center" maw={200}>
              Aumente suas vendas com promoções direcionadas e engajamento real
            </Text>
          </Stack>
        </Group>
      </Stack>
    </Container>
  );
}