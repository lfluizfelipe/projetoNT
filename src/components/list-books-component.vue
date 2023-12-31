<template>
  <div class="list">
    <div class="list__title">
      <span class="list__title__box">Os livros estão fora da ordem!</span>
    </div>
    
    <v-list class="list__items">
      <v-row>
        <v-col
          class="list-item"
          v-for="book in database"
          :key="book.description"
          cols="4"
        >
          <v-list-item>
            <v-list-item-content>
              {{ book.description }}
            </v-list-item-content>
          </v-list-item>
        </v-col>
      </v-row>
    </v-list>

  </div>

</template>

<script lang="ts">
/* eslint-disable vue/no-unused-components */
import { defineComponent } from 'vue';
import {database} from '../database/database'

export default defineComponent({
name: 'ListBooksComponent',
setup() {
    return { database };
  },
});

// function getBook() {}
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
      border: 1px solid black
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

</style>