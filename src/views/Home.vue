<template>
  <v-container fluid>
    <cards :items="items">
      <template #card="props">
        <v-card>
          <v-card-title> {{ props.title }} - {{ props.index }} </v-card-title>
          <v-card-text>
            {{ props.text }}
          </v-card-text>
        </v-card>
      </template>
      <template #activator>
        <v-btn @click="count++"> Activation </v-btn>
      </template>
    </cards>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Cards from "./Cards.vue";

@Component({
  components: {
    Cards,
  },
})
export default class Home extends Vue {
  items = [
    {
      title: "Titre 1",
      text: "Lorem ipsum blablabla",
    },
    {
      title: "Titre 2",
      text: "Lorem ipsum blablabla",
    },
    {
      title: "Titre 3",
      text: "Lorem ipsum blablabla",
    },
  ];

  count = 0;
}
</script>
