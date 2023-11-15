import React, { ChangeEvent, useState } from 'react';
import {
  DataTable,
  DataTableSelectionMultipleChangeEvent,
} from 'primereact/datatable';
import { Column } from 'primereact/column';
import { FilterMatchMode } from 'primereact/api';
import { InputText } from 'primereact/inputtext';
import { Product } from '../../models/Product';
import AdminProductCellAction from './AdminProductCellAction';
import { useTranslation } from 'react-i18next';

type FiltersState = {
  global: {
    value: string | null;
    matchMode: FilterMatchMode;
  };
  name: {
    value: string | null;
    matchMode: FilterMatchMode;
  };
  code: {
    value: string | null;
    matchMode: FilterMatchMode;
  };
};

function AdminProductList({
  onSelectProduct,
  selectedProducts,
  products,
  onDeleteProduct,
}: {
  onSelectProduct: (products: Product[]) => void;
  selectedProducts: Product[];
  products: Product[];
  onDeleteProduct: (productId: number) => void;
}) {
  const { t } = useTranslation();
  const [filters, setFilters] = useState<FiltersState>({
    global: { value: null, matchMode: FilterMatchMode.CONTAINS },
    name: { value: null, matchMode: FilterMatchMode.CONTAINS },
    code: { value: null, matchMode: FilterMatchMode.CONTAINS },
  });
  const [globalFilterValue, setGlobalFilterValue] = useState('');
  const navigateToEditProduct = () => {
    console.info('Navigate to a new page Edit product');
  };
  const onGlobalFilterChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    let _filters = { ...filters };

    _filters['global'].value = value;

    setFilters(_filters);
    setGlobalFilterValue(value);
  };
  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        <span className="p-input-icon-left">
          <i className="pi pi-search" />
          <InputText
            value={globalFilterValue}
            onChange={onGlobalFilterChange}
            placeholder={t('PRODUCT_ADMIN.KEYWORD.SEARCH')}
          />
        </span>
      </div>
    );
  };
  const header = renderHeader();

  return (
    <DataTable
      stripedRows
      value={products}
      selectionMode={'checkbox'}
      selection={selectedProducts}
      onSelectionChange={(
        e: DataTableSelectionMultipleChangeEvent<Product[]>,
      ) => onSelectProduct(e.value)}
      dataKey="id"
      paginator
      rows={5}
      rowsPerPageOptions={[5, 10, 25, 50]}
      tableStyle={{ minWidth: '50rem' }}
      filters={filters}
      header={header}
      filterDisplay="row"
      globalFilterFields={['name', 'code']}
    >
      <Column selectionMode="multiple" headerStyle={{ width: '3rem' }}></Column>
      <Column
        field="code"
        header={t('PRODUCT_ADMIN.HEADER.CODE')}
        sortable
        filter
        filterPlaceholder={t('PRODUCT_ADMIN.HEADER.CODE.PLACEHOLDER')}
      ></Column>
      <Column
        field="name"
        header={t('PRODUCT_ADMIN.HEADER.NAME')}
        sortable
        filter
        filterPlaceholder={t('PRODUCT_ADMIN.HEADER.NAME.PLACEHOLDER')}
      ></Column>
      <Column
        body={rowData => (
          <AdminProductCellAction
            onDeleteProduct={() => onDeleteProduct(rowData.id)}
            navigateToEditProduct={() => navigateToEditProduct()}
          />
        )}
      ></Column>
    </DataTable>
  );
}

export default AdminProductList;
