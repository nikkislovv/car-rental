import $api from "./index"

export default class RentCommandService {
    static async create(start, finish, carId) {
        const response = await $api.post('/1.0/Rents', {
            start,
            finish,
            carId
        })
        console.log(response)
        return response;
    }
}