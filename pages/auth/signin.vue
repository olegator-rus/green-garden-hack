<template>
    <v-app>
        <v-main>
            <v-container style="height: 100%;">
                <v-row justify="center" align="center" style="height: 100%;">
                    <v-col cols="12" md="4">
                        <v-card>
                            <v-toolbar flat>
                                <v-toolbar-title>
                                    Авторизация
                                </v-toolbar-title>
                            </v-toolbar>
                            <v-divider></v-divider>
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
