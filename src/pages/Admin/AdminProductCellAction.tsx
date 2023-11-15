import React from 'react';

function AdminProductCellAction({
  onDeleteProduct,
  navigateToEditProduct,
}: {
  onDeleteProduct: () => void;
  navigateToEditProduct: () => void;
}) {
  const IconAction = (iconClass: string, color: string) => (
    <i className={iconClass} style={{ color: color, cursor: 'pointer' }}></i>
  );

  return (
    <div className="flex flex-1 gap-3">
      <div onClick={navigateToEditProduct}>
        {IconAction('pi pi-pencil', 'stateblue')}
      </div>
      <div onClick={onDeleteProduct}> {IconAction('pi pi-trash', 'red')}</div>
    </div>
  );
}

export default AdminProductCellAction;
