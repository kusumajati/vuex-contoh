<template>
  <div>
    <button @click="$store.dispatch('tambahAct')">tambah</button>
    <button @click="kurang()">kurang</button>
    <button @click="$store.dispatch('tambahActDelay')">tambah(delayed)</button>
    <br><br>
    <input type="text" @input="onChangeTitle($event)" placeholder="title">
    <button @click="changeTitle()">Change Title</button>

    <br />
    
  </div>
</template>

<script>
export default {
  data() {
    return {
        title:''
    };
  },
  props: {
      tambah:{type:Function},
      kurang:{type:Function}
  },
  methods: {
      onChangeTitle(event){
          this.title = event.target.value
      },
      changeTitle(){
          this.$emit('changedTitle', this.title)
      }
  }
};
</script>