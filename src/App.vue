<template>
    <v-app>
        <v-main>
            <router-view />
        </v-main>
    </v-app>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class App extends Vue {
  redirectSoftCode () {
    window.open('https://softcode.fr', '_blank')
  }

  route (page: any) {
    this.$router.push({ name: page })
  }
}
</script>

<style>
.v-dialog {
    box-shadow: none !important;
}
</style>
