<template>
    <v-form v-model="validForm">
        <v-container>
            <v-row no-gutters>
                <v-col cols="6" class="px-3">
                    <v-text-field
                        v-model="lastName"
                        label="Nom"
                        :rules="lastNameRules"
                        outlined
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="6" class="px-3">
                    <v-text-field
                        v-model="firstName"
                        label="Prénom"
                        :rules="firstNameRules"
                        outlined
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="6" class="px-3">
                    <v-text-field
                        v-model="email"
                        label="Email"
                        :rules="emailRules"
                        outlined
                        required
                    ></v-text-field>
                </v-col>
                <v-col cols="6" class="px-3">
                    <v-text-field
                        v-model="phoneNumber"
                        label="Numero de téléphone"
                        outlined
                    ></v-text-field>
                </v-col>
                <v-col cols="12" class="px-3">
                    <v-textarea
                        v-model="message"
                        :rules="messageRules"
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
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class ContactForm extends Vue {
    validForm = false

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
