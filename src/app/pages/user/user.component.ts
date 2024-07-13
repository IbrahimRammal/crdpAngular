
import { NgModule, Component, enableProdMode } from '@angular/core';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import DataSource from 'devextreme/data/data_source';
import { DetailViewComponent } from '../detail-view/detail-view.component';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  url = 'https://js.devexpress.com/Demos/Mvc/api/DataGridAdvancedMasterDetailView';

  suppliersData: DataSource;

  constructor() {
    this.suppliersData = new DataSource({
      store: AspNetData.createStore({
        key: 'SupplierID',
        loadUrl: `${this.url}/GetSuppliers`,
        // insertUrl: `${this.url}/InsertOrder`,
        // updateUrl: `${this.url}/UpdateOrder`,
        // deleteUrl: `${this.url}/DeleteOrder`,
        // onBeforeSend(method, ajaxOptions) {
        //   ajaxOptions.xhrFields = { withCredentials: true };
        // }
      }),
    });
  }
}





