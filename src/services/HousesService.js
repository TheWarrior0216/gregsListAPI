import { dbContext } from "../db/DbContext.js"


class HousesService {
  async getAllHomes() {
    const homes = await dbContext.House.find()
    return homes
  }
  async searchHomes(searchQuery) {
    const pageNumber = searchQuery.page ? searchQuery.page - 1 : 0
    delete searchQuery.page

    const limitNumber = searchQuery.limit ? searchQuery.limit : 5
    delete searchQuery.limit
    const houses = await dbContext.House.find(searchQuery).limit(limitNumber).skip(pageNumber * limitNumber)
    const resultCount = await dbContext.House.countDocuments(searchQuery)
    return {
      limit: limitNumber,
      page: pageNumber + 1,
      query: searchQuery,
      count: resultCount,
      included: houses.length > 0 ? `${pageNumber * limitNumber + 1} - ${(pageNumber * limitNumber) + houses.length}` : 0,
      results: houses
    }
  }

}
export const housesService = new HousesService()