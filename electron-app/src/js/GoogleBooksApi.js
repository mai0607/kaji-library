const { create } = require('axios')

const GoogleBooksApi = () => {
  const axios = create({
    baseURL: "https://www.googleapis.com/",
    withCredentials: false,
  });

  const books = {}

  books.getByIsbn = async (isbn) => {
    try {
      const result = await axios({
        method: "get",
        url: "/books/v1/volumes",
        params: {
          q: 'isbn:' + isbn,
        }
      });
      return result.data;
    } catch (error) {
      console.log(error.response.data);
      return {};
    }
  };

  return {
    books,
  };
}

export default GoogleBooksApi;