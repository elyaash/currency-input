<template>
    <default-field :field="field" :errors="errors">
        <template slot="field">
            <div class="w-full">
            <input
                :id="field.name"
                type="text"
                class="form-control form-input form-input-bordered"
                :class="errorClasses"
                :placeholder="field.name"
                v-model="value"
                ref="inputCurrencyField"
            />
            <span class="px-2">
                {{ currency }}
            </span>
            </div>
        </template>
    </default-field>
</template>

<script>

import { FormField, HandlesValidationErrors } from 'laravel-nova'
import { Util } from '../mixins/util.js'

export default {
    mixins: [FormField, HandlesValidationErrors, Util],

    props: ['resourceName', 'resourceId', 'field'],

    data () {
        return {
         formatter: null,
        }
    },


    methods: {
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {

            this.value = this.field.value || '0';
        },

        /**
         * Fill the given FormData object with the field's internal value.
         */
        fill(formData) {
            formData.append(this.field.attribute, this.value || '')
        },

        /**
         * Update the field's internal value.
         */
        handleChange(value) {
            this.value = value
        }
    },
}
</script>
