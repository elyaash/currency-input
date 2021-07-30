export const Util = {
    data() {
        return {
            formatter:null
        }
    },
    computed: {
        currency() {
            if (!this.formatter) this.initFormatter();

            return this.formatter.format(this.value);
        }
    },
    methods: {
        /**
         * Initialize formatter
         * @returns {*|Intl.NumberFormat}
         */
        initFormatter() {
            if (!this.formatter) {
                this.formatter = new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: this.field.currency || 'USD',
                });
            }
            return this.formatter;
        },
        /*
         * Set the initial, internal value for the field.
         */
        setInitialValue() {
            this.field.value = this.currencyFormat(this.field.value);
        },

        /**
         *
         * @param value
         * @returns {string|*}
         */
        currencyFormat(value) {
            if (!this.field.formatOnDisplay) return $value;

            if (!this.formatter) this.initFormatter();

            return this.formatter.format(value);

        }
    }
};
