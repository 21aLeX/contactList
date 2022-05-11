import axios from 'axios'
import React, { Component } from 'react'

export default class GetData {
    static async getAll() {
        try {
          const url ='https://jsonplaceholder.typicode.com/posts'
          const response = await axios.get(url)
          .then((repos) => {
            return repos
          })
          return response
        } catch (e) {
          alert(e.message)
        }
      }
}
