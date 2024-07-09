import { housesService } from "../services/HousesService.js";
import BaseController from "../utils/BaseController.js";

export class HousesController extends BaseController {
  constructor() {
    super('api/houses')
    this.router.get('', this.getAllHomes)
    this.router.get('/search', this.searchHomes)
  }
  async getAllHomes(request, response, next) {
    try {
      const houses = await housesService.getAllHomes()
      console.log(houses)
      response.send(houses)
    } catch (error) {
      next(error)
    }
  }
  async searchHomes(request, response, next) {
    try {
      const searchQuery = request.query
      const houses = await housesService.searchHomes(searchQuery)
      response.send(houses)
    } catch (error) {
      next(error)
    }

  }
}