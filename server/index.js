import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import productRoutes from './routes/products.routes';


const server = express();
server.use(cors());
server.use(bodyParser.json());
server.use(bodyParser.urlencoded({ extended: false }));


server.use('/products', productRoutes)

server.get('/', (req, res) => res.status(200).send({
   message: 'welcome to the venstore api'
}));


server.use((error, req, res, next) => {
    if (process.env.NODE_ENV !== 'production') {
        console.log(error.stack);
    }
    console.log(error.message, "err-log")
    return res.status(500).json({
        message: 'There was an error on the server. Please try again.',
    });
 });
 

server.get('*', (req, res) => {
    return res.status(404).json({
        message: 'Page not found!'
    });
});


const port = process.env.PORT || 5000;
server.listen(port, () => console.log(`Server is running on PORT ${port}`));
