import * as dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import morgan from 'morgan';
import { routes } from './routes/routes';
import ejs from 'ejs'
import bodyParser from 'body-parser';

const app = express();
app.use(express.json());
app.use(morgan("tiny"));
app.use(routes)
app.set('view engine', 'ejs');
app.set('views', './views');
var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.urlencoded({ extended: false }))
app.use(express.static(__dirname + '/public'));
export {app}
