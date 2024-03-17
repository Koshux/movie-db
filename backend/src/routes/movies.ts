import { Router } from "express"
import { listMovies, searchMovie, searchGenre } from '../controllers/movies'

const router = Router()

router.get('/', listMovies)
router.get('/search', searchMovie)
router.get('/genres', searchGenre)

export default router
