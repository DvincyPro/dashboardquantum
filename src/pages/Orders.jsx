import React from 'react'

import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';

import { ordersData, contextMenuItems, ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  return (
    <div className='h-full  mt-[90px] md:mt-0  p-2 md:p-10 bg-white rounded-3xl' >
      {/*///////////////////////////////////////// comopnente del header////////////////////////////// */}
      <Header category="Página" title="Pedidos" />
      {/*///////////////////////////////////////// comopnente del header////////////////////////////// */}

      {/*/////////////////////////////////// el grid de los items////////////////////////////////// */}
      <GridComponent
        id="gridcomp"
        dataSource={ordersData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
      >
        <ColumnsDirective>
        {/* acá se mapea las cosas del orders grid para mostrar datos en la tabla */}
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {ordersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        {/*///////////////////////////// acá se agregan cosas del syncfution//////////////////////// */}
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  )
}

export default Orders