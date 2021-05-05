<template>
    <v-row no-gutters>
        <v-col cols="6">
            <v-img src="~/../assets/lawyer-homepage.jpg"></v-img>
        </v-col>
        <v-col cols="6" class="d-flex align-center primary">
            <v-row no-gutters class="d-flex justify-center">
                <v-col
                    cols="12"
                    class="d-flex justify-center display-4 white--text py-2"
                >
                    <i class="bx bx-book-alt bx-lg"></i>
                    <b>Legal Trad</b>
                </v-col>
                <v-col cols="7" class="headline white--text py-2">
                    Le site de traduction juridique pour vos besoins du
                    quotidien
                </v-col>
                <v-col cols="12" class="d-flex justify-center py-2">
                    <v-btn
                        color="secondary"
                        elevation="0"
                        large
                        @click="searchDialog = true"
                    >
                        Rechercher
                    </v-btn>
                </v-col>
            </v-row>
            <v-dialog
                v-model="searchDialog"
                elevation="0"
                persistent
                @keydown.esc="searchDialog = false"
            >
                <v-row no-gutters>
                    <v-col cols="3"> </v-col>
                    <v-col cols="6" class="px-2 py-6">
                        <v-row>
                            <v-col cols="12">
                                <v-card class="mx-auto">
                                    <v-card-text>
                                        <p class="display-1 text--primary">
                                            Recherchez un terme juridique
                                        </p>
                                        <legal-trad-engine> </legal-trad-engine>
                                    </v-card-text>
                                </v-card>
                            </v-col>
                            <v-col cols="12">
                                <v-btn
                                    elevation="0"
                                    block
                                    x-large
                                    color="secondary"
                                    class="headline white--text"
                                >
                                    Lancer la recherche
                                </v-btn>
                            </v-col>
                        </v-row>
                    </v-col>
                    <v-col cols="3" class="px-2">
                        <v-btn
                            elevation="2"
                            fab
                            class="headline"
                            @click="searchDialog = false"
                        >
                            <i class="bx bx-x"></i>
                        </v-btn>
                    </v-col>
                </v-row>
            </v-dialog>
        </v-col>
        <v-col cols="12" class="py-12">
            <v-row no-gutters class="d-flex justify-center">
                <v-col cols="8">
                    <v-row no-gutters class="primary--text">
                        <v-col cols="12" class="display-1 pa-4">
                            <b>Nos services</b>
                        </v-col>
                        <v-col cols="4" class="px-4">
                            <v-row no-gutters>
                                <v-col
                                    cols="12"
                                    class="d-flex justify-center py-2 secondary--text"
                                >
                                    <i
                                        class="bx bx-file"
                                        style="font-size: 70px"
                                    ></i>
                                </v-col>
                                <v-col
                                    cols="12"
                                    class="d-flex justify-center py-2"
                                >
                                    <h2>Traductions juridiques</h2>
                                </v-col>
                                <v-col cols="12" class="py-2">
                                    L'objectif de LEGAL TRAD est de fournir des
                                    définitions simples et claires, permettant à
                                    tout citoyen de comprendre aisément certains
                                    termes juridiques.
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="4" class="px-4">
                            <v-row no-gutters>
                                <v-col
                                    cols="12"
                                    class="d-flex justify-center py-2 secondary--text"
                                >
                                    <i
                                        class="bx bx-folder-open"
                                        style="font-size: 70px"
                                    ></i>
                                </v-col>
                                <v-col
                                    cols="12"
                                    class="d-flex justify-center py-2"
                                >
                                    <h2>Traductions juridiques</h2>
                                </v-col>
                                <v-col cols="12" class="py-2">
                                    LEGAL TRAD vous propose une navigation
                                    intuitive et rapide, permettant d'accéder
                                    aux définitions en un clic.
                                </v-col>
                            </v-row>
                        </v-col>
                        <v-col cols="4" class="px-4">
                            <v-row no-gutters>
                                <v-col
                                    cols="12"
                                    class="d-flex justify-center py-2 secondary--text"
                                >
                                    <i
                                        class="bx bx-chalkboard"
                                        style="font-size: 70px"
                                    ></i>
                                </v-col>
                                <v-col
                                    cols="12"
                                    class="d-flex justify-center py-2"
                                >
                                    <h2>Besoins du quotidien</h2>
                                </v-col>
                                <v-col cols="12" class="py-2">
                                    Les termes répertoriés par LEGAL TRAD étant
                                    consacrés aux litiges du quotidien, les
                                    internautes n'auront accès qu'aux
                                    définitions utiles et pragmatiques.
                                </v-col>
                            </v-row>
                        </v-col>
                    </v-row>
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="5">
            <v-img src="~/../assets/about-us.jpg"></v-img>
        </v-col>
        <v-col cols="7" class="d-flex align-center primary">
            <v-row no-gutters class="d-flex justify-center">
                <v-col cols="7" class="d-flex display-1 secondary--text py-2">
                    <b>À Propos</b>
                </v-col>
                <v-col cols="7" class="headline white--text py-2">
                    Nous sommes de jeunes élèves-avocats ayant développé ce site
                    internet dans le seul objectif de rendre accessible le
                    droit. Cette initiative permettra, nous l'espérons, d'aider
                    un maximum de justiciables dans la compréhension des termes
                    juridiques.
                </v-col>
            </v-row>
        </v-col>
        <v-col cols="4" class="d-flex justify-center py-12" v-for="(comment, index) of comments" :key="index">
            <twitter-card
                :comment="comment.text"
                :avatar="comment.avatar"
                :name="comment.name"
            >
            </twitter-card>
        </v-col>
        <v-col cols="12" class="d-flex justify-center pt-12">
            <v-img height="700" src="~/../assets/computer.jpg"></v-img>
        </v-col>
        <v-col cols="12" class="primary py-12">
            <v-form v-model="validForm">
                <v-container>
                    <v-row no-gutters>
                        <v-col cols="12" class="display-1 pa-4 secondary--text">
                            <b>Nous contacter</b>
                        </v-col>
                        <v-col cols="6" class="px-3">
                            <v-text-field
                                v-model="lastName"
                                label="Nom"
                                :rules="lastNameRules"
                                outlined
                                dark
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6" class="px-3">
                            <v-text-field
                                v-model="firstName"
                                label="Prénom"
                                :rules="firstNameRules"
                                outlined
                                dark
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6" class="px-3">
                            <v-text-field
                                v-model="email"
                                label="Email"
                                :rules="emailRules"
                                outlined
                                dark
                                required
                            ></v-text-field>
                        </v-col>
                        <v-col cols="6" class="px-3">
                            <v-text-field
                                v-model="phoneNumber"
                                label="Numero de téléphone"
                                outlined
                                dark
                            ></v-text-field>
                        </v-col>
                        <v-col cols="12" class="px-3">
                            <v-textarea
                                v-model="message"
                                :rules="messageRules"
                                dark
                                outlined
                                label="Votre message"
                            ></v-textarea>
                        </v-col>
                        <v-col cols="12" class="px-3 d-flex justify-end">
                            <v-btn
                                color="secondary"
                                elevation="0"
                                large
                                :disabled="!validForm"
                            >Envoyer</v-btn>
                        </v-col>
                    </v-row>
                </v-container>
            </v-form>
        </v-col>
    </v-row>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import LegalTradEngine from './LegalTradEngine.vue'
import TwitterCard from './TwitterCard.vue'

@Component({
  components: {
    LegalTradEngine,
    TwitterCard
  }
})
export default class Home extends Vue {
    searchDialog = false;

    validForm = false

    comments = [
      {
        text: "Je pensais sincèrement qu'une mise en demeure était une mise sous tutelle @legaltrad",
        avatar: 'https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        name: 'Camille, 25 ans, Professeur des écoles '
      },
      {
        text: 'Grâce à @legaltrad, je suis capable de comprendre avec beaucoup plus de facilités les courriers juridiques que je reçois',
        avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=934&q=80',
        name: 'Éva, 24 ans, Étudiante en psychologie'
      },
      {
        text: "Je n'avais jamais vraiment réalisé que les définitions que je pouvais avoir de certains termes juridiques étaient totalement erronées comme la notion de créance par exemple @legaltrad",
        avatar: 'https://images.unsplash.com/photo-1602289313886-60b6cd71b3dd?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=934&q=80',
        name: 'Hervé, 50 ans, Artisan'
      }
    ]

    firstName = ''
    lastName = ''
    email = ''
    phoneNumber = ''
    message = ''

    firstNameRules= [
      (v: string) => !!v || 'Un prénom est requis'
    ]

    lastNameRules= [
      (v: string) => !!v || 'Un nom est requis'
    ]

    messageRules= [
      (v: string) => !!v || 'Une message est requis',
      (v: string) => v.length >= 10 || 'Le message ne peut pas faire moins de 10 caracteres'
    ]

    emailRules = [
      (v: string) => !!v || 'Une adresse email est requise',
      (v: string) => /.+@.+/.test(v) || "L'email n'est pas valide"
    ]
}
</script>
