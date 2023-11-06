import { Box, Heading, Text, Flex } from '@chakra-ui/react';

const MyComponent = () => {
  return (
    <Flex
      justifyContent="center"
      alignItems="center"
      minHeight="100vh"
    >
      <Box
        maxWidth="800px"
        p="20px"
      >
        <Box mb="40px">
          <Heading mb="20px" color="#4330EC" fontFamily="heading" fontWeight="bold" fontSize="40px">
            Iniciação científica e tecnológica
          </Heading>
          <Box textAlign="justify">
            <Text as="span" d="block" fontSize="16px" color="#000000" mt="2" textAlign="justify">
              A Unicamp oferece diversos programas de iniciação científica direcionadas a alunos do ensino superior, com objetivo de proporcionar aprendizagem de técnicas e métodos científicos, desenvolvimento pessoal e profissional, pensamento crítico, despertar vocação científica e incentivar potenciais talentos.
              Também visam despertar jovens talentos para a pesquisa científica e atividades artísticas, e possibilitar o contato de alunos indígenas, quilombolas, ribeirinhos e extrativistas com a vida acadêmica e com os docentes, pesquisadores e discentes que compõem a comunidade universitária da Unicamp.
            </Text>
          </Box>
        </Box>
        <Box>
          <Heading mb="20px" color="#4330EC" fontFamily="heading" fontWeight="bold" fontSize="40px">
            Intercâmbio
          </Heading>
          <Box textAlign="justify">
            <Text as="span" d="block" fontSize="16px" color="#000000" mt="40px" textAlign="justify">
              A Unicamp possui convênio com diversas universidades estrangeiras e tais convênios podem ser geridos tanto pela Deri quanto por docentes alocados nas unidades de ensino (que são as faculdades e institutos da Unicamp). As vagas de intercâmbio são negociadas entre os responsáveis pelo convênio na Unicamp e as universidades estrangeiras e são oferecidas por meio de editais de seleção. Mas é importante saber que, o fato da Unicamp possuir um acordo, ainda que com a previsão de intercâmbio, não garante que existam vagas disponíveis.
            </Text>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
}

export default MyComponent;
