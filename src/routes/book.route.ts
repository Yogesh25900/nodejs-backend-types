import {Request,Response, Router} from 'express';
import { BookController } from '../controllers/book.controller';
const router:Router = Router();


const bookController = new BookController();
router.get('/',bookController.getBooks)

router.get('/:bookid',bookController.getBookById)
router.post('/create',bookController.createBook)
export default router;