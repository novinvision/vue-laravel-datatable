<script setup>
import {ref, computed, getCurrentInstance, onBeforeMount, onMounted, onBeforeUnmount} from 'vue';
import {router} from '@inertiajs/vue3';
import DatatableBatchDropdown from './DatatableBatchDropdown.vue';

import DataTable from 'datatables.net-vue3';
import DataTableCore from 'datatables.net-bs5';

DataTable.use(DataTableCore);

import 'datatables.net-buttons';
import 'datatables.net-buttons-bs5';
import 'datatables.net-buttons/js/buttons.colVis.mjs';
import 'datatables.net-fixedheader-bs5';
import 'datatables.net-responsive-bs5';
import 'datatables.net-searchpanes-bs5/css/searchPanes.bootstrap5.min.css';
import 'datatables.net-searchpanes-bs5';
import 'datatables.net-select-bs5';

const props = defineProps({
  options: {type: Object, required: false, default: () => ({})},
  batches: {type: Array, default: () => ([])},
  tabs: {type: Array, default: () => ([])},
  columns: {type: Array, default: () => ([])},
});

const emit = defineEmits(['add', 'batch', 'delete', 'clickRow', 'ready']);

const {proxy} = getCurrentInstance();

const dropdown = ref(null);
const datatable = ref(null);

const currentTab = ref(null);
let selectAllCheckbox = null;

const datatableOptions = ref({
  language: {},
  rowGroup: false,
  responsive: true,
  ...props.options,
  buttons: [
    ...(props.options.buttons || []),
    {
      text: '<i class="fa-light fa-arrows-rotate lh-sm"></i>',
      className: 'rounded-5 ms-1 datatable-btn-reload',
      action: (e, dt) => dt.ajax.reload(),
    },
  ],
});

const table = computed(() => new DataTableCore(DataTableCore.tables()[0]));

function debounce(fn, delay = 400) {
  let timer;
  return function (...args) {
    clearTimeout(timer);
    timer = setTimeout(() => fn.apply(this, args), delay);
  };
}

function buildSearchRow() {
  const theadRow = document.querySelector('#datatable-table thead tr');
  if (!theadRow || theadRow.classList.contains('datatable-search-row-built')) {
    return;
  }

  const searchRow = document.createElement('tr');
  searchRow.classList.add('datatable-column-search-row');

  const ths = theadRow.querySelectorAll('th');

  ths.forEach((th, index) => {
    const cell = document.createElement('th');
    const column = table.value.column(index);

    const searchable = column.settings()[0].aoColumns[index].bSearchable;
    if (searchable) {
      const input = document.createElement('input');
      input.type = 'text';
      input.placeholder = column.header()?.textContent;
      input.className = 'form-control form-control-sm';
      input.value = column.search() || '';

      input.addEventListener('click', (e) => e.stopPropagation());

      input.addEventListener('keyup', debounce(function () {
        column.search(this.value).draw();
      }, 400));

      cell.appendChild(input);
    }

    searchRow.appendChild(cell);
  });

  theadRow.parentNode.insertBefore(searchRow, theadRow.nextSibling);
  theadRow.classList.add('datatable-search-row-built');
}

function removeSearchRow() {
  document.querySelector('.datatable-column-search-row')?.remove();
}

function resetTabFilter() {
  if (currentTab.value && currentTab.value.onDeselect) {
    currentTab.value.onDeselect(table.value);
  }

  currentTab.value = null;
  table.value.state.clear();
  table.value.columns().search('').draw();
}

function tabFilter(item = null) {
  if (currentTab.value && currentTab.value.onDeselect) {
    currentTab.value.onDeselect(table.value);
  }

  currentTab.value = item;

  if (item.onSelect) {
    item.onSelect(table.value);
  }

  if (item.query) {
    item.query.forEach((query) => {
      setColumnFilter(query.column, query.value);
    });
  }
}

function setColumnFilter(columnName, value = null) {
  if (!isNaN(columnName)) {
    table.value.column(columnName).search(value).draw();
  } else {
    datatableOptions.value.columns.forEach((column, index) => {
      if (column.name === columnName) {
        table.value.column(index + 1).search(value).draw();
      }
    });
  }
}

function doBatch(e) {
  e.preventDefault();
  const selectedRows = table.value.rows({selected: true})[0].map((item) => {
    const row = table.value.row(item);
    const rowData = row.data();
    return rowData.id || row.id();
  });
  if (!selectedRows) return false;

  const batchCol = document.querySelector('.datatable-wrapper .batch');
  const batchOption = batchCol.querySelector('select');
  if (!batchOption.selectedIndex) return false;

  const batchSelectedOption = props.batches[batchOption.selectedIndex - 1];
  if (!batchSelectedOption) return false;

  const confirmed = confirm('آیا از انجام عملیات دسته جمعی روی موارد انتخاب شده مطمئن هستید؟ پس از انجام امکان بازگردانی وجود نخواهد داشت.');
  if (confirmed && batchSelectedOption.url) {
    const url = new URL(batchSelectedOption.url);
    selectedRows.forEach((item) => {
      url.searchParams.append('id[]', item);
    });

    router.visit(url, {
      method: batchSelectedOption.method || 'GET',
      data: {
        id: selectedRows,
      },
    });
  }

  batchOption.value = '';
}
function reloadOnRouteChange() {
  table.value.ajax.reload();
}

function selectAllCheckboxesEvent(e) {
  e.stopPropagation();
  if (e.target.checked) {
    table.value.rows().select();
  } else {
    table.value.rows().deselect();
  }
}

function confirmAction(event) {
  event.preventDefault();
  const confirmed = confirm('این عملیات غیر قابل بازیابی خواهد بود. آیا از انجام این عملیات اطمینان دارید؟');
  if (confirmed) {
    router.get(event.target.getAttribute('href'));
  }
}

onBeforeMount(() => {
  if (
      datatableOptions.value.searchPanes &&
      datatableOptions.value.buttons &&
      !datatableOptions.value.buttons.filter((item) => item.extend === 'searchPanes').length
  ) {
    datatableOptions.value.buttons.push({
      text: 'فیلتر ها',
      className: 'rounded-4 ms-2',
      action: function () {
        document.querySelector('.datatable-search-panes-collapse').classList.toggle('show');
      },
    });
  }
});

onMounted(() => {
  if (dropdown.value) {
    const batchCol = document.querySelector('.batch');
    batchCol.innerHTML = dropdown.value.$el.outerHTML;
    dropdown.value.$el.remove();

    batchCol.querySelector('.batch-btn').addEventListener('click', doBatch);
  }

  table.value.on('draw', () => {
    document.querySelectorAll('.datatable a[data-click="confirm"]').forEach((item) => {
      item.addEventListener('click', confirmAction);
    });
  });

  table.value.on('destroy', () => {
    document.querySelectorAll('.datatable a[data-click="confirm"]').forEach((item) => {
      item.removeEventListener('click', confirmAction);
    });
  });

  table.value.on('draw', (e) => {
    if (selectAllCheckbox) {
      selectAllCheckbox.checked = false;
    }

    emit('ready', e);
  });

  const firstHeadColumn = document.querySelector(
      'table.dataTable.datatable-selectable.datatable-selectable-multi thead tr th:first-child'
  );
  if (firstHeadColumn) {
    selectAllCheckbox = document.createElement('input');
    selectAllCheckbox.name = 'selectAllCheckbox';
    selectAllCheckbox.type = 'checkbox';
    selectAllCheckbox.value = 'yes';
    firstHeadColumn.prepend(selectAllCheckbox);
    selectAllCheckbox.addEventListener('click', selectAllCheckboxesEvent);
  }

  document.addEventListener('inertia:finish', reloadOnRouteChange);
});

onBeforeUnmount(() => {
  document.removeEventListener('inertia:finish', reloadOnRouteChange);
  document.querySelector('.batch .batch-btn')?.removeEventListener('click', doBatch);
  selectAllCheckbox?.removeEventListener('click', selectAllCheckboxesEvent);
});

defineExpose({
  table,
  resetTabFilter,
  tabFilter,
  setColumnFilter,
});
</script>

<template>
  <div class="datatable-wrapper">
    <DatatableBatchDropdown :options="batches" v-if="batches && batches.length" ref="dropdown"/>
    <div class="card card-datatable shadow-sm">
      <div class="card-header shadow-sm bg-body" v-if="tabs && tabs.length">
        <ul class="nav nav-pills card-header-tabs">
          <li class="nav-item">
            <button type="button" @click="resetTabFilter" class="nav-link" :class="{active: !currentTab}"
                    :aria-current="!currentTab">همه موارد
            </button>
          </li>
          <li class="nav-item" v-for="item in tabs" :key="item.name">
            <button type="button" @click="tabFilter(item)" class="nav-link"
                    :class="{active: (currentTab && currentTab.name === item.name)}">{{ item.title }}
            </button>
          </li>
        </ul>
      </div>
      <div class="card-body fanum">
        <DataTable ref="datatable"
                   id="datatable-table"
                   :options="datatableOptions"
                   :extentions="['buttons']"
                   :class="[
                               {
                                   'datatable-selectable': !!options?.select,
                               },
                               'table-hover',
                               options?.select?.style ? 'datatable-selectable-' + options?.select?.style : ''
                           ]"
                   class="table table-rounded table-borderless table-striped">
        </DataTable>
      </div>
    </div>
  </div>
</template>

<style>
/* استایل‌ها بدون تغییر */
</style>