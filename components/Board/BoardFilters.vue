<template>
    <v-row>
        <v-col>
            <v-card>
                <v-toolbar>
                    АРМ дежурного по станции
                    <v-spacer></v-spacer>
                    <FiltersModal />
                    <BoardOperation />
                </v-toolbar>
                <v-divider></v-divider>
                <v-toolbar flat>
                    <BoardSearch />
                </v-toolbar>
                <v-card-text class="pa-1 v-scroll">
                    <BoardLegend />
                </v-card-text>
            </v-card>
        </v-col>
    </v-row>
</template>
