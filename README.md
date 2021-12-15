
# COMANDOS PARA GERAR A API

1 - Criar uma pasta chamada crud

2 - Dentro da pasta crud criar outra pasta chamada backend

3 - Dentro da pasta backend rodar o comando no terminal npm init -y

4 - Após isso rodar o comando npm i json-server (irá instalar todas as dependencias necessárias no projeto)

5 - Criar dentro da pasta backend o arquivo db.json e nele configurar o database
![image](https://user-images.githubusercontent.com/71105466/146099923-e7d61de0-46b5-453a-a363-40203bcca971.png)

6 - Ir no arquivo package.json e na linha 6 em script colocar esse trecho de código após apagar oq está lá:

    "scripts": {
    "start": "json-server --watch db.json --port 3001"}
  
  ![image](https://user-images.githubusercontent.com/71105466/146100190-b34cd39f-c8c9-4da5-937a-b826cff4ca9e.png)

  
  

# Estrutura das pastas no backend após todos os comandos
![image](https://user-images.githubusercontent.com/71105466/146099971-eebc7866-6b17-45e4-a3b3-72e51313dd60.png)


