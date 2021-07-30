<template>
    <panel-item :field="field" />
</template>

<script>

import { Util } from '../mixins/util.js'

export default {
    mixins: [Util],
    props: ['resource', 'resourceName', 'resourceId', 'field'],

    beforeMount() {
        this.field.value = this.currencyFormat(this.field.value);
    }
}
</script>
