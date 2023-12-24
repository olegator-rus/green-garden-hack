<template>
    <v-row justify="center" align="center">
        <v-col cols="12" sm="12" md="12">
            <div v-if="!PRELOADER_STATUS">
                <CompanyTable />
            </div>
            <v-skeleton-loader v-else type="table"></v-skeleton-loader>
        </v-col>
    </v-row>
</template>

<script>
import { mapGetters, mapActions, mapMutations } from "vuex";

export default {
    middleware: ['auth', 'station'],
    layout: 'user',

    computed: mapGetters({
        PRELOADER_STATUS: "board/PRELOADER_STATUS",
    }),

    methods: {
        ...mapActions({
            routeData: "operation/routeData",
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
            setShowMode: "station/setShowMode",
            setCurrentStation: "station/setCurrentStation",
            activatePreloader: 'board/activatePreloader',
            deactivatePreloader: 'board/deactivatePreloader'
        }),
    },

    async fetch() {
        await this.activatePreloader();
        this.stationId = localStorage.getItem("station-id");
        this.setCurrentStation(this.stationId);
        this.setShowMode(true);
        await this.routeData();
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
