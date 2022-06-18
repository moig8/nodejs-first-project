import {Router} from 'express';

const router = Router()

router.get('/', (req, res) => res.render('index', {title: 'First Website with Nodejs'}));
//aca definimos la ruta a la que accedera, tambien dentro de la funcion render ademas de decirle que archivo debe
//abrir le puedo mandar un objeto con una propiedad HTML desde el backend, como lo estoy haciendo con el objeto title
router.get('/about', (req, res) => res.render('about'));

router.get('/contact', (req, res) => res.render('contact'));

export default router;