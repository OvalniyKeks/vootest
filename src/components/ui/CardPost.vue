<template>
  <div class="card">
    <div class="card-body">
      <h5 class="card-title">{{ post.title }}</h5>
      <p class="card-text">{{ post.body }}</p>
      <div class="card-subtitle">{{ post.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    post: Object
  }
}
</script>
