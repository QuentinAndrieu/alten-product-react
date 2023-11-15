import React from 'react';

function AdminProductCellAction() {
  const IconAction = (iconClass: string, color: string) => (
    <i className={iconClass} style={{ color: color, cursor: 'pointer' }}></i>
  );

  return (
    <div className="flex flex-1 gap-3">
      {IconAction('pi pi-pencil', 'stateblue')}
      {IconAction('pi pi-trash', 'red')}
    </div>
  );
}

export default AdminProductCellAction;
