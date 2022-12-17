
# Tiny zaku-kun

É um bot que envia mensagens positivas com o intuito de ajudar pessoas com depressão e anciedade.


## Autores

- [@🍁LoniMaple🍁](https://www.github.com/LoniMaple)




## Licença

[MIT](https://choosealicense.com/licenses/mit/)



![Logo](/Main/Src/Images/ZakuCatGirl.png)




## Funcionalidades

- Enviar mensagens podendo ser (uma mensagem de texto comun, história ou figuras utilizando texto).
- Personalidades diferentes [Pink, Green e Blue] de acordo com o usuário (não implementado ainda!).
- Multiplataforma.



## Documentação

[Documentação](https://docs.google.com/document/d/1NlP9C7S2iMhNymzXcxgjytZOQO4HAy0-FMRTiIAMp5E/edit?usp=sharing)




## Documentação da API

#### Retorna resposta padrão

```http
  GET /
```

| HTTP   | Retorna       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `GET` | `Nya (OωO) 🍁🐼🍁` | Retorna a mensagem padrão para o client saber que o server está funcionando. |

#### Retorna todos os itens

```http
  GET /tinyzaku/
```

| HTTP   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `GET`      | `object` | Retorna todos objetos no banco de dados. |


#### Retorna um objeto de determinado tipo

```http
  GET /tinyzaku/data
```

| Parâmetro Query   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `type`      | `string` | Retorna aleatóriamente um objeto do tipo que foi passado. |


#### Cria um novo objeto no banco de dados

```http
  POST /tinyzaku/data/new
```

| Parâmetros  Json | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` |  O ID do objeto **Gerado automaticamente**. |
| `type`      | `string` |  **Obrigatório** O tipo do objeto podendo ser qualquer tipo que esteja no banco de dados. |
| `data`      | `string` |  **Obrigatório** As informações que aquele objeto carrega (Exemplo: Bom dia Pessoa Bonita!). |
| `color`      | `number` |  **Obrigatório** A cor que vai ser utilizada pelo client de (0 min e max 7). |


#### Retorna um item

```http
  DELETE /tinyzaku/del/id:
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `id`      | `string` | **Obrigatório**. O ID do objeto a ser deletado do banco de dados. |


## Variáveis de Ambiente

Para rodar esse projeto, você vai precisar adicionar as seguintes variáveis de ambiente no seu .env

`MONGODB_URI`

`PORT`

## Documentação de cores

| Cor               | Numero Correspondente                                                |
| ----------------- | ---------------------------------------------------------------- |
| Black       | ![#000000](https://via.placeholder.com/10/0a192f?text=+) 0 |
| Red       | ![#f54542](https://via.placeholder.com/10/f54542?text=+) 1 |
| Green       | ![#75f542](https://via.placeholder.com/10/75f542?text=+) 2 |
| Yellow       | ![#f5ce42](https://via.placeholder.com/10/f5ce42?text=+) 3 |
| Blue      | ![#0033ff](https://via.placeholder.com/10/0033ff?text=+) 4 |
| Magenta       | ![#ff0084](https://via.placeholder.com/10/ff0084?text=+) 5 |
| Cyan      | ![#00fbff](https://via.placeholder.com/10/00fbff?text=+) 6 |
| White       | ![#ffffff](https://via.placeholder.com/10/ffffff?text=+) 7 |


## Rodando localmente

Clone o projeto

```bash
  git clone git+https://github.com/LoniMaple/projeto-livre-backend-on18-Loni-Maple.git
```

Entre no diretório do projeto

```bash
  cd /Main/Core
```

Instale as dependências

```bash
  npm i
```

Inicie o servidor

```bash
  npm run start
```


## Contribuindo

Contribuições são sempre bem-vindas!

Para contribuir faça um fork do projeto e faça commits em uma brach diferente da main ou maple.
Pull Requests serão analizados e se tudo estiver ok ele vai ser mesclado a branch de testes `(maple)`.

`Por favor, não ultilize nada desrespeitoso!`.

