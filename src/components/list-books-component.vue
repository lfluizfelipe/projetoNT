<template>
  <div class="list">
    <div class="list__title">
      <span class="list__title__box">Os livros estão fora da ordem!</span>
    </div>
    
    <v-list class="list__items">
      <v-row>
        <v-col
          class="list-item"
          v-for="book in descriptions"
          :key="book.description"
          cols="4"
        >
          <v-list-item>
            {{ book }}
          </v-list-item>
        </v-col>
      </v-row>
    </v-list>
    
    <div class="footer">
      <v-btn 
        class="footer__shuffle-btn"
        variant="outlined"
        @click="shuffleList"
      >
        Embaralhar
      </v-btn>
    </div>

  </div>

</template>

<script lang="ts">
/* eslint-disable vue/no-unused-components */
import { defineComponent, ref } from 'vue';
import {database} from '../database/database'

export default defineComponent({
name: 'ListBooksComponent',
  setup() {
    const descriptions = ref([...database.map(item => item.description)]);

    return { descriptions };
  },
  methods: {
    shuffleList: function(this: { descriptions: string[] | undefined }) {
      shuffleList(this.descriptions);
    },
  },
});

// const shuffledDatabase = database;

// const descriptions = ref(database.map(item => item.description));

// const shuffledDescriptions = ref([...descriptions.value]);

// function shuffleList() {
//   console.log(shuffledDescriptions.value);
// }

function shuffleList(descriptions: string[] | undefined) {
  if (descriptions) {
    for (let i = descriptions.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [descriptions[i], descriptions[j]] = [descriptions[j], descriptions[i]];
    }
  }
}

</script>

<style lang="sass" scoped>
.list
  flex-direction: column
  &__title
    font-size: 22px
    display: flex
    justify-content: center
    font-weight: 700
    color: #0C090A
    padding: 10px
    &__box
      text-align: center
      background: #FDD610
      width: 300px
      border-radius: 5px
  &__items
    overflow-y: hidden
    overflow: hidden
    background-color: transparent !important
.list-item
  margin: -10px
  display: flex
  justify-content: center
  font-size: 18px
  font-weight: 700
  color: #0C090A

.footer
  display: flex
  justify-content: space-around
  margin: 5px
  &__shuffle-btn
    align-self: center
    margin: 5px
    font-size: 15px
    font-weight: 700
    border: 2px solid black
    width: 120px
    height: 60px !important
</style>