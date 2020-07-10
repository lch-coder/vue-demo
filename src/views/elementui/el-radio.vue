<template>
    <div>
        <el-form>
            <h4>单选框</h4>
            <h3>整数类型</h3>
            <p>如果单选框的值是number,单选框的lable需要设置成:lable="1"</p>
            <el-form-item label="状态" prop="status">
                <el-radio-group v-model="form.status1" @change="getRadioData">
                    <el-radio :label="1">禁用</el-radio>
                    <el-radio :label="2">正常</el-radio>
                </el-radio-group>
            </el-form-item>
            <h3>字符串类型</h3>
            <el-form-item label="状态" prop="status">
                <el-radio-group v-model="form.status2" @change="getRadioData">
                    <el-radio label="1">禁用</el-radio>
                    <el-radio label="2">正常</el-radio>
                </el-radio-group>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
export default {
    data() {
        return {
            form: {
                status1: 2,
                status2: '1',
            },
        }
    },
    methods: {
        getRadioData(val) {
            console.log('获得的单选框值是：', val, typeof val)
        },
    },
}
</script>

<style scoped></style>
