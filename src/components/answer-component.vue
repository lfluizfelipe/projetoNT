<template>
  <div class="answer">
    <div class="answer__title">
      <span class="answer__title__box">Coloque os livros na ordem correta:</span>
    </div>

    <div class="answer__form">
    <v-list class="answer__form__items">
      <v-row>
        <v-col
          class="form-item"
          v-for="index in 27"
          :key="index"
          cols="3"
        >
          <v-text-field
            clearable
            v-model="formFields[index]"
            :label="`Livro ${index}`"
            variant="outlined"
          ></v-text-field>
        </v-col>
      </v-row>
    </v-list>
  </div>

  </div>
</template>

<script lang="ts">
/* eslint-disable vue/no-unused-components */
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'AnswerComponent',
  setup() {
    const formFields = ref(Array(27).fill(''));

    return { formFields };
  },
});

// function getBook() {}
</script>

<style lang="sass" scoped>
.answer
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
      border: 2px solid #40e4c0
      width: 320px
      border-radius: 5px
  &__form
    flex-direction: column
    &__items
      overflow-y: hidden
      overflow: hidden
      background-color: transparent !important
.form-item
  margin: -5px -15px -20px 5px
  width: 20px !important
  height: 95px !important
  display: flex
  justify-content: center
</style>