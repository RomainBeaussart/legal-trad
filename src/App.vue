<template>
    <v-app>
        <template v-if="$vuetify.breakpoint.xsOnly">
            <v-bottom-navigation
                app
                background-color="secondary"
                dark
            >
                <v-btn>
                    <span>Accueil</span>

                    <box-icon
                        name="home-alt"
                        animation="tada-hover"
                        color="#FFFFFFB3"
                    ></box-icon>
                </v-btn>

                <v-btn @click="route('home')">
                    <span>Trouver un Avocat</span>
                    <box-icon
                        name="map-alt"
                        animation="tada-hover"
                        color="#FFFFFFB3"
                    ></box-icon>
                </v-btn>
            </v-bottom-navigation>
            <v-main>
                <router-view />
            </v-main>
        </template>
        <template v-else>
            <v-app-bar app color="secondary" dark elevation="0">
                <v-row no-gutters>
                    <v-col
                        cols="3"
                        class="d-flex align-center title"
                        @click="route('home')"
                    >
                        <box-icon
                            name="book-alt"
                            animation="tada-hover"
                            color="#FFF"
                        ></box-icon>
                        Legal Trad
                    </v-col>
                    <v-col cols="6" class="d-flex justify-center">
                        <v-btn text @click="route('home')"> Accueil </v-btn>
                        <v-btn text @click="route('map')">
                            Trouver un avocat
                        </v-btn>
                    </v-col>
                    <v-col cols="3"> </v-col>
                </v-row>
            </v-app-bar>

            <v-main>
                <router-view />
            </v-main>
            <v-footer padless dark>
                <v-col class="text-center secondary" cols="12">
                    {{ new Date().getFullYear() }} — <strong>Legal Trad</strong>
                    <br />
                    <v-btn text @click="redirectSoftCode()">
                        Developed by SoftCode.fr
                    </v-btn>
                </v-col>
            </v-footer>
        </template>
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
