<template>
    <div>
        <p>This is About page</p>

        <div v-if="loading">User data is Loading...</div>
        <div v-else class="row row-cols-1 row-cols-md-3 g-1 p-4">
            <ul v-for="user in users" v-bind:key="user.id">
                <div>
                    <b-card>
                        <h5>Name: {{ user.name }}</h5>
                        <b-card-text>
                            username: {{ user.username }}
                        </b-card-text>
                        <p>Zip code: {{ user.address.zipcode }}</p>
                        <b-card-text>Email: {{ user.email }}</b-card-text>
                        <h3 text-center>Company information</h3>
                        <p> company name: {{ user.company.name }}</p>
                        <p>info: {{ user.company.catchPhrase }}</p>
                        <a href="#" class="card-link"><span class="text-info">Website:</span> {{ user.website }}</a>
                        <b-link href="#" class="card-link"><span class="text-info">Phone:</span> {{ user.phone
                        }}</b-link>
                    </b-card>
                </div>
            </ul>
        </div>
    </div>

</template>


<script>
import axios from 'axios';

export default {
    name: 'AboutView',
    data() {
        return {
            users: [],
            loading: true,
            error: null
        }
    },
    mounted() {
        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                this.users = response.data
                // console.log(response.data)
            })

            .catch((error) => {
                this.error = error.message
            })


            .finally(() => {
                this.loading = false
            })
    }
}

</script>