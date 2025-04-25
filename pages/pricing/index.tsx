import { useState } from 'react';
import { useRouter } from 'next/router';
import {
  IconBrandWhatsapp,
  IconCheck,
  IconCloudUpload,
  IconDiscount2,
  IconFlame,
  IconReportAnalytics,
  IconUsers,
  IconX,
} from '@tabler/icons-react';
import {
  Badge,
  Box,
  Button,
  Card,
  Container,
  Divider,
  Grid,
  Group,
  List,
  rem,
  Switch,
  Text,
  ThemeIcon,
  Title,
  useMantineTheme,
} from '@mantine/core';

export default function PricingPage() {
  const [annually, setAnnually] = useState(true);
  const router = useRouter();
  const theme = useMantineTheme();

  const handleSubscribe = (plan: string) => {
    router.push('/auth/signup');
  };

  return (
    <Container size="xl" py={80}>
      <Title ta="center" mb={10}>
        Planos Simples e Transparentes
      </Title>
      <Text ta="center" c="dimmed" size="lg" mb={50} maw={700} mx="auto">
        Escolha o plano ideal para o seu negócio e comece a enviar promoções e notificações para
        seus clientes via WhatsApp hoje mesmo!
      </Text>

      {/* Billing Toggle */}
      <Group justify="center" mb={50}>
        <Text size="sm" fw={500}>
          Mensal
        </Text>
        <Switch
          size="lg"
          checked={annually}
          onChange={() => setAnnually(!annually)}
          color="green"
        />
        <Text size="sm" fw={500}>
          Anual
        </Text>
        <Badge color="green" variant="filled" ml="xs">
          Economize 20%
        </Badge>
      </Group>

      <Grid>
        {/* Basic Plan */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card withBorder shadow="sm" radius="md" p="xl">
            <Card.Section withBorder inheritPadding py="xs">
              <Text fw={700} ta="center">
                Iniciante
              </Text>
            </Card.Section>

            <Group justify="center" mt="md">
            
              <Text size="xl" fw={700} span>
                R$ {annually ? '20,00' : '25,00'}
                <Text span size="sm" c="dimmed">
                  {' '}
                  / mês
                </Text>
              </Text>
            </Group>

            {annually && (
              <Text size="xs" c="dimmed" ta="center">
                Faturado anualmente: R$ 240,00
              </Text>
            )}

            <Button
              fullWidth
              variant="outline"
              color="green"
              mt="xl"
              onClick={() => handleSubscribe('iniciante')}
            >
              Selecionar
            </Button>

            <List
              spacing="sm"
              size="sm"
              mt="md"
              center
              icon={
                <ThemeIcon color="green" size={20} radius="xl">
                  <IconCheck size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>1 mensagem por semana</List.Item>
              <List.Item>Envio de mensagens ao Newsletter, Comunidade e Grupo</List.Item>
              <List.Item>Suporte por email</List.Item>
            </List>
          </Card>
        </Grid.Col>

        {/* Pro Plan - Most Popular */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card
            withBorder
            shadow="md"
            radius="md"
            p="xl"
            style={{
              transform: 'scale(1.05)',
              border: `2px solid ${theme.colors.green[6]}`,
              position: 'relative',
            }}
          >
            <Badge
              color="green"
              variant="filled"
              size="lg"
              style={{
                position: 'absolute',
                top: -15,
                right: 'calc(50% - 60px)',
              }}
              leftSection={<IconFlame size={14} />}
            >
              Mais Popular
            </Badge>

            <Card.Section withBorder inheritPadding py="xs" bg="green.0">
              <Text fw={700} ta="center">
                Profissional
              </Text>
            </Card.Section>

            <Group justify="center" mt="md">
              <Text size="sm" td="line-through" c="dimmed">
                R$ 100,00
              </Text>
              <Text size="xl" fw={700} span>
                R$ {annually ? '52,72' : '65,90'}
                <Text span size="sm" c="dimmed">
                  {' '}
                  / mês
                </Text>
              </Text>
             
            </Group>

            {annually && (
              <Text size="xs" c="dimmed" ta="center">
                Faturado anualmente: R$ 632,60
              </Text>
            )}

            <Button
              fullWidth
              variant="gradient"
              gradient={{ from: 'green', to: 'lime' }}
              mt="xl"
              onClick={() => handleSubscribe('profissional')}
            >
              Selecionar
            </Button>

            <List
              spacing="sm"
              size="sm"
              mt="md"
              center
              icon={
                <ThemeIcon color="green" size={20} radius="xl">
                  <IconCheck size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>Todos benefícios do plano anterior</List.Item>
              <List.Item>3 mensagens por semana</List.Item>
              <List.Item>Automação para envio de mensagens</List.Item>
              <List.Item>Suporte prioritário 24/7 via WhatsApp</List.Item>
            </List>
          </Card>
        </Grid.Col>

        {/* Enterprise Plan */}
        <Grid.Col span={{ base: 12, md: 4 }}>
          <Card withBorder shadow="sm" radius="md" p="xl">
            <Card.Section withBorder inheritPadding py="xs">
              <Text fw={700} ta="center">
                Empresarial
              </Text>
            </Card.Section>

            <Group justify="center" mt="md">
              <Text size="xl" fw={700} span>
                Personalizado
              </Text>
            </Group>

            <Text size="xs" c="dimmed" ta="center">
              Consulte para mais informações
            </Text>

            <Button
              fullWidth
              variant="outline"
              color="green"
              mt="xl"
              onClick={() => router.push('/contato')}
            >
              Fale Conosco
            </Button>

            <List
              spacing="sm"
              size="sm"
              mt="md"
              center
              icon={
                <ThemeIcon color="green" size={20} radius="xl">
                  <IconCheck size={12} />
                </ThemeIcon>
              }
            >
              <List.Item>Todos benefícios do plano anterior</List.Item>
              <List.Item>Envio de mensagens ao newsletter e grupos personalizados (criados por você).</List.Item>
            </List>
          </Card>
        </Grid.Col>
      </Grid>

      {/* Feature section */}
      <Box my={100}>
        <Title ta="center" mb={50}>
          Principais Recursos
        </Title>
        <Grid>
          <Grid.Col span={{ base: 12, md: 3 }}>
            <Box ta="center">
              <ThemeIcon size={60} radius={60} color="green">
                <IconBrandWhatsapp size={30} />
              </ThemeIcon>
              <Text fw={700} mt="md">
                Integração WhatsApp
              </Text>
              <Text size="sm" c="dimmed" mt={5}>
                Conecte seu negócio diretamente com seus clientes onde eles já estão
              </Text>
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Box ta="center">
              <ThemeIcon size={60} radius={60} color="green">
                <IconUsers size={30} />
              </ThemeIcon>
              <Text fw={700} mt="md">
                Segmentação Avançada
              </Text>
              <Text size="sm" c="dimmed" mt={5}>
                Envie mensagens personalizadas para grupos específicos de clientes
              </Text>
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Box ta="center">
              <ThemeIcon size={60} radius={60} color="green">
                <IconReportAnalytics size={30} />
              </ThemeIcon>
              <Text fw={700} mt="md">
                Relatórios Detalhados
              </Text>
              <Text size="sm" c="dimmed" mt={5}>
                Acompanhe o desempenho de suas campanhas com métricas detalhadas
              </Text>
            </Box>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 3 }}>
            <Box ta="center">
              <ThemeIcon size={60} radius={60} color="green">
                <IconCloudUpload size={30} />
              </ThemeIcon>
              <Text fw={700} mt="md">
                Automação Completa
              </Text>
              <Text size="sm" c="dimmed" mt={5}>
                Configure mensagens automáticas e campanhas programadas
              </Text>
            </Box>
          </Grid.Col>
        </Grid>
      </Box>

      {/* FAQ Section */}
      <Box my={80}>
        <Title ta="center" mb={30}>
          Perguntas Frequentes
        </Title>

        <Box maw={800} mx="auto">
          <Box mb={30}>
            <Text fw={600} mb={10}>
              Quanto tempo leva para começar a usar o Kaju?
            </Text>
            <Text c="dimmed">
              Você pode começar a usar o Kaju imediatamente após a confirmação de pagamento. O
              processo de configuração é simples e intuitivo.
            </Text>
          </Box>

          <Divider my="xl" />

          <Box mb={30}>
            <Text fw={600} mb={10}>
              Posso mudar de plano depois?
            </Text>
            <Text c="dimmed">
              Sim! Você pode fazer upgrade ou downgrade do seu plano a qualquer momento. As
              alterações entram em vigor no próximo ciclo de faturamento.
            </Text>
          </Box>

          <Divider my="xl" />

          {/* <Box mb={30}>
            <Text fw={600} mb={10}>Existe um período de teste gratuito?</Text>
            <Text c="dimmed">Oferecemos um teste gratuito de 7 dias para que você possa experimentar todos os recursos do plano Profissional antes de decidir.</Text>
          </Box>
          
          <Divider my="xl" /> */}

          <Box mb={30}>
            <Text fw={600} mb={10}>
              Como funciona o suporte ao cliente?
            </Text>
            <Text c="dimmed">
              Oferecemos suporte por email para todos os planos. Os planos Profissional e Enterprise
              incluem suporte prioritário por WhatsAppz.
            </Text>
          </Box>
        </Box>
      </Box>

      {/* CTA Section */}
      <Box my={80} py={40} px={30} bg="green.0" style={{ borderRadius: theme.radius.md }}>
        <Title ta="center" size="h2" mb={15}>
          Pronto para impulsionar seu negócio?
        </Title>
        <Text ta="center" c="dimmed" size="lg" mb={30} maw={700} mx="auto">
          Comece a enviar promoções e conecte-se com seus clientes hoje mesmo!
        </Text>
        <Group justify="center">
          <Button
            size="lg"
            variant="gradient"
            gradient={{ from: 'green', to: 'lime' }}
            onClick={() => router.push('/auth/signup')}
          >
            Começar agora
          </Button>
          <Button size="lg" variant="outline" color="green" onClick={() => router.push('/contato')}>
            Falar com um especialista
          </Button>
        </Group>
      </Box>
    </Container>
  );
}
