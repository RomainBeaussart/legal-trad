<template>
<v-container fluid>
    <v-row no-gutters>
        <v-col cols="3">
            <v-btn
                outlined
                large
                @click="add1()"
            >
                Add 1
            </v-btn>
        </v-col>
        <v-col cols="3">
            <v-text-field
                v-model="customText"
                label="Custom text"
            >
            </v-text-field>
        </v-col>
        <v-col cols="3" class="d-flex justify-center align-center">
            Count: {{ count }}
        </v-col>
    </v-row>
    <v-row no-gutters>
        <v-col cols="12" v-for="c in count" :key="c">
            {{ text }} {{ c }}
        </v-col>
    </v-row>
</v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class Home extends Vue {
    count = 0

    customText = ''

    get text () {
      if (this.customText) {
        return this.customText
      }
      return 'Line'
    }

    add1 () {
      this.count++
    }
}
</script>
