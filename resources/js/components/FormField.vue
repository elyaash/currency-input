<template>
    <default-field :field="field" :errors="errors">
        <template slot="field">
            <input
                v-show="active"
                :id="field.name"
                type="text"
                class="w-full form-control form-input form-input-bordered"
                :class="errorClasses"
                :placeholder="field.name"
                v-model="value"
                @blur="handleBlur"
                ref="inputCurrencyField"

            />
            <input v-show="!active"
                   :id="currencyDisplay"
                   type="text"
                   class="w-full form-control form-input form-input-bordered"
                   :class="errorClasses"
                   :placeholder="field.name"
                   :value="currency"
                   @focus="handleFocus"
            />
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
         active: false, formatter: null,
        }
    },

    updated() {
        if (this.active) this.$refs.inputCurrencyField.focus();
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
        },

        /**
         * On Focus
         */
        handleFocus() {
            this.active = true;
        },

        /**
         * On Blur
         */
        handleBlur() {
            this.active = false;
        }
    },
}
</script>
