import { HttpService } from '@nestjs/axios';
import { Get, Injectable } from '@nestjs/common'
import { map } from 'rxjs';
const dotenv = require('dotenv')
dotenv.config()

@Injectable()
export class TmdbService {
  constructor(private httpService: HttpService) {}

  getPopularMovies() {
    const url = `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.TMDB_API_KEY}`
    return this.httpService.get(url).pipe(map(response => response.data))
  }
}
