import { useState } from 'react';
import {
  Container,
  Title,
  Text,
  Accordion,
  Group,
  Button,
  Stack,
  Paper,
  ThemeIcon,
  Box,
  Divider,
  SimpleGrid,
  List,
  
} from '@mantine/core';
import {
  IconBrandWhatsapp,
  IconMail,
  
  IconHeadset,
  IconMessage2,
  IconCalendarTime,
  
  IconBook,
  
  IconArrowRight,
  IconFileDescription,
  IconListCheck,
  IconBrandZoom,
  IconCheck,
} from '@tabler/icons-react';

export default function SupportPage() {
  const [expanded, setExpanded] = useState<string[]>(['basics']);

  // Mapeamento dos IDs de vídeos do YouTube para cada seção
  const tutorialVideos = {
    basics: 'dQw4w9WgXcQ', // Substitua pelos IDs reais dos vídeos
    'sending-promotions': 'dQw4w9WgXcQ',
    scheduling: 'dQw4w9WgXcQ',
    analytics: 'dQw4w9WgXcQ',
    advanced: 'dQw4w9WgXcQ',
    channels: 'dQw4w9WgXcQ',
  };

  return (
    <Container size="xl" py={60}>
      {/* Hero Section */}
      <Box mb={60}>
        <Title ta="center" size="h1" mb={20}>
          Suporte e{' '}
          <Text span fz="h1" fw="bolder" variant="gradient" gradient={{ from: 'green', to: 'lime' }}>
            Ajuda
          </Text>
        </Title>
        <Text size="lg" c="dimmed" ta="center" maw={800} mx="auto" mb={40}>
          Estamos aqui para ajudar você a aproveitar ao máximo o KAJU. Encontre tutoriais, 
          dicas e suporte personalizado para todas as suas dúvidas.
        </Text>
      </Box>

      {/* Main Support Content */}
      <SimpleGrid cols={{ base: 1, md: 2 }} spacing={40} mb={60}>
        {/* Left Column - Tutorials */}
        <Box>
          <Paper shadow="md" radius="lg" p="xl" withBorder mb={30}>
            <Group mb={20}>
              <ThemeIcon 
                size={50} 
                radius={50}
                variant="gradient" 
                gradient={{ from: 'green', to: 'lime' }}
              >
                <IconBook size={25} />
              </ThemeIcon>
              <Title order={2}>Tutoriais e Guias</Title>
            </Group>
            
            <Text mb={30}>
              Confira nossos tutoriais passo a passo para aproveitar ao máximo sua experiência com o KAJU.
            </Text>
            
            <Accordion 
              multiple 
              value={expanded} 
              onChange={setExpanded}
              variant="separated"
              radius="md"
            >
              <Accordion.Item value="basics">
                <Accordion.Control>
                  <Group>
                    <ThemeIcon color="green" radius="xl">
                      <IconFileDescription size={18} />
                    </ThemeIcon>
                    <Text fw={500}>Começando com o KAJU</Text>
                  </Group>
                </Accordion.Control>
                <Accordion.Panel>
                  <div style={{ marginBottom: '20px' }}>
                    <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/${tutorialVideos.basics}`}
                      title="Começando com o KAJU"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ borderRadius: '8px' }}
                     />
                  </div>
                  
                  <List spacing="sm">
                    <List.Item>
                      <Text fw={500}>Como criar sua conta</Text>
                      <Text size="sm" c="dimmed">Guia completo para criar e configurar sua conta KAJU em menos de 5 minutos.</Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>Navegando pela plataforma</Text>
                      <Text size="sm" c="dimmed">Conheça as principais funcionalidades e áreas da plataforma.</Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>Configurando seu perfil</Text>
                      <Text size="sm" c="dimmed">Personalize seu perfil e configure suas preferências iniciais.</Text>
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="sending-promotions">
                <Accordion.Control>
                  <Group>
                    <ThemeIcon color="green" radius="xl">
                      <IconMessage2 size={18} />
                    </ThemeIcon>
                    <Text fw={500}>Como enviar uma promoção</Text>
                  </Group>
                </Accordion.Control>
                <Accordion.Panel>
                  <div style={{ marginBottom: '20px' }}>
                    <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/${tutorialVideos['sending-promotions']}`}
                      title="Como enviar uma promoção"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ borderRadius: '8px' }}
                     />
                  </div>
                  
                  <List spacing="sm">
                    <List.Item>
                      <Text fw={500}>Criando sua primeira promoção</Text>
                      <Text size="sm" c="dimmed">Aprenda a estruturar uma promoção eficaz que gera engajamento.</Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>Adicionando imagens e links</Text>
                      <Text size="sm" c="dimmed">Saiba como enriquecer sua promoção com elementos visuais e chamadas para ação.</Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>Selecionando canais de distribuição</Text>
                      <Text size="sm" c="dimmed">Escolha os melhores canais para sua promoção: newsletter, comunidade ou grupos.</Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>Revisando e enviando</Text>
                      <Text size="sm" c="dimmed">Confira todas as etapas de revisão antes de enviar sua promoção.</Text>
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="scheduling">
                <Accordion.Control>
                  <Group>
                    <ThemeIcon color="green" radius="xl">
                      <IconCalendarTime size={18} />
                    </ThemeIcon>
                    <Text fw={500}>Como agendar uma promoção</Text>
                  </Group>
                </Accordion.Control>
                <Accordion.Panel>
                  <div style={{ marginBottom: '20px' }}>
                    <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/${tutorialVideos.scheduling}`}
                      title="Como agendar uma promoção"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ borderRadius: '8px' }}
                     />
                  </div>
                  
                  <List spacing="sm">
                    <List.Item>
                      <Text fw={500}>Usando o calendário de agendamento</Text>
                      <Text size="sm" c="dimmed">Navegue pelo calendário e escolha a data ideal para sua promoção.</Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>Configurando horários estratégicos</Text>
                      <Text size="sm" c="dimmed">Aprenda a identificar os melhores horários para enviar suas promoções.</Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>Criando uma série de promoções programadas</Text>
                      <Text size="sm" c="dimmed">Configure várias promoções em sequência para campanhas mais longas.</Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>Editando ou cancelando agendamentos</Text>
                      <Text size="sm" c="dimmed">Saiba como modificar ou cancelar promoções já agendadas.</Text>
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="analytics">
                <Accordion.Control>
                  <Group>
                    <ThemeIcon color="green" radius="xl">
                      <IconListCheck size={18} />
                    </ThemeIcon>
                    <Text fw={500}>Métricas e relatórios</Text>
                  </Group>
                </Accordion.Control>
                <Accordion.Panel>
                  <div style={{ marginBottom: '20px' }}>
                    <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/${tutorialVideos.analytics}`}
                      title="Métricas e relatórios"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ borderRadius: '8px' }}
                     />
                  </div>
                  
                  <List spacing="sm">
                    <List.Item>
                      <Text fw={500}>Entendendo o painel de métricas</Text>
                      <Text size="sm" c="dimmed">Conheça as principais métricas disponíveis para avaliar o desempenho de suas promoções.</Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>Analisando taxas de engajamento</Text>
                      <Text size="sm" c="dimmed">Aprenda a interpretar dados de engajamento e conversão.</Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>Gerando relatórios personalizados</Text>
                      <Text size="sm" c="dimmed">Crie relatórios sob medida para suas necessidades específicas.</Text>
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="advanced">
                <Accordion.Control>
                  <Group>
                    <ThemeIcon color="green" radius="xl">
                      <IconFileDescription size={18} />
                    </ThemeIcon>
                    <Text fw={500}>Recursos avançados</Text>
                  </Group>
                </Accordion.Control>
                <Accordion.Panel>
                  <div style={{ marginBottom: '20px' }}>
                    <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/${tutorialVideos.advanced}`}
                      title="Recursos avançados"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ borderRadius: '8px' }}
                     />
                  </div>
                  
                  <List spacing="sm">
                    <List.Item>
                      <Text fw={500}>Segmentação de público</Text>
                      <Text size="sm" c="dimmed">Divida seus contatos em grupos específicos para promoções mais direcionadas.</Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>Automação de mensagens</Text>
                      <Text size="sm" c="dimmed">Configure fluxos de mensagens automáticas baseadas em ações do usuário.</Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>Integração com outras plataformas</Text>
                      <Text size="sm" c="dimmed">Conecte o KAJU com suas outras ferramentas de marketing e vendas.</Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>Criação de formulários personalizados</Text>
                      <Text size="sm" c="dimmed">Crie formulários para coletar dados específicos de seus clientes.</Text>
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>

              <Accordion.Item value="channels">
                <Accordion.Control>
                  <Group>
                    <ThemeIcon color="green" radius="xl">
                      <IconFileDescription size={18} />
                    </ThemeIcon>
                    <Text fw={500}>Gerenciando canais e grupos</Text>
                  </Group>
                </Accordion.Control>
                <Accordion.Panel>
                  <div style={{ marginBottom: '20px' }}>
                    <iframe
                      width="100%"
                      height="315"
                      src={`https://www.youtube.com/embed/${tutorialVideos.channels}`}
                      title="Gerenciando canais e grupos"
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      style={{ borderRadius: '8px' }}
                     />
                  </div>
                  
                  <List spacing="sm">
                    <List.Item>
                      <Text fw={500}>Configurando sua newsletter personalizada</Text>
                      <Text size="sm" c="dimmed">Aprenda a criar newsletters exclusivas para seu negócio.</Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>Criando e gerenciando grupos</Text>
                      <Text size="sm" c="dimmed">Saiba como moderar e administrar grupos de forma eficiente.</Text>
                    </List.Item>
                    <List.Item>
                      <Text fw={500}>Otimizando seu canal oficial</Text>
                      <Text size="sm" c="dimmed">Dicas para maximizar o alcance e engajamento do seu canal.</Text>
                    </List.Item>
                  </List>
                </Accordion.Panel>
              </Accordion.Item>
            </Accordion>
          </Paper>

          <Paper shadow="md" radius="lg" p="xl" withBorder>
            <Group mb={20}>
              <ThemeIcon 
                size={50} 
                radius={50}
                variant="gradient" 
                gradient={{ from: 'green', to: 'lime' }}
              >
                <IconHeadset size={25} />
              </ThemeIcon>
              <Title order={2}>Agende uma demonstração</Title>
            </Group>
            
            <Text size="md" mb={30}>
              Quer conhecer melhor a plataforma antes de começar? Agende uma demonstração personalizada com um de nossos especialistas.
            </Text>
            
            <Box mb={20}>
              <Text fw={500} mb={5}>Durante a demonstração, você poderá:</Text>
              <List spacing="xs" size="sm" icon={
                <ThemeIcon color="green" size={20} radius="xl">
                  <IconCheck size={14} />
                </ThemeIcon>
              }>
                <List.Item>Ver todas as funcionalidades em tempo real</List.Item>
                <List.Item>Tirar dúvidas específicas sobre seu negócio</List.Item>
                <List.Item>Receber dicas personalizadas para seu caso</List.Item>
                <List.Item>Conhecer as melhores práticas da plataforma</List.Item>
              </List>
            </Box>
            
            <Button 
              fullWidth
              variant="gradient" 
              gradient={{ from: 'green', to: 'lime' }}
              leftSection={<IconCalendarTime size={18} />}
            >
              Agendar demonstração
            </Button>
          </Paper>
        </Box>

        {/* Right Column - Support Info */}
        <Box>
          <Paper shadow="md" radius="lg" p="xl" withBorder mb={30}>
            <Group mb={20}>
              <ThemeIcon 
                size={50} 
                radius={50}
                variant="gradient" 
                gradient={{ from: 'green', to: 'lime' }}
              >
                <IconHeadset size={25} />
              </ThemeIcon>
              <Title order={2}>Nosso Compromisso</Title>
            </Group>
            
            <Text size="md" mb={20}>
              No KAJU, acreditamos que um suporte de qualidade faz toda a diferença. Nosso compromisso é garantir que você tenha a melhor experiência possível com nossa plataforma.
            </Text>
            
            <List
              spacing="lg"
              size="md"
              center
              icon={
                <ThemeIcon color="green" size={24} radius="xl">
                  <IconArrowRight size={16} />
                </ThemeIcon>
              }
              mb={30}
            >
              <List.Item>
                <Text fw={500}>Resposta rápida</Text>
                <Text size="sm" c="dimmed">Garantimos responder todas as solicitações em até 24 horas úteis.</Text>
              </List.Item>
              <List.Item>
                <Text fw={500}>Suporte personalizado</Text>
                <Text size="sm" c="dimmed">Cada cliente é único e merece atenção personalizada para suas necessidades.</Text>
              </List.Item>
              <List.Item>
                <Text fw={500}>Melhoria contínua</Text>
                <Text size="sm" c="dimmed">Seu feedback é essencial para melhorarmos constantemente nossos serviços.</Text>
              </List.Item>
              <List.Item>
                <Text fw={500}>Transparência total</Text>
                <Text size="sm" c="dimmed">Comunicação clara e honesta em todas as interações.</Text>
              </List.Item>
            </List>

            <Divider my={30} />

            <Title order={3} mb={20}>Entre em contato conosco</Title>
            
            <Stack gap={20}>
              <Paper p="md" withBorder>
                <Group>
                  <ThemeIcon 
                    size={40} 
                    radius={40}
                    color="green"
                  >
                    <IconMail size={20} />
                  </ThemeIcon>
                  <Box>
                    <Text fw={600}>Suporte por E-mail</Text>
                    <Text size="sm" c="dimmed">Resposta em até 24 horas úteis</Text>
                  </Box>
                </Group>
                <Button 
                  variant="outline" 
                  color="green" 
                  mt={15}
                  fullWidth
                  component="a"
                  href="mailto:atendimentoaocliente.valedosol@gmail.com"
                  leftSection={<IconMail size={18} />}
                >
                  atendimentoaocliente.valedosol@gmail.com
                </Button>
              </Paper>
              
              <Paper p="md" withBorder>
                <Group>
                  <ThemeIcon 
                    size={40} 
                    radius={40}
                    color="green"
                  >
                    <IconBrandWhatsapp size={20} />
                  </ThemeIcon>
                  <Box>
                    <Text fw={600}>Suporte via WhatsApp</Text>
                    <Text size="sm" c="dimmed">Disponível de segunda a sexta, das 8h às 18h</Text>
                  </Box>
                </Group>
                <Button 
                  variant="outline" 
                  color="green" 
                  mt={15}
                  fullWidth
                  component="a"
                  href="https://wa.me/5589994176493"
                  target="_blank"
                  leftSection={<IconBrandWhatsapp size={18} />}
                >
                  (89) 9 9417-6493
                </Button>
              </Paper>
            </Stack>
          </Paper>

          <Paper shadow="md" radius="lg" p="xl" withBorder>
            <Group mb={20}>
              <ThemeIcon 
                size={50} 
                radius={50}
                variant="gradient" 
                gradient={{ from: 'green', to: 'lime' }}
              >
                <IconBrandZoom size={25} />
              </ThemeIcon>
              <Title order={2}>Dúvidas Frequentes</Title>
            </Group>
            
            <Text size="md" mb={30}>
              Encontre respostas rápidas para as perguntas mais comuns dos nossos usuários.
            </Text>
            
            <Accordion variant="separated" radius="md">
              <Accordion.Item value="faq-1">
                <Accordion.Control>
                  <Text fw={500}>Como faço para começar a usar o KAJU?</Text>
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm">
                    Para começar a usar o KAJU, basta criar sua conta em nosso site ou aplicativo. O processo é simples e rápido. Após o cadastro, você terá acesso a todas as funcionalidades básicas da plataforma. Recomendamos assistir ao nosso tutorial "Começando com o KAJU" para aproveitar ao máximo sua experiência.
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
              
              <Accordion.Item value="faq-2">
                <Accordion.Control>
                  <Text fw={500}>Quais são os planos disponíveis?</Text>
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm">
                    O KAJU oferece três planos principais: Básico, Profissional e Empresarial. Cada plano inclui diferentes recursos e limites de envios. Você pode comparar os planos em nossa página de preços ou entrar em contato com nossa equipe para uma consultoria personalizada sobre qual plano atende melhor às necessidades do seu negócio.
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
              
              <Accordion.Item value="faq-3">
                <Accordion.Control>
                  <Text fw={500}>Como posso cancelar minha assinatura?</Text>
                </Accordion.Control>
                <Accordion.Panel>
                  <Text size="sm">
                    Você pode cancelar sua assinatura a qualquer momento através da seção "Minha conta" no painel de controle. Após o cancelamento, você continuará tendo acesso aos recursos do seu plano até o final do período já pago. Não há taxas de cancelamento, e você pode reativar sua assinatura quando desejar.
                  </Text>
                </Accordion.Panel>
              </Accordion.Item>
              
             
            </Accordion>
          </Paper>
        </Box>
      </SimpleGrid>
    </Container>
  );
}