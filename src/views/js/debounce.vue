<template>
    <div>
        <h3>防抖函数</h3>
        <input type="text" v-model="tempInput" />
    </div>
</template>

// 防抖
<script>
import utils from '../../utils/debounce'
let _this
export default {
    data() {
        return {
            tempInput: '',
        }
    },
    beforeCreate() {
        _this = this
    },
    watch: {
        tempInput() {
            this.alertFunc()
        },
    },
    methods: {
        alertFunc: utils.debounce(() => {
            console.log(_this.tempInput, new Date())
        }, 500),
    },
}
</script>
