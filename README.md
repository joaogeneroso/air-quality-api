
# Air Quality API

Esta API foi desenvolvida em Node.js para se conectar ao Firebase Realtime Database e faz parte do projeto de TCC, cujo objetivo é medir a qualidade do ar em ambientes fechados utilizando um dispositivo com ESP32 e sensores de qualidade do ar. A API fornece dados em tempo real sobre temperatura, umidade, concentração de partículas no ar (PM), e a presença de gases inflamáveis (MQ-5).

## Tecnologias Utilizadas

- **Node.js**: Plataforma de desenvolvimento para o servidor.
- **Express.js**: Framework para gerenciamento de rotas e requisições HTTP.
- **Firebase Realtime Database**: Armazenamento dos dados capturados em tempo real.
- **ESP32**: Microcontrolador responsável pela coleta de dados dos sensores.
- **Sensores**:
  - **DHT22**: Sensor de temperatura e umidade.
  - **GP2Y1010AU0F**: Sensor de partículas no ar (PM).
  - **MQ-5**: Sensor de gases inflamáveis.

## Funcionalidades

- **Coleta de dados em tempo real**: A API se conecta ao Firebase Realtime Database para recuperar os dados de qualidade do ar capturados pelo dispositivo.
- **Endpoints REST**: A API expõe endpoints que permitem a leitura dos dados de qualidade do ar.
- **Integração com app iOS**: O aplicativo iOS consome a API para exibir informações sobre a qualidade do ar e fornecer sugestões ao usuário.

## Endpoints

### GET - /api/data 
Retorna os dados atuais da qualidade do ar.
