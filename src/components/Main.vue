<template>
  <b-container class="py-3">

    <b-row class="justify-content-center">
      <input-search v-model="searchText" :loading="loadingSearch"/>
    </b-row>

    <b-card-group columns>
      <card-post v-for="(post, i) of filteredPosts" :key="i" :post="post" />
    </b-card-group>

    <div v-if="filteredPosts.length === 0" class="text-center">Nothing was found for <b>{{ searchText }}</b></div>
  </b-container>
</template>
<script>
import CardPost from './ui/CardPost.vue'
import InputSearch from './ui/InputSearch.vue'

import ApiService from '@/service/api.service'

export default {
  components: { InputSearch, CardPost },
  name: 'MainComponent',
  data() {
    return {
      searchText: '',
      loadingSearch: false,
      posts: []
    }
  },
  created() {
    this.getPosts()
  },
  methods: {
    getPosts() {
      this.loadingSearch = true

      const arrFetchData = [ApiService.getPosts(), ApiService.getAuthors()]
      Promise.all(arrFetchData)
        .then(([posts, authors]) => {
          this.concatPostsAndAuthors(posts, authors)
        })
        .catch((err) => {
          console.error(err)
        })
        .finally(() => {
          this.loadingSearch = false
        })
    },
    concatPostsAndAuthors(posts, authors) {
      const authorsData = new Map()
      for (const author of authors) {
        authorsData.set(author.id, author)
      }

      this.posts = posts.map((post) => {
        return {...post, ...authorsData.get(post.userId)}
      })
    },
  },
  computed: {
    filteredPosts () {
      return this.posts.filter(post => post.name.toLowerCase().includes(this.searchText.toLowerCase()))
    }
  }
}



</script>
