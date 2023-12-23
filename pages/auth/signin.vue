<template>
    <v-app>
        <v-main>
            <v-container style="height: 100%;">
                <v-row justify="center" align="center" style="height: 100%;">
                    <v-col cols="12" md="4">
                        <v-card>
                            <v-card-text class="mb-0 pb-0">
                                <img class="d-block mt-4" :src="require('../../assets/logo.png')" height="35" />
                                <span class="d-block white--text font-weight-bold mt-3">АРМ диспетчера ЖД-станции</span>
                            </v-card-text>
                            <SigninUser />
                        </v-card>
                    </v-col>
                </v-row>
            </v-container>
        </v-main>
    </v-app>
</template>

<script>
export default {
    middleware: ['guest'],
    layout: 'auth',
}
</script>
