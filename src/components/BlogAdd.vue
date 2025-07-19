<template>
    <div class="container">
        <h3>Welcome to blog add page</h3>
        <b-form @submit="onSubmit" class="row row-cols-1 row-cols-md-2 g-3">
            <!-- name  -->
            <div class="text-left">
                <label>Name: </label>
                <b-form-input v-model="name" name="name" placeholder="Enter your name"
                    class=" mb-2 w-75"></b-form-input>

            </div>
            <!-- UserName  -->
            <div class="text-left">
                <label>User Name: </label>
                <b-form-input v-model="username" name="username" placeholder="Enter your username"
                    class=" mb-2 w-75"></b-form-input>

            </div>
            <!-- Email  -->
            <div class="text-left">
                <label>Email: </label>
                <b-form-input v-model="email" name="email" placeholder="Enter your email"
                    class="w-75 mb-2"></b-form-input>

            </div>
            <!-- Street  -->
            <div class="text-left">
                <label>Street: </label>
                <b-form-input v-model="street" name="street" placeholder="Enter your street name"
                    class="w-75 mb-2"></b-form-input>

            </div>
            <!-- Suite  -->
            <div class="text-left">
                <label>Suite: </label>
                <b-form-input v-model="suite" name="suite" placeholder="Enter your suite "
                    class="w-75 mb-2"></b-form-input>

            </div>
            <!-- city  -->
            <div class="text-left">
                <label>City: </label>
                <b-form-input v-model="city" name="city" placeholder="Enter your city name "
                    class="w-75 mb-2"></b-form-input>

            </div>
            <!-- Zipcode  -->
            <div class="text-left">
                <label>Zip Code: </label>
                <b-form-input v-model="zipcode" name="zipcode" placeholder="Enter your Zipcode "
                    class="w-75 mb-2"></b-form-input>

            </div>
            <!-- Lat  -->
            <div class="text-left">
                <label>Lat: </label>
                <b-form-input v-model="lat" name="lat" placeholder="Enter your lat " class="w-75 mb-2"></b-form-input>

            </div>
            <!-- Lng  -->
            <div class="text-left">
                <label>Lng: </label>
                <b-form-input v-model="lng" name="lng" placeholder="Enter your lng " class="w-75 mb-2"></b-form-input>

            </div>
            <!-- Phone  -->
            <div class="text-left">
                <label>Phone: </label>
                <b-form-input v-model="phone" name="phone" placeholder="Enter your phone "
                    class="w-75 mb-2"></b-form-input>

            </div>
            <!-- Website  -->
            <div class="text-left">
                <label>Website: </label>
                <b-form-input v-model="website" name="website" placeholder="Enter your Website "
                    class="w-75 mb-2"></b-form-input>

            </div>
            <!-- name  -->
            <div class="text-left">
                <label>Company Name: </label>
                <b-form-input v-model="name" name="name" placeholder="Enter your Website name"
                    class="w-75 mb-2"></b-form-input>

            </div>
            <!-- catchPhrase  -->
            <div class="text-left">
                <label>catch Phrase: </label>
                <b-form-input v-model="catchPhrase" name="catchPhrase" placeholder="Enter your catchPhrase"
                    class="w-75 mb-2"></b-form-input>

            </div>
            <!-- Bs  -->
            <div class="text-left">
                <label>BS: </label>
                <b-form-input v-model="bs" name="bs" placeholder="Enter your bs" class="w-75 mb-2"></b-form-input>

            </div>



            <div class="text-center d-flex justify-content-center mx-auto mt-5">
                <b-button type="submit">Submit</b-button>
            </div>
        </b-form>
    </div>


</template>

<script>
import axios from 'axios'

export default {
    name: 'BlogAdd',

    data() {
        return {
            name: "",
            username: '',
            email: '',
            address: {
                street: '',
                suite: '',
                city: '',
                zipcode: '',
                geo: {
                    lat: '',
                    lng: '',
                }
            },
            phone: '',
            website: '',
            company: {
                name: '',
                catchPhrase: '',
                bs: '',
            }

        }
    },
    methods: {
        async onSubmit(event) {
            event.preventDefault()
            const userData =
            {
                name: this.name,
                username: this.username,
                email: this.email,
                address: {
                    suite: this.suite,
                    street: this.street,
                    city: this.city,
                    zipcode: this.zipcode,
                    geo: {
                        lat: this.lat,
                        lng: this.lng,
                    }
                },

                phone: this.phone,
                website: this.website,
                company: {
                    name: this.name,
                    catchPhrase: this.catchPhrase,
                    bs: this.bs
                }
            }

            // try {
            //     const response = await axios('https://jsonplaceholder.typicode.com/users', {
            //         method: 'POST',
            //         headers: {
            //             'Content-type': 'application/json'
            //         },
            //         body: JSON.stringify(userData)
            //     })


            //     if (!response.ok) {
            //         throw new Error('Network response was not ok');
            //     }

            //     const result = await response.json()
            //     console.log(result);
            //     alert("User added successfully!!")

            // } catch (error) {
            //     console.error("Error: ", error);

            // }

            try {
                const response = await axios.post('https://jsonplaceholder.typicode.com/users', userData)
                console.log("Success: ", response);

            } catch (error) {
                console.error("Error :", error)
                alert("Filed to upload user data")
            }


        }

    }


}
</script>