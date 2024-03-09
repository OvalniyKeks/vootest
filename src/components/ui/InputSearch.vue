<template>
  <div class="input-group mb-3 col-md-4">
    <div class="input-group-append">
      <div class="input-group-prepend">
        <span class="input-group-text">
          <span v-if="loading" class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>
          <svg v-else xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search"
            viewBox="0 0 16 16">
            <path
              d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
          </svg>
        </span>
      </div>
    </div>
    <input type="search" class="form-control" :value="modelValue" @input="updateModelValue"
      placeholder="Filter by author..." aria-label="Filter by author..." aria-describedby="button-addon2">
  </div>
</template>

<script>
import { useDebounce } from '@/utils';

export default {
  props: {
    modelValue: String,
    loading: Boolean
  },
  methods: {
    updateModelValue(event) {
      useDebounce(() => this.$emit('input', event.target.value), 800)()
    }
  }

}
</script>
