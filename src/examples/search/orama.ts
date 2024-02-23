// import { create, search, insert } from '@orama/orama'

// const db = await create({
//   schema: {
//     name: 'string',
//     description: 'string',
//     price: 'number',
//     meta: {
//       rating: 'number',
//     },
//   },
// })

// await insert(db, {
//   name: 'Wireless Headphones',
//   description: 'Experience immersive sound quality with these noise-cancelling wireless headphones.',
//   price: 99.99,
//   meta: {
//     rating: 4.5,
//   },
// })

// const searchResult = await search(db, {
//   term: 'headphones',
// })

// console.log(searchResult.hits.map((hit) => hit.document))
