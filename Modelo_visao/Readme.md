# Modelo de Visão

- ##  Equipe:
    - 476849 – João Victor de Almeida Félix
    - 472050 – Rayrisson Vinícius Alves de Lima


- ## Visão do Produto
    1. Requisitos de Negócio

        1.1 Contexto (caracterização do problema/oportunidade)

            Hoje existem diversas opções de sistemas de serviços clínicos, mas grande maioria deles realiza suas funções de forma limitada, dependendo muito de trabalho manual e funções simplificadas, a ideia do nosso sistema é automatizar o máximo de processos possíveis e tornar a comunicação clínica-paciente mais dinâmica e sustentável, por isso além das funções básicas de agendamento e histórico, usaremos também mensagens automáticas enviadas por email, whatsapp e entre outros, para notificar com antecedência ao usuário casa haja algum alteração.
        1.2 
            - Posicionamento do Problema O Problema de: má gestão das clínicas(consultas, históricos e etc).

            - Afeta: o administrador do sistema (secretário ou outro), o paciente e o médico.

            - Cujo impacto é: desperdício de tempo dos envolvidos, conflito de horários de consulta, cancelamentos de última hora e perda de históricos médicos.
            - Uma boa solução seria: usar um sistema para armazenar o histórico médico e agendar as consultas de forma que não seja possível marcar mais de uma consulta com o mesmo médico no mesmo horário, além disso automatizar o máximo de processos possíveis, para que alterações nas consultas sejam notificadas instantaneamente ao paciente.

        1.3 Alternativas e Concorrência

            - IClinic
                - Descrição: plataforma de gerenciamento de clínicas de saúde.
                - Pontos fortes: Suporte rápido, validade jurídica de todos os dados de seus consultórios, agendamento online.
                - Pontos fracos: Sem plano gratuito, preço elevado.

                - Link: https://iclinic.com.br/
            - DrConsulta
                - Descrição: plataforma de gestão de saúde que nasceu em 2011 com o propósito de salvar vidas.
                - Pontos fortes: Fácil de pagar, atendimento relâmpago.
                - Pontos fracos: Focado em agendamento, não possui funções extras.
                - Link: https://drconsulta.com/
        
        1.4 Requisitos (Objetivos) de Negócio

                - [RN-1] Minimizar cancelamento de consultas.
                - [RN-2] Flexibilização nos horários de atendimento.
                - [RN-3] Manter o histórico dos pacientes.
                - [RN-4] Melhorar a alocação dos médicos nos horários.
                - [RN-5] Apenas funcionários da clínica com permissão como o secretário podem agendar, cancelar e remarcar consultas.
                - [RN-6] Não podem ser realizadas mais de uma consulta com o mesmo médico no mesmo horário.
                - [RN-7] Manter o histórico de consultas realizadas.
    
    2. Caracterização de Usuário

        2.1 Personas

        2.2 Resumo dos Usuários

        2.3 Ambiente do Usuário

            Atualmente a maioria dos sistemas de clínica requerem instalação e rodam direto na máquina, o nosso sistema segue uma abordagem diferente, ele é um sistema web, ou seja, vai rodar em qualquer dispositivo com acesso a um navegador, o que torna ele de fácil acesso, pois desde que possua as credenciais, conseguirá acessá-lo.
    
    3. Requesitos do Produto

        3.1 Requisitos funcionais

            - Horários das consultas
                - [Hist-1] Como médico/secretário, eu posso consultar a agenda a fim de saber os horários das consultas do dia.

                - [Hist-2] Como secretário, eu posso filtrar a visualização da agenda a fim de visualizar somente os horários disponíveis.

                - [Hist-3]Como secretário, eu posso filtrar as consultas marcadas por especialidade a fim de visualizar somente determinadas consultas.

            - Agendamentos de consultas
                - [Hist-4] Como secretário, eu posso agendar uma nova consulta a fim de ocupar um horário disponível.

                - [Hist-5] Como médico/secretário, eu posso remarcar uma consulta a fim de definir uma nova data/horário para uma consulta já marcada.

                - [Hist-6] Como médico/secretário, eu posso cancelar uma consulta a fim de liberar aquele horário na agenda.

                - [Hist-7] Como médico/secretário, eu posso marcar o retorno do paciente a fim de ocupar um horário disponível em uma data futura que será definida.

            - Convênio
                - [Hist-8] Como paciente, gostaria de saber se meu convênio cobre a consulta/tratamento.

                - [Hist-9] Como paciente, eu posso saber se meu convênio cobre a consulta/tratamento a fim de saber se irei agendar uma consulta.

                - [Hist-10] Como secretário, posso cadastrar um novo convênio parceiro a fim de passar a aceitar aquele convênio.
            
            - Cadastros
                - [Hist-11] Como secretário, eu posso cadastrar pacientes a fim de saber informações que vão ser úteis ao médico(alergias, doenças crônicas, tipo sanguíneo e etc).

                - [Hist-12] Como secretário, eu posso cadastrar um novo médico(CRM, especialidade e etc) a fim dele começar a aceitar consultas.

        3.2 Requisitos não-funcionais

            - [RNF-1] O sistema deverá ter alta disponibilidade, por exemplo, 99% do tempo.
            - [RNF-2] O sistema deverá se comunicar com o Firebase.
            - [RNF-3] Acessos não autorizados ao sistema e dados associados não serão permitidos.
            - [RNF-4] O sistema deverá atender às normas legais, como as leis e regras da CFM.
            - [RNF-5] O sistema roda em qualquer plataforma com acesso ao navegador.

        3.3 Interfaces externas

            - Google Calendário 
                - Serviço de gerenciamento de datas e eventos.
                - Relacionado aos requisitos [Hist-1], [Hist-2], [Hist-3], [Hist-4], [Hist-5], [Hist-6], [Hist-7].
            
            - Firebase
                - O Firebase é categorizado como um programa de banco de dados NoSQL, que armazena dados em documentos do tipo JSON.
                - Relacionado aos requisitos [Hist-11], [Hist-12], [RNF-2].






