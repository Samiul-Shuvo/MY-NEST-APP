/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductService {
    private products = [
        
            {id:1, name: "Mobile" , price: 20000},
            {id:2, name: "Laptop" , price: 30000},
            {id:3, name: "Tv" , price: 40000},
    ];

    getAllProducts(){
       return this.products;

    }
    getProductById(id:number){
        return this.products.find((product)=>
             product.id === id
    )
    }

    
}
