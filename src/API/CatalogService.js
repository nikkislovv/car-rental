import axios from "axios";
//поменять урл на 8000 и настроить гейтвэй
export default class PostService {
    static async getAll(pageNumber, pageSize) {
        const response = await axios.get('http://localhost:8000/api/1.0/catalog', {
            params: {
                pageNumber: pageNumber,
                pageSize: pageSize
            }
        })
        return response;
    }
}