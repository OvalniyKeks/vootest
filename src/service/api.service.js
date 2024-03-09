const BASE_URL = 'https://jsonplaceholder.typicode.com/'

class ApiService {

  constructor() {
    this.fetch = async (url, ...args) => {
      return fetch(BASE_URL + url, args).then((response) => response.json())
    }
  }

  getAuthors() {
    return this.fetch('users')
  }

  getPosts() {
    return this.fetch('posts')
  }
}

export default new ApiService()
