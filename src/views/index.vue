<template>
    <div>
        <templateDialog
            :dialog-visible="dialogVisible"
            :data="data"
            @close-dialog="closeDialog"
            @handle-cancel="handleCancel"
            @handle-confirm="handleConfirm"
        ></templateDialog>
        <div>{{childData}}</div>
        <el-button type="primary" @click="dialogVisible = true">
            <i class="el-icon-plus el-icon--left" />
            打开弹窗
        </el-button>
    </div>
</template>

<script>
import templateDialog from './templateDialog.vue'
export default {
    components: {
        templateDialog,
    },
    data() {
        return {
            dialogVisible: false,
            data: '父组件过来的值',
            childData: '',
        }
    },
    methods: {
        closeDialog() {
            this.dialogVisible = false
        },
        handleCancel() {
            this.dialogVisible = false
        },
        handleConfirm(val) {
            console.log('子组件传过来的值：', val)
            this.childData = val
            this.dialogVisible = false
        },
    },
}
</script>