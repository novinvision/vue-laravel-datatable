// index.d.ts
import { DefineComponent } from 'vue';

export const DataTable: DefineComponent<{
    options: {
        type: Object,
        required: false,
        default: {},
    },
    batches: {
        type: Object,
        default: [],
    },
    tabs: {
        type: Array<any>,
        default: [],
    },
    columns: {
        type: Array<any>,
        default: [],
    },
}, {}, any>;

declare const Vue3LaravelDatatable: {
    DataTable: typeof DataTable;
};

export default Vue3LaravelDatatable;
