import { Router } from "express"
import { listMovies, searchMovie } from '../controllers/moviesController'

const router = Router()

router.get('/', listMovies)
router.get('/search', searchMovie)

export default router
