const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (request, response) => {
  return response.json({message: 'Hello World'});
})

app.get('/cursos', (request, response) => {
  const query = request.query;
  console.log(query)
  return response.json(['curso 1', 'curso 2' , 'curso 3'])
});

app.post('/cursos', (request, response)=> {
  const body = request.body;
  console.log(body)
  return response.json(['curso 1', 'curso 2' , 'curso 3', 'curso 4']);
});

app.put('/cursos/:id', (request, response) => {
  const params = request.params;
  console.log(params)
  return response.json(['curso 5', 'curso 2' , 'curso 3', 'curso 4']);
});

app.patch('/cursos/:id', (request, response) => {
  const params = request.params;
  console.log(params)
  return response.json(['curso 5', 'curso 6' , 'curso 3', 'curso 4']);
})

app.delete('/cursos/:id', (request, response)=> {
  return response.json(['curso 5', 'curso 6' , 'curso 4']);
})


app.listen(3030, () => {})