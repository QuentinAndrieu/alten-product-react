import React, { useEffect, useState } from 'react';
import './Admin.css';
import AdminProductList from './AdminProductList';
import { Button } from 'primereact/button';
import { Product } from '../../models/Product';
import productService from '../../services/ProductService';
import { useTranslation } from 'react-i18next';

function AdminPage() {
  const { t } = useTranslation();
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [hasSelectedProducts, setHasSelectedProducts] =
    useState<boolean>(false);
  const onDeleteButtonClick = () => {
    setProducts(
      products.filter(p => !selectedProducts.map(s => s.id).includes(p.id)),
    );
    setSelectedProducts([]);
  };

  useEffect(() => {
    productService.get().then(response => setProducts(response));
    setHasSelectedProducts(selectedProducts.length > 0);
  }, [selectedProducts]);

  return (
    <div>
      <div className="flex flex-1 gap-3 mb-4">
        <Button
          label={t('PRODUCT_ADMIN.BUTTON_NEW')}
          icon="pi pi-plus"
          severity="success"
        />
        <Button
          label={t('PRODUCT_ADMIN.BUTTON_DELETE')}
          icon="pi pi-trash"
          severity="secondary"
          onClick={onDeleteButtonClick}
          disabled={!hasSelectedProducts}
        />
      </div>

      <AdminProductList
        selectedProducts={selectedProducts}
        products={products}
        onSelectProduct={setSelectedProducts}
      />
    </div>
  );
}

export default AdminPage;
