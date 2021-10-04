# API REST DE CIDADES BRASILEIRAS 🇧🇷

Esta api serve para otmizar as consultas realizadas a api do próprio IBGE, simplificando informações e  facilitando os métodos de pesquisa a mesma!

Todas as configurações da api estão dentro de `/src`.

`package.json` é o arquivo que contém todas as dependências usadas no projeto.


Antes de iniciar verifique se  possui o nodeJS e o NPM instalados em em sua maquina.

## Instalar as dependências 

npm  i

## Rodar a aplicação

    npm start

# Consumindo a API.

Aqui descrevo um pouco como usar a API, nela você pode obter uma lista de municipios brasileiros formatados da seguinte forma:


  {
    "id": 2302206,
    "name": "Beberibe",
    "state": "Ceará",
    "uf": "CE",
    "region": "Nordeste"
  }

### Request

`GET localhost:3000/api/city`
Ela  será a sua rota padrão que retorna todos os municípios brasileiros, suportando alguns query params em sua url como:


### region:
`GET localhost:3000/api/city?region=Nordeste`
- Retorna todos os municipios da determinada região

### uf:
`GET localhost:3000/api/city?uf=CE`
- Retorna todos os municipios desse estado!

OBS: Você deve usar a sigla em maiusculo do estado!

### region:
`GET localhost:3000/api/city?name=Fortaleza`
- Retorna a cidade com o determinado nome, se existir!

OBS: Você deve usar a sigla em maiusculo do estado!


## Extra
Experimente combinar os parametros de pesquisa acima na mesma consulta!
 Exemplo:
`GET localhost:3000/api/city?region=Nordeste&uf=PB&name=Fortaleza`
