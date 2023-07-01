import { IProductRepository } from "../../../../../repositories/interfaces/IProductRepository";
import { ResponseImplementation } from "../../../../../util/response";
import { EditProductModel } from "../../model";

export class EditProductRepositoryMock implements IProductRepository {
    data:Array<EditProductModel> = []
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
            data.id = Math.floor(Math.random() * 90)
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
        return new Promise((resolve, reject) => {  
            resolve( new ResponseImplementation(this.data, true));
        }); 
    }
    remove(id: string): Promise<ResponseImplementation> {
        throw new Error("Method not implemented.");
    }
    fetch(id: string): Promise<ResponseImplementation> {
        throw new Error("Method not implemented.");
    }
    async edit(data: EditProductModel): Promise<ResponseImplementation> {
        try {
            this.data.map(el => {
                if(el.id == data.id){
                    if(data.name == undefined) data.name = el.name
                    if(data.description == undefined) data.name = el.description
                    if(data.value == undefined) data.name = el.value
                    if(data.author == undefined) data.name = el.author
                    if(data.code == undefined) data.name = el.code
                    el.name = data.name
                    el.author = data.author
                    el.description = data.description
                    el.code = data.code
                    el.value = data.value
                    throw new Error("Produto editado com sucesso")
                }
            })
            return new Promise((resolve, reject) => {  
                resolve( new ResponseImplementation("Houve um problema ao editar o produto.", true));
            }); 
        } catch (error) {
            if(error.message == "Produto editado com sucesso"){
                return new Promise((resolve, reject) => {  
                    resolve( new ResponseImplementation(error.message, false));
                }); 
            }
            return new Promise((resolve, reject) => {  
                resolve( new ResponseImplementation("Houve um problema ao editar o produto.", true));
            }); 
        }
    }
    
}