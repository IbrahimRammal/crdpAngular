
import { NgModule, Component, enableProdMode } from '@angular/core';
import * as AspNetData from 'devextreme-aspnet-data-nojquery';
import DataSource from 'devextreme/data/data_source';
import { DetailViewComponent } from '../detail-view/detail-view.component';

import { GlobalVars } from 'src/config/settings';
const AUTH_API = GlobalVars.BACKEND_API+'/UserRole'

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {
  allowedPageSizes:any = [5, 10, 'all'];
  // displayMode:any = 'compact';
  displayMode:any = 'full';
  url = AUTH_API;

  suppliersData: DataSource;

  constructor() {
    this.suppliersData = new DataSource({
      store: AspNetData.createStore({
        key: 'id',
        loadUrl: `${this.url}/GetAllUsers`,
        // insertUrl: `${this.url}/InsertOrder`,
         updateUrl: `${this.url}/UpdateUser`,
        // deleteUrl: `${this.url}/DeleteOrder`,
        // onBeforeSend(method, ajaxOptions) {
        //   ajaxOptions.xhrFields = { withCredentials: true };
        // }
      }),
    });
  
  }
}





