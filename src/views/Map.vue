<template>
    <v-row no-gutters class="fill-height primary">
        <v-dialog
            v-model="formDialog"
            elevation="0"
            persistent
            @keydown.esc="formDialog = false"
            v-if="formDialog"
        >
            <v-row no-gutters>
                <v-col cols="3"> </v-col>
                <v-col cols="6" class="px-2 py-6">
                    <v-card class="mx-auto">
                        <v-card-text>
                            <v-row no-gutters>
                                <v-col cols="12" class="display-1 pa-4 secondary--text">
                                    <b>Contacter {{ lawyer.name }}</b>
                                </v-col>
                                <v-col cols="12">
                                    <contactForm>
                                    </contactForm>
                                </v-col>
                            </v-row>
                        </v-card-text>
                    </v-card>
                </v-col>
                <v-col cols="3" class="px-2">
                    <v-btn
                        elevation="2"
                        fab
                        class="headline"
                        @click="formDialog = false"
                    >
                        <i class="bx bx-x"></i>
                    </v-btn>
                </v-col>
            </v-row>
        </v-dialog>
        <v-col cols="6">
            <Map :markers="markers" @click:marker="clickMarker"> </Map>
        </v-col>
        <v-col cols="6" class="white--text d-flex align-center">
            <v-row no-gutters class="px-8" v-if="lawyer">
                <v-col cols="12" class="display-3 pb-6">
                    <b>{{ lawyer.name }}</b>
                </v-col>
                <v-col cols="12">
                    Adresse: {{ lawyer.address}}
                </v-col>
                <v-col cols="12">
                    Téléphone: {{ lawyer.phone}}
                </v-col>
                <v-col cols="12" class="d-flex justify-center py-5">
                    <v-btn
                        color="secondary"
                        elevation="0"
                        class="mx-4"
                        large
                        @click="formDialog = true"
                    >
                        Envoyer un message
                    </v-btn>
                </v-col>
            </v-row>
            <v-row no-gutters class="px-8" v-else>
                <v-col cols="12" class="display-1 pb-6">
                    Selectionnez un avocat
                </v-col>
            </v-row>
        </v-col>
  </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Map from '../components/Map.vue'
import ContactForm from './ContactForm.vue'

@Component({
  components: {
    Map,
    ContactForm
  }
})
export default class App extends Vue {
    markers = [
      { id: 1, coordinates: [48.8582602, 2.2944991] },
      { id: 2, coordinates: [48.8737791, 2.2950372] },
      { id: 3, coordinates: [48.8608923, 2.3144984] },
      { id: 4, coordinates: [48.8484174, 2.395877] },
      { id: 5, coordinates: [48.8823387, 2.3802859] },
      { id: 6, coordinates: [48.8309424, 2.3559375] }
    ]

    marker = 0

    lawyers = [
      {
        id: 1,
        name: 'Harvey Dent',
        address: '1er Etage de la Tour Eiffel',
        phone: '06 12 34 56 78'
      },
      {
        id: 2,
        name: 'Veronica Donovan',
        address: 'Arc de Triomphe',
        phone: '06 11 11 22 22'
      },
      {
        id: 3,
        name: 'Matthew Murdock',
        address: 'Les Invalides',
        phone: '06 78 90 12 34'
      },
      {
        id: 4,
        name: 'Lilah Morgan',
        address: 'Place de la Nation',
        phone: '06 33 44 55 66'
      },
      {
        id: 5,
        name: 'James Morgan McGill',
        address: 'Buttes de Chaumont',
        phone: '01 23 45 67 89'
      },
      {
        id: 6,
        name: 'Andrea Harrison',
        address: "Place d'Italie",
        phone: '06 77 77 77 77'
      }
    ]

    formDialog = false

    get lawyer () {
      return this.lawyers.find((x: any) => x.id === this.marker)
    }

    clickMarker (id: any) {
      this.marker = id
    }
}
</script>
