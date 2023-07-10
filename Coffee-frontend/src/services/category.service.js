import createApiClient from "./api.service";

class CategoryService {
    constructor(baseUrl = "/api/category") {
        this.api = createApiClient(baseUrl);
    }

    async createCategory(data) {
        return (await this.api.post("/create", data)).data;
    }

    async getCategory() {
        return (await this.api.get("/")).data;
    }

    async updateCategory(id, data) {
        return (await this.api.get(`/update/${id}`, data)).data;
    }

    async deleteCategory(id) {
        return (await this.api.delete(`/delete/${id}`)).data;
    }
}

export default new CategoryService();