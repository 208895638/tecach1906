<template>
  <div class="about">
    <h1>This is an about page</h1>
    
  </div>
</template>
<script>
export default {
  methods: {
    init(){
      this.$ajax.get("http://localhost:3000/",{
        start:2,
        limit:5
      })
      .then(res=>{
        console.log(res)
      })
    }
  },
  created () {
    this.init();
  }
}
</script>