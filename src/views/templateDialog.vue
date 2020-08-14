<template>
    <div>
        <el-dialog
            width="60%"
            title="模板名称"
            :visible.sync="dialogVisible"
            :before-close="handleClose"
        >
            <div>{{data}}</div>
            <span slot="footer" class="dialog-footer">
                <el-button size="mini" @click="handleCancel">取 消</el-button>
                <el-button type="primary" size="mini" @click="handleConfirm">确 定</el-button>
            </span>
        </el-dialog>
    </div>
</template>

<script>
export default {
    name: 'templateDialog',
    props: {
        dialogVisible: {
            type: Boolean,
            default: false,
        },
        data: {
            type: String,
            default: '',
        },
    },
    data() {
        return {}
    },
    created() {
        console.log('asaskj')
    },
    methods: {
        handleClose() {
            this.$emit('close-dialog')
        },
        handleCancel() {
            this.$emit('handle-cancel')
        },
        handleConfirm() {
            let val = '我是子组件'
            this.$emit('handle-confirm', val)
        },
    },
}
</script>

<style scoped>
</style>
