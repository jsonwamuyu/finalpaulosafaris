import { type SchemaTypeDefinition } from 'sanity'
import blog from './blog-schema'
import team from './team-schema';
import destination from './destination-schema'
import testimonial from './testimonial-schema';


export const schema: { types: SchemaTypeDefinition[] } = {
  types: [destination,blog, team, testimonial],
}
