
import { Component, Input, AfterViewInit } from '@angular/core';
import DataSource from 'devextreme/data/data_source';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import { DxFormTypes } from 'devextreme-angular/ui/form';
import { DxSelectBoxTypes } from 'devextreme-angular/ui/select-box';
import { animate } from '@angular/animations';

@Component({
  selector: 'app-detail-view',
  templateUrl: './detail-view.component.html',
  styleUrls: ['./detail-view.component.scss'],
  providers: []
})

export class DetailViewComponent implements AfterViewInit {
  @Input() key: any;

  @Input() rowData: any;

  url: string;

  productIdBySupplier: any;

  productsData: DataSource<any,any>;

  orderHistoryData: DataSource<any,any>;

  constructor() {
   
    this.url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridAdvancedMasterDetailView';
  }

  ngAfterViewInit() {
    this.productsData = new DataSource({
      store: AspNetData.createStore({
        key: 'ProductID',
        loadParams: { SupplierID: this.key },
        loadUrl: `${this.url}/GetProductsBySupplier`,
        onLoaded: (items) => this.setDefaultProduct(items),
      }),
    });
  }

  setDefaultProduct(items:any) {
    const firstItem = items[0];

    if (firstItem && this.productIdBySupplier === undefined) {
      this.productIdBySupplier = firstItem.ProductID;
    }
  }

  handleValueChange(e: DxSelectBoxTypes.ValueChangedEvent) {
    this.productIdBySupplier = e.value;
    this.orderHistoryData = new DataSource({
      store: AspNetData.createStore({
        key: 'OrderID',
        loadParams: { ProductID: e.value },
        loadUrl: `${this.url}/GetOrdersByProduct`,
      }),
    });
  }

  customizeItemTemplate(item: DxFormTypes.SimpleItem) {
    item.template = 'formItem';
  }
}
