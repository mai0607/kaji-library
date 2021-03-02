const { create } = require('axios')

class Api {
  constructor() {
    this.axios = create({
      baseURL: "http://localhost:5000",
      withCredentials: false,
    });
  }

  // NFCから借りた人を探す
  async getReturningBookById(id) {
    try {
      const result = await this.axios({
        method: "get",
        url: "/books/" + id + "/borroweds/",
        params: {
          "filter[where][hasReturned]": false
        },
      });
      return result.data;
    } catch (error) {
      console.log(error.response.data);
      return {};
    }
  }
  // NFCから本の情報を取得
  async getBookById(id) {
    try {
      const result = await this.axios({
        method: "get",
        url: "/books/" + id,
      });
      return result.data;
    } catch (error) {
      console.log(error.response.data);
      return {};
    }
  }
  // 貸し出されている本かチェック
  async checkBook(id) {
    try {
      const result = await this.axios({
        method: "get",
        url: "/books/" + id + "/borroweds/",
        params: {
          "filter[where][hasReturned]": false
        },
      });
      return result.data;
    } catch (error) {
      console.log(error.response.data);
      return {};
    }
  }
  // 学生証からSlack名を取得
  async getUserById(id) {
    try {
      const result = await this.axios({
        method: "get",
        url: "/users/" + id,
      });
      return result.data;
    } catch (error) {
      console.log(error.response.data);
      return {};
    }
  }
  // 貸出処理
  async createBorrowed(data) {
    try {
      const result = await this.axios({
        method: "post",
        data: data,
        url: "/borroweds",
      });
      return result.data;
    } catch (error) {
      console.log(error.response.data);
      return {};
    }
  }
  // 返却処理
  async updateBorrowed(id) {
    try {
      const result = await this.axios({
        method: "patch",
        data: {
          "borrowingEndDate": new Date(),
          "hasReturned": true,
        },
        url: "/borroweds/" + id,
      });
      return result.data;
    } catch (error) {
      console.log(error.response.data);
      return {};
    }
  }
}

export default Api;