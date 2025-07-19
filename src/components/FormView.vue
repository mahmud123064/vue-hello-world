<template>
  <div class="p-5">
    <b-form @submit="onSubmit" v-if="show" class="mx-auto">

      <b-form-group id="input-group-1" label="Email address:" label-for="input-1" class="w-50 text-left"
        label-class="text-start ">

        <b-form-input id="input-group-1" v-model="form.email" type="email" name="email" placeholder="Enter email"
          class="text-start " :class="{ 'is-invalid': errors.has('email') }" v-validate="'required|email'">
        </b-form-input>
        <span v-if="errors.has('email')" class="invalid-feedback" style="display: block;">
          {{ errors.first('email') }}
        </span>
      </b-form-group>

      <!-- name  -->
      <b-form-group id="input-group-2" label="Your Name:" label-for="input-2" class="text-left">
        <b-form-input id="input-2" v-model="form.name" name="name" type="text" placeholder="Enter name" class="w-50"
          v-validate="'required|min:3|max:30'"></b-form-input>
        <span v-if="errors.has('name')" class="invalid-feedback" style="display: block;">{{ errors.first('name')
        }}</span>
      </b-form-group>

      <!-- phone number  -->
      <b-form-group id="input-group-2" label="Your phone Number:" label-for="input-5" class="text-left">
        <b-form-input id="input-5" v-model="form.number" name="phone" type="number"
          v-validate="'required|min:11|max:15'" placeholder="Enter phone Number" class="w-50"></b-form-input>
        <span v-if="errors.has('phone')" class="invalid-feedback" style="display: block">{{ errors.first('phone') }}
        </span>
      </b-form-group>

      <!-- Date  -->
      <b-form-group label="Date:" label-for="date" class="text-left">
        <b-form-datepicker id="date" v-model="form.date" v-validate="'required'" data-vv-name="date" name="date"
          :state="errors.has('date') ? false : form.date ? true : null" class="w-50"></b-form-datepicker>
        <b-form-invalid-feedback>
          {{ errors.first('date') }}
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- Gender -->
      <!-- <b-form-group id="gender" name="gender" label="Select Gender:" label-for="gender" class="text-left">
        <b-form-select id="gender" v-model="form.gender" :options="gender" v-validate="'required'" class="w-50"
         :state="errors.has('gender') ? false : form.gender ? true : null"
        >
        </b-form-select>
        <span v-if="errors.has('gender')" class="invalid-feedback" style="display: block;">{{ errors.first('gender')
          }}</span>
      </b-form-group> -->

      <b-form-group id="gender-group" label="Select Gender:" label-for="gender-select" class="text-left">
        <b-form-select id="gender-select" v-model="form.gender" :options="gender" v-validate="'required'" name="gender"
          :state="errors.has('gender') ? false : null" class="w-50"></b-form-select>
        <b-form-invalid-feedback style="display: block;">
          {{ errors.first('gender') }}
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- // -->
      <!-- <b-form-group id="input-group-3" label="Food:" label-for="input-3" class="text-left">
        <b-form-select id="input-3" v-model="form.food" :options="foods" v-validate="'required'"
        name="food" 
          class="w-50"></b-form-select>
      </b-form-group> -->

      <b-form-group id="input-group-3" label="Food:" label-for="input-3" class="text-left">
        <b-form-select id="input-3" v-model="form.food" :options="foods" v-validate="'required'" name="food"
          :state="errors.has('food') ? false : null" class="w-50"></b-form-select>
        <b-form-invalid-feedback style="display: block;">
          {{ errors.first('food') }}
        </b-form-invalid-feedback>
      </b-form-group>

      <!-- check  -->

      <!-- <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }" class="text-start d-flex">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4" :aria-describedby="ariaDescribedby">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
      </b-form-group> -->

      <b-form-group id="input-group-4" label="Select Options:" v-slot="{ ariaDescribedby }" class="text-left">
        <b-form-checkbox-group v-model="form.checked" id="checkboxes-4" :aria-describedby="ariaDescribedby"
          v-validate="'required'" name="options" :state="errors.has('options') ? false : null">
          <b-form-checkbox value="me">Check me out</b-form-checkbox>
          <b-form-checkbox value="that">Check that out</b-form-checkbox>
        </b-form-checkbox-group>
        <b-form-invalid-feedback style="display: block;">
          {{ errors.first('options') }}
        </b-form-invalid-feedback>
      </b-form-group>
      <div class="text-left">
        <b-button type="submit" variant="primary">Submit</b-button>
        <!-- <b-button type="reset" variant="danger">Reset</b-button> -->
      </div>
    </b-form>
    <!-- <b-card class="mt-3" header="Form Data Result">
      <pre class="m-0">{{ form }}</pre>
    </b-card> -->
  </div>
</template>

<script>

// import { ValidationProvider, extend } from 'vee-validate';
// import { extend } from 'vee-validate';
// import { required, email } from 'vee-validate/dist/rules.umd';

// // Add the required rules
// extend('required', required);
// extend('email', email);


export default {
  data() {
    return {
      form: {
        email: '',
        name: '',
        number: '',
        date: null,
        food: null,
        gender: null,
        checked: []
      },
      foods: [{ text: 'Select One', value: null }, 'Carrots', 'Beans', 'Tomatoes', 'Corn'],
      show: true,
      gender: [{ text: 'Select One', value: null }, 'Male', 'Female', 'Other']
    }
  },
  methods: {
    async onSubmit(event) {
      event.preventDefault()
      const isValid = await this.$validator.validateAll();
      if (isValid) {
        console.log('Form submitted:', JSON.stringify(this.form));
        // console.log('Form submitted successfully!');

      } else {
        // alert(JSON.stringify(this.form))
        console.log('Validation errors:', this.errors.items);

      }
    },

    // methods: {
    // async onSubmit(event) {
    //   event.preventDefault(); // Should be at the start

    //   const isValid = await this.$validator.validateAll();

    //   if (isValid) {
    //     console.log('Form submitted:', JSON.stringify(this.form));
    //     // Proceed with form submission (API call, etc.)
    //   } else {
    //     console.log('Validation errors:', this.errors.items);
    //     // Optional: Scroll to first error
    //     this.$nextTick(() => {
    //       const firstError = document.querySelector('.is-invalid');
    //       if (firstError) {
    //         firstError.scrollIntoView({ behavior: 'smooth' });
    //       }
    //     });
    //   }
    // },

    onReset(event) {
      event.preventDefault()
      // Reset our form values
      this.form.email = ''
      this.form.name = ''
      this.form.food = null
      this.form.number = ''
      this.form.date = null
      this.form.gender = null
      this.form.checked = []
      // Trick to reset/clear native browser form validation state
      this.show = false
      this.$nextTick(() => {
        this.show = false
      })
    }
  }
}
</script>
