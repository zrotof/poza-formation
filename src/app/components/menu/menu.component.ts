import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
import { ProductsService } from 'src/app/services/products/products.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit{

  plats: Product[] = [];


  constructor(private productService: ProductsService) { }

  menus : any;



  ngOnInit(): void {
    this.initMenus();
    this.setActiveMenuAndGetData(0, 'meals');
  }

  initMenus(){
    this.menus =  [
      {
        label: "Viandes",
        link: "meals"
      },
      {
        label: "Poissons",
        link: "fishes"

      },
      {
        label: "Légumes",
        link: "vegetables"

      },
      {
        label: "Accompagnements",
        link: "accompaniments"
      },
      {
        label: "Petits dej",
        link: "breakfasts"
      },
      {
        label: "Boissons",
        link: "drinks"
      },
      {
        label: "Dessert",
        link: "deserts"
      }
  
    ]  
  }

  setActiveMenuAndGetData(activeMenuNumber: number, activeMenuLink: string){
    this.setActiveMenu(activeMenuNumber);
    this.getFoodsOrDrinks(activeMenuLink);
  }

  setActiveMenu(param: number){

    let menusArray = <NodeListOf<HTMLElement>>document.querySelectorAll(".menu-headers button");

    if(menusArray[param]?.classList.contains('active-menu')){
      return;
    }

    menusArray.forEach(element => {
        element.classList.remove("active-menu");
    });

    menusArray[param]?.classList.add('active-menu');
  }

  getFoodsOrDrinks(param: string): Product[]{

    if(param === 'meals'){
      this.plats =  this.productService.getMealProducts();
    }

    if(param === 'fishes'){
      this.plats = this.productService.getFishProducts();
    }

    if(param === 'vegetables'){
      this.plats = this.productService.getVegetableProducts();
    }

    if(param === 'accompaniments'){
      this.plats = this.productService.getAccompanimentProducts();
    }

    if(param === 'breakfasts'){
      this.plats = this.productService.getBreakfastProducts();
    }

    if(param === 'drinks'){
      this.plats = this.productService.getDrinkProducts();
    }

    if(param === 'deserts'){
      this.plats = this.productService.getDesertProducts();
    }

    return this.plats;
      
  }

  

}

