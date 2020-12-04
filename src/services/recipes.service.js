import http from "../http-common";

class RecipesService {
    getAll() {
        return http.get("/recipes");
    }

    // get(id) {
    //     return http.get(`/recipe-create/${id}`);
    // }
    //
    create(data) {
        return http.post("/recipes/create", data);
    }
    //
    // update(id, data) {
    //     return http.put(`/recipe-create/${id}`, data);
    // }
    //
    // delete(id) {
    //     return http.delete(`/recipe-create/${id}`);
    // }
    //
    // deleteAll() {
    //     return http.delete(`/recipe-create`);
    // }
    //
    // findByTitle(title) {
    //     return http.get(`/recipe-create?title=${title}`);
    // }
}

export default new RecipesService();