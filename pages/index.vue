<template>
  <div>
      <my-header></my-header>
  </div>
</template>

<script>
import header from '@/components/header/index'
export default {
    data(){
        return {
            name:'1111111111'
        }
    },
    components: {
        'my-header':header
    }
}
</script>

<style>
</style>

