import express from 'express'
import bodyParser from 'body-parser';

const app = express();
const PORT = 5000;

app.use(bodyParser.json());

app.get('/',(req,res) => { 
    console.log('[TEST]')
    res.send('Hello')
 }) 

app.listen(PORT,() => console.log(`Servidor no PORT: http://localhost:${PORT}`));

// USUARIOS //

// app.post('/users/signup')

// app.post('/users/login')

// app.put('/users/:id')

// app.delete('/users/:id')

// // ADMS //

//  app.post('/admin/login')
//  // add //

//  app.get('/admin/reports')
// // add //

// app.get('/admin/users')
// // add //

// /** ITENS */
