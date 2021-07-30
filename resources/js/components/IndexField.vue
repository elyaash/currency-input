<template>
    <span>{{ currencyFormat(field.value) }} </span>
</template>

<script>
    import { Util } from '../mixins/util.js'
    export default {
        mixins: [Util],
        props: ['resourceName', 'field'],
    }
</script>
