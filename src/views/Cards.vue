<template>
  <v-container fluid>
    <v-row fluid style="background: #eaea">
      <v-col cols="6" v-for="(it, index) of items" :key="index">
        <slot
          name="card"
          :title="it.title"
          :text="it.text"
          :index="index"
        ></slot>
      </v-col>
      <v-col cols="12">
        <v-slot name="activator"></v-slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue, Prop } from "vue-property-decorator";

import Cards from "./Cards.vue";

@Component({
  components: {
    Cards,
  },
})
export default class Home extends Vue {
  @Prop() items;
}
</script>
