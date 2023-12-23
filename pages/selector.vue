<template>
    <v-container>
        <v-row justify="center" align="center">
            <v-col cols="12" sm="6" md="6">
                <div>
                    <StationSelector />
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {

    layout ({ $auth }) {
        return $auth.loggedIn ? 'user' : 'guest';
    },

    computed: mapGetters({
        PRELOADER_STATUS: "station/PRELOADER_STATUS",
    }),

    methods: {
        ...mapActions({
            wagonTypeList: "wagon/typeList",
            operationTypesNorms: "operation/typesNorms",
            operationTypes: "operation/types",
            operationList: "operation/list",
            operationReasonsList: "operation/reasonsList",
            ownerList: "owner/list",
            ownerLegend: "owner/legend",
            stationList: "station/list",
            stationData: "station/data",
        }),
        ...mapMutations({
            activatePreloader: 'station/activatePreloader',
            deactivatePreloader: 'station/deactivatePreloader'
        }),
    },

    async fetch() {
        await this.activatePreloader();
        await this.ownerLegend();
        await this.wagonTypeList();
        await this.operationTypesNorms();
        await this.operationTypes();
        await this.operationList();
        await this.operationReasonsList();
        await this.ownerList();
        await this.stationList();
        await this.stationData();
        await this.deactivatePreloader();
    }
};
</script>
