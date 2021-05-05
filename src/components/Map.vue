
<template>
<div>
    <l-map
        :center="center"
        :zoom="zoom"
        class="map"
        ref="map"
        @update:zoom="zoomUpdated"
        @update:center="centerUpdated"
    >
        <l-tile-layer :url="url"> </l-tile-layer>
        <template v-for="marker of mrksr">
            <l-marker :key="marker.id" :lat-lng="marker.coordinates" @click="clicked(marker.id)">
                <l-icon ref="icon">
                    <img height="30px" :src="selected === marker.id ? 'https://euregio-senzaconfini.eu/static/home/img/marker-red.png' : 'https://www.pinclipart.com/picdir/big/172-1720176_location-blue-pin-google-maps-clipart.png'" />
                </l-icon>
            </l-marker>
        </template>
    </l-map>
</div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import { LMap, LTileLayer, LMarker, LIcon } from 'vue2-leaflet'
import 'leaflet/dist/leaflet.css'

@Component({
  components: {
    LMap,
    LTileLayer,
    LMarker,
    LIcon
  }
})
export default class App extends Vue {
    @Prop() markers: any

    url = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';

    center = [48.853, 2.35];

    zoom = 12

    selected = null

    get mrksr () {
      return this.markers.map((x: any) => ({ ...x, imageUrl: 'https://img.icons8.com/office/40/000000/marker.png' }))
    }

    zoomUpdated (zoom: any) {
      this.zoom = zoom
      console.log(this.markers)
    }

    centerUpdated (center: any) {
      this.center = center
    }

    clicked (id: any) {
      this.selected = id
      this.$emit('click:marker', id)
    }
}
</script>

<style >
.map {
    position: absolute;
    width: 50% !important;
    height: 100%;
    overflow: hidden;
    z-index: 1;
}
</style>
