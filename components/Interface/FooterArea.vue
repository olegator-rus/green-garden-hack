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


    methods: {
        openEditor(path) {
            this.$router.push({ path: path });
        },
    }
}
</script>
