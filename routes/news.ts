import express from 'express';
import controller from './../controller/news';
const router = express.Router();

router.get('/topStories', controller.getTopStories);
router.get('/searchNews/:keyword', controller.searchNews);

export default router;