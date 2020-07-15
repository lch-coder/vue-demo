<template>
    <div class="container">
        <h3>checkbox文字超长显示省略号，鼠标移上去显示文字</h3>
        <el-checkbox
            v-for="item in list"
            :label="item.id"
            :title="item.id + ' ' + item.name"
            :key="item.name"
            border
        >{{item.id + ' ' + item.name}}</el-checkbox>
    </div>
</template>

<script>
export default {
    data() {
        return {
            list: [
                { id: 1, name: '张三1111111111111111111111111' },
                { id: 2, name: '李四' },
            ],
        }
    },
}
</script>

<style scoped>
.container >>> .el-checkbox__label {
    width: 60px;
    overflow: hidden;
    white-space: nowrap;
    text-overflow: ellipsis;
}
</style>
