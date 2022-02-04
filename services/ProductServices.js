import request from "./httpServices";

class ProductServices {
  getProduct() {
    return request.read("/");
  }
}

export default new ProductServices();
