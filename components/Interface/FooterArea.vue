<template>
    <v-footer absolute padless>
        <v-card flat tile width="100%">
            <v-divider></v-divider>
            <v-card-text class="d-flex justify-space-between flex-wrap-reverse text--white">
                <!-- Метка разработчика -->
                <div>
                    <small>
                        {{ new Date().getFullYear() }} © АО «ЕВРАЗ»
                    </small>
                </div>

                <!-- Селектор станции -->
                <div :key="CURRENT_STATION">
                    <small>
                    Текущая станция:
                        <span
                            class="text-underline"
                            @click="openSelector('/selector')"
                        >
                            {{ !CURRENT_STATION ? "Не выбрана" : CURRENT_STATION?.title }}
                        </span>
                    </small>
                </div>
            </v-card-text>
        </v-card>
    </v-footer>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    props: {
        type: {
            type: String,
            default: 'selector'
        },
    },

    fetch(){
        this.stationId = localStorage.getItem("station-id");
    },
    computed: {
        ...mapGetters({
            CURRENT_STATION: "station/CURRENT_STATION"
        })
    },
    methods: {
        openSelector(path) {
            this.$router.push({ path: path });
        },
    }
}
</script>
