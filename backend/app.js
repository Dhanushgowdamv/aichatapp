

import express from 'express';
import morgan from 'morgan';
import connect from './db/db.js';
import userRoutes from "./routs/user.route.js"

connect();
const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use('/users',userRoutes);
app.get('/',(req,res) => {
    res.send('helloworld')
});

export default app;