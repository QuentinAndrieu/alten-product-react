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
    // Call API to delete a list of products
    const updatedProducts = products.filter(
      p => !selectedProducts.map(s => s.id).includes(p.id),
    );
    setProducts(updatedProducts);
    setSelectedProducts([]);
  };
  const onDeleteProduct = (productId: number) => {
    // Call API to delete a product
    const updatedProducts = products.filter(p => productId !== p.id);
    setProducts(updatedProducts);
    setSelectedProducts([]);
  };
  const navigateToAddProduct = () => {
    console.info('Navigate to a new page Add product');
  };

  useEffect(() => {
    productService.getProducts().then(response => setProducts(response));
  }, []);

  useEffect(() => {
    setHasSelectedProducts(selectedProducts.length > 0);
  }, [selectedProducts]);

  return (
    <div>
      <div className="flex flex-1 gap-3 mb-4">
        <Button
          label={t('PRODUCT_ADMIN.BUTTON_NEW')}
          icon="pi pi-plus"
          severity="success"
          onClick={navigateToAddProduct}
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
        onDeleteProduct={onDeleteProduct}
      />
    </div>
  );
}

export default AdminPage;
