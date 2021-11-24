<template>
    <v-card class="mx-auto" color="primary" dark max-width="400">
        <v-row no-gutters class="d-flex fill-height">
            <v-col cols="12">
                <v-card-title>
                    <v-icon large left> mdi-twitter </v-icon>
                    <span class="title font-weight-light">Twitter</span>
                </v-card-title>
            </v-col>
            <v-col cols="12">
                <v-card-text class="headline font-weight-bold">
                    "{{ comment }}"
                </v-card-text>
            </v-col>
            <v-col cols="12" class="align-self-end">
                <v-card-actions class="align-self-end">
                    <v-list-item>
                        <v-list-item-avatar color="grey darken-3">
                            <v-img
                                class="elevation-6"
                                :src="avatar"
                            ></v-img>
                        </v-list-item-avatar>

                        <v-list-item-content>
                            <v-list-item-title>{{ name }}</v-list-item-title>
                        </v-list-item-content>

                        <!-- <v-row align="center" justify="end">
                            <v-icon class="mr-1"> mdi-heart </v-icon>
                            <span class="subheading mr-2">256</span>
                        </v-row> -->
                    </v-list-item>
                </v-card-actions>
            </v-col>
        </v-row>
    </v-card>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

@Component
export default class TwitterCard extends Vue {
    @Prop() comment: any
    @Prop() avatar: any
    @Prop() name: any
}
</script>
