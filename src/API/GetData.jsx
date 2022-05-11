import axios from 'axios'

export default class GetData {
    static async getAll() {
        try {
          const res = await axios.get('https://jsonplaceholder.typicode.com/posts')
          .then(response => {
            // console.log(response.data[0])
            return response.data
          })
          return res
        } catch (e) {
          alert(e.message)
        }
      }
}
