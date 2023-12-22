<template>
    <v-card>
        <v-form v-model="valid" class="py-3">
            <v-card-text>
                <v-row>
                    <v-col>
                        <v-text-field
                            v-model="signin.email"
                            :rules="rules.email"
                            label="Электронная почта"
                            outlined
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-row>
                    <v-col>
                        <v-text-field
                            v-model="signin.password"
                            :rules="rules.password"
                            type="password"
                            label="Пароль"
                            outlined
                            required
                        ></v-text-field>
                    </v-col>
                </v-row>
                <v-btn
                    color="primary"
                    class="mb-2"
                    block
                    :disabled="!valid"
                    @click="userLogin()"
                >
                    Войти
                </v-btn>
            </v-card-text>
        </v-form>
    </v-card>
</template>

<script>
export default {
    data: () => ({
        valid: false,
        signin: {
            email: '',
            password: ''
        },
        rules: {
            email: [
                value => {
                    if (value) return true
                    return 'Обязательное поле.'
                },
            ],
            password: [
                value => {
                    if (value) return true
                    return 'Обязательное поле.'
                },
            ],
        }
    }),
    methods: {
        async userLogin() {
            try{
                await this.$auth.loginWith('local', {
                    errors: true,
                    data: this.signin
                });
            }catch(err){}
        }
    }
}
</script>

