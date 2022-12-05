import { Component, OnInit } from '@angular/core';
import{AuthServicService} from '../../../app/services/auth-servic.service';
//import{Route} from '@angular/router';
import { DataService } from '../../services/data.service';
import { ProductInfo } from '../../interface/ec-template.interface';
import{ProductDetailComponent}  from '../../category/product-detail/product-detail.component';
// interface  categoryinterface{
//   categoryName :string;
//   subcategoryName : string;
//   // productName : string;
//   // productPrice : number;
//   // productimg : ;
// }

const categoryarray : any[]=[
  {
    categoryName :'Watch',
    subcategoryName : 'Digital Watch',
  },
  {
    categoryName :'Watch',
    subcategoryName : 'Analog Watch',
  },
]
@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  productList: ProductInfo[];
  router: any;



  constructor(private dataService: DataService) { }

  ngOnInit(){
    this.dataService.productList$.subscribe(data => {
      this.productList = data;
     });
  }

  searchproduct(val:any){
    // if(val in (this.productList)){
    //   this.dataService.getproduct(val);
    // }

    this.dataService.getproduct(val);
      //this.dataService.getProductById(val);
  }




}
