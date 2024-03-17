import { Serializer } from 'jsonapi-serializer'

const MovieSerializer = new Serializer('movies', {
  attributes: ['title', 'genre', 'year'],
  keyForAttribute: 'camelCase'
})

export default MovieSerializer
