
import { useRouter } from 'next/router';
import {
  Container,
  Title,
  Text,
  Group,
  Button,
  Stack,
  Paper,
  Grid,
  Box,
  ThemeIcon,
  List,
  
  Card,
  Accordion,
  SimpleGrid,
} from '@mantine/core';
import {
  IconBrandWhatsapp,
  IconDeviceMobile,
  IconArrowRight,
  IconPhone,
  IconUsers,
  IconRobot,
  IconCalendar,
  IconNews,
  IconShoppingCart,
} from '@tabler/icons-react';

export default function ComoFuncionaPage() {
  const router = useRouter();

  return (
    <Container size="xl" py={60}>
      {/* Hero Section */}
      <Box mb={80}>
        <Title ta="center" size="h1" mb={20}>
          Como funciona o{' '}
          <Text  fz="h1" fw="bolder" variant="gradient"  gradient={{ from: 'green', to: 'lime' }}>
            KAJU
          </Text>
        </Title>
        <Text size="lg" c="dimmed" ta="center" maw={800} mx="auto" mb={40}>
          Fique à vontade para promover uma promoção, evento ou até mesmo uma notícia quando quiser!
        </Text>

        <Paper shadow="md" radius="lg" p="xl" withBorder>
          <Text size="xl" fw={600} mb={20} c="green.7" ta="center">
            Esteja onde o seu público gosta de estar!
          </Text>
          <Text size="md" mb={20} ta="center">
            Atualmente, o WhatsApp é a maior ferramenta de comunicação do Brasil. Com o KAJU, você aproveita
            esse canal para conectar sua marca diretamente com seus consumidores.
          </Text>
        </Paper>
      </Box>

      {/* Principais Canais Section */}
      <Box mb={80}>
        <Title order={2} ta="center" mb={50}>
          Estamos em todos os canais de comunicação do WhatsApp!
        </Title>

        <Grid gutter="xl">
          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card shadow="sm" p="lg" radius="md" withBorder h="100%">
              <ThemeIcon 
                size={60} 
                radius={60}
                variant="gradient" 
                gradient={{ from: 'green', to: 'lime' }}
                mb={20}
              >
                <IconNews size={30} />
              </ThemeIcon>
              <Text fw={700} size="lg" mb={10}>Newsletter</Text>
              <Text c="dimmed" mb={20}>
                Receba conteúdo selecionado diretamente no WhatsApp. Notícias, promoções e novidades 
                filtradas por especialistas.
              </Text>
              <Button 
                variant="outline" 
                color="green" 
                fullWidth 
                rightSection={<IconArrowRight size={16} />}
                component="a"
                href="https://wa.me/123456789?text=Quero%20receber%20a%20newsletter%20KAJU"
                target="_blank"
              >
                Assinar Newsletter
              </Button>
            </Card>
          </Grid.Col>

          <Grid.Col span={{ base: 12, md: 4 }}>
            <Card shadow="sm" p="lg" radius="md" withBorder h="100%">
              <ThemeIcon 
                size={60} 
                radius={60}
                variant="gradient" 
                gradient={{ from: 'green', to: 'lime' }}
                mb={20}
              >
                <IconUsers size={30} />
              </ThemeIcon>
              <Text fw={700} size="lg" mb={10}>Comunidade</Text>
              <Text c="dimmed" mb={20}>
                Participe do nosso grupo e receba alertas de promoções, notícias
                e conteúdos exclusivos sobre temas de seu interesse.
              </Text>
              <Button 
                variant="outline" 
                color="green" 
                fullWidth 
                rightSection={<IconArrowRight size={16} />}
                component="a"
                href="https://chat.whatsapp.com/invite/grupo-kaju"
                target="_blank"
              >
                Entrar no Grupo
              </Button>
            </Card>
          </Grid.Col>

          {/* <Grid.Col span={{ base: 12, md: 4 }}>
            <Card shadow="sm" p="lg" radius="md" withBorder h="100%">
              <ThemeIcon 
                size={60} 
                radius={60}
                variant="gradient" 
                gradient={{ from: 'green', to: 'lime' }}
                mb={20}
              >
                <IconPhone size={30} />
              </ThemeIcon>
              <Text fw={700} size="lg" mb={10}>Canal</Text>
              <Text c="dimmed" mb={20}>
                Siga nosso canal oficial para ofertas, novidades e conteúdos diários. Informação 
                curada e direta, sem interrupções.
              </Text>
              <Button 
                variant="outline" 
                color="green" 
                fullWidth 
                rightSection={<IconArrowRight size={16} />}
                component="a"
                href="https://whatsapp.com/channel/kaju-oficial"
                target="_blank"
              >
                Acessar o Canal
              </Button>
            </Card>
          </Grid.Col> */}
        </Grid>
      </Box>

      {/* Como Funciona Section */}
      <Box mb={80}>
        <Title order={2} ta="center" mb={15}>
          Por que o KAJU funciona?
        </Title>
        <Text c="dimmed" ta="center" maw={700} mx="auto" mb={50}>
          Entregamos conteúdo relevante nos canais onde seu público já está presente
        </Text>

        <Paper shadow="sm" p="xl" radius="md" withBorder mb={40}>
          <Text fw={600} size="lg" mb={10}>
            Na verdade... queremos te contar duas coisas importantes:
          </Text>
          
          <List spacing="lg" size="md" center icon={
            <ThemeIcon color="green" size={24} radius="xl">
              <IconArrowRight size={16} />
            </ThemeIcon>
          }>
            <List.Item>
              <Text fw={500}>
                ☝️ Talvez você já tenha uma suspeita disso, mas as pessoas tendem a considerar muito mais 
                uma compra quando ela é recomendada por fontes de confiança. 
                <Text span fw={700}> Guarde essa informação.</Text>
              </Text>
            </List.Item>
            <List.Item>
              <Text fw={500}>
                ✌️ E-mail e mensagens diretas ainda são os principais canais para impulsionar compras, 
                ganhando de social pago e social orgânico. (Marigold 2024)
              </Text>
            </List.Item>
          </List>
          
          <Text fw={500} mt={20}>
            Por isso, o investimento em mídia dentro de newsletters e comunicação direta tem crescido tanto.
          </Text>
        </Paper>

        <Paper shadow="sm" p="xl" radius="md" withBorder>
          <Title order={3} mb={20} ta="center">
            "Mas o que é a KAJU?"
          </Title>
          <Text size="md" mb={20}>
            A galera já não entrega jornal de bicicleta na porta de casa há décadas... 
            consumir notícias nos portais online te faz fechar mais popups que site pirata... 
            alguma coisa tá errada.
          </Text>
          <Text size="md" fw={500} mb={20}>
            Nós entendemos as pessoas ocupadas! Por isso, a KAJU surgiu: 
            <Text span fw={700}> direto ao ponto, direto no WhatsApp, as notícias e promoções que realmente importam.</Text>
          </Text>
          <Text size="md">
            Lembra que falamos sobre as pessoas preferirem indicações? Não é apenas uma suposição ou opinião nossa.
            Estudos da Nielsen confirmam que recomendações de fontes confiáveis são decisivas nas decisões de compra.
          </Text>
        </Paper>
      </Box>

      

      {/* Features */}
      <Box mb={80}>
        <Title order={2} ta="center" mb={50}>
          Recursos Principais
        </Title>

        <SimpleGrid cols={{ base: 1, sm: 2, md: 3 }} spacing="xl">
          <Paper p="md" radius="md" withBorder>
            <Group mb="md">
              <ThemeIcon size={40} radius={40} color="green">
                <IconDeviceMobile size={20} />
              </ThemeIcon>
              <Text fw={700}>WhatsApp First</Text>
            </Group>
            <Text size="sm" c="dimmed">
              Comunicação direta no aplicativo mais utilizado pelos brasileiros, 
              sem necessidade de baixar outros apps.
            </Text>
          </Paper>
          
          <Paper p="md" radius="md" withBorder>
            <Group mb="md">
              <ThemeIcon size={40} radius={40} color="green">
                <IconPhone size={20} />
              </ThemeIcon>
              <Text fw={700}>Divulgação Multicanal</Text>
            </Group>
            <Text size="sm" c="dimmed">
              Newsletters, grupos e canais integrados para alcançar seu público
              de diferentes formas.
            </Text>
          </Paper>
          
          <Paper p="md" radius="md" withBorder>
            <Group mb="md">
              <ThemeIcon size={40} radius={40} color="green">
                <IconRobot size={20} />
              </ThemeIcon>
              <Text fw={700}>Automação</Text>
            </Group>
            <Text size="sm" c="dimmed">
              Programe envios e automatize suas comunicações para economizar tempo
              e manter consistência (disponível em planos específicos).
            </Text>
          </Paper>
          
          <Paper p="md" radius="md" withBorder>
            <Group mb="md">
              <ThemeIcon size={40} radius={40} color="green">
                <IconShoppingCart size={20} />
              </ThemeIcon>
              <Text fw={700}>Marketing eficaz</Text>
            </Group>
            <Text size="sm" c="dimmed">
              Promova produtos, serviços e eventos em um lugar para pessoas reais - sem visualizações fantasmas ou públicos indesejados! 
            </Text>
          </Paper>
          
          <Paper p="md" radius="md" withBorder>
            <Group mb="md">
              <ThemeIcon size={40} radius={40} color="green">
                <IconUsers size={20} />
              </ThemeIcon>
              <Text fw={700}>Grupos Personalizados</Text>
            </Group>
            <Text size="sm" c="dimmed">
              No plano Empresarial, crie grupos específicos para o seu
              empreendimento e fale diretamente com sua audiência.
            </Text>
          </Paper>
          
          <Paper p="md" radius="md" withBorder>
            <Group mb="md">
              <ThemeIcon size={40} radius={40} color="green">
                <IconCalendar size={20} />
              </ThemeIcon>
              <Text fw={700}>Agendamento</Text>
            </Group>
            <Text size="sm" c="dimmed">
              Planeje seu conteúdo com antecedência e mantenha sua marca
              consistente aos olhos de todos!
            </Text>
          </Paper>
        </SimpleGrid>
      </Box>

      {/* FAQ */}
      <Box mb={80}>
        <Title order={2} ta="center" mb={50}>
          Perguntas Frequentes
        </Title>

        <Accordion variant="separated" radius="md">
          <Accordion.Item value="how-works">
            <Accordion.Control>Como funciona o KAJU na prática?</Accordion.Control>
            <Accordion.Panel>
              O KAJU oferece três canais principais de comunicação via WhatsApp: Newsletter para conteúdo curado, 
              Grupos para discussões e interações, e Canal para anúncios e atualizações. Você pode utilizar esses
              canais para enviar promoções, notícias e conteúdos para seu público-alvo.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="business-plan">
            <Accordion.Control>O que oferece o plano Empresarial?</Accordion.Control>
            <Accordion.Panel>
              O plano Empresarial permite criar newsletters e grupos personalizados para o seu próprio negócio, 
              além de oferecer recursos avançados de automação para programar e enviar mensagens de forma 
              consistente e sem esforço manual. Você terá um canal exclusivo para sua marca.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="automation">
            <Accordion.Control>Como funciona a automação?</Accordion.Control>
            <Accordion.Panel>
              A automação do KAJU permite agendar mensagens. Isso significa que você pode preparar sua comunicação com antecedência 
              e deixar o sistema enviar no momento ideal da semana, mantendo seu público engajado sem esforço constante.
            </Accordion.Panel>
          </Accordion.Item>

          <Accordion.Item value="benefits">
            <Accordion.Control>Quais são os benefícios em comparação com email marketing?</Accordion.Control>
            <Accordion.Panel>
              O WhatsApp tem taxas de abertura muito superiores ao email (90% vs. 20% em média). Além disso, 
              as mensagens são entregues instantaneamente e notificadas ao usuário, criando uma comunicação 
              mais imediata e eficiente. O ambiente mais pessoal do WhatsApp também gera maior confiança 
              e engajamento.
            </Accordion.Panel>
          </Accordion.Item>
        </Accordion>
      </Box>

      {/* CTA */}
      <Box py={40} px={30} bg="green.0" style={{ borderRadius: 12 }}>
        <Stack align="center">
          <ThemeIcon size={80} radius={40} color="green">
            <IconBrandWhatsapp size={40} />
          </ThemeIcon>
          <Title order={2} ta="center" mt={20}>
            Pronto para revolucionar sua comunicação?
          </Title>
          <Text c="dimmed" ta="center" size="lg" maw={700} mx="auto" mb={30}>
            Conecte-se com seu público onde ele já está e transforme a maneira como você 
            se comunica.
          </Text>
          <Group>
            <Button 
              size="lg" 
              variant="gradient" 
              gradient={{ from: 'green', to: 'lime' }}
              onClick={() => router.push('/auth/signup')}
            >
              Começar Agora
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              color="green"
              onClick={() => router.push('/pricing')}
            >
              Ver Planos
            </Button>
          </Group>
        </Stack>
      </Box>
    </Container>
  );
}