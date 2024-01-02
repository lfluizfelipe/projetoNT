<template>
  <div class="home">
    <div class="home__title">
      <img
        class="home__logo"
        src="../assets/pngtree-bible-icon-cross.png"
      />
      Jogo-NT
    </div>

    <div class="container">

      <list-books-component 
        class="container__list"
      />
    
      <answer-component 
        class="container__answer"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import ListBooksComponent from './list-books-component.vue';
import AnswerComponent from './answer-component.vue';

export default defineComponent({
name: 'HomeComponent',
components: {
    ListBooksComponent,
    AnswerComponent,
  },

  methods: {
  }
});

</script>

<style lang="sass" scoped>
.home
  font-family: Abel
  margin: 5px
  &__title
    display: flex
    justify-content: center
    font-weight: 800
    font-size: 28px
    font-family: 'Fascinate Inline'
    color: #0C090A
  &__logo
    margin-left: 10px
    max-height: 40px
    max-width: 50px
.container
  display: flex
  margin-top: 5px
  &__list
    margin-right: 5px
    flex: 0.8
    background-color: #40e4c0
    border-radius: 10px
  &__answer
    border: 2px solid #40e4c0
    border-radius: 10px
    flex: 1.2
</style>