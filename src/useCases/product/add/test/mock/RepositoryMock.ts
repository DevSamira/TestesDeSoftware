import { IProductRepository } from "../../../../../repositories/interfaces/IProductRepository";
import { ResponseImplementation } from "../../../../../util/response";
import { EditProductModel } from "../../../edit/model";
import { AddProductModel } from "../../model";

export class AddProductMock implements IProductRepository {
    data = []
    save(data): Promise<ResponseImplementation> {
        try {
            if(data.name == undefined){
                return new Promise((resolve, reject) => {  
                    resolve(new ResponseImplementation("Houve um erro ao salvar o produto!", true));
                });
            } 
            if(data.author == undefined){
                return new Promise((resolve, reject) => {  
                    resolve(new ResponseImplementation("Houve um erro ao salvar o produto!", true));
                });
            } 
            if(data.description == undefined){
                return new Promise((resolve, reject) => {  
                    resolve(new ResponseImplementation("Houve um erro ao salvar o produto!", true));
                });
            } 
            if(data.code == undefined){
                return new Promise((resolve, reject) => {  
                    resolve(new ResponseImplementation("Houve um erro ao salvar o produto!", true));
                });
            } 
            this.data.map(el => {     
                if(el.code == data.code) {
                    throw new Error("código duplicado")
                }
            })
            if(data.value == undefined){
                return new Promise((resolve, reject) => {  
                    resolve(new ResponseImplementation("Houve um erro ao salvar o produto!", true));
                });
            } 
            this.data.push(data)
            return new Promise((resolve, reject) => {  
                resolve(new ResponseImplementation("Produto salvo!", false));
            });  
        } catch (error) {
            return new Promise((resolve, reject) => {  
                resolve(new ResponseImplementation("Houve um erro ao salvar o produto!", true));
            });
        }
     
    }
    list(): Promise<ResponseImplementation> {
        throw new Error("Method not implemented.");
    }
    remove(id: string): Promise<ResponseImplementation> {
        throw new Error("Method not implemented.");
    }
    fetch(id: string): Promise<ResponseImplementation> {
        throw new Error("Method not implemented.");
    }
    edit(data: EditProductModel): Promise<ResponseImplementation> {
        throw new Error("Method not implemented.");
    }
    
}