<script>
export default {
    props: {
        options: {
            type: Object,
            required: true,
        }
    }
}
</script>
<template>
    <div class="datatable-batch-dropdown input-group input-group-sm">
        <select name="batch" class="form-control">
            <option value="">عملیات جمعی</option>
            <option :value="item.value" :data-method="item.method" :data-url="item.url" v-for="(item) in options">{{ item.title }}</option>
        </select>
        <button type="button" class="btn btn-secondary batch-btn">اجرا</button>
    </div>
</template>
