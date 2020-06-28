export class Ticket{
    constructor(id, title, author, type, date, scene, quantity, image, price){
        this.id = id;
        this.title = title;
        this.author = author;
        this.type = type;
        this.date = date;
        this.scene = scene;
        this.quantity = quantity;
        this.image = image;
        this.price = price;

    }
    getTitle(){
        return this.title;
    }
    setTitle(newTitle){
        this.title = newTitle;
    }
    getAuthor(){
        return this.author;
    }
    setAuthor(newAuthor){
        this.author = newAuthor;
    }
    getType(){
        return this.type;
    }
    setType(newType){
        this.type = newType;
    }
    getDate(){
        return this.date;
    }
    setDate(newDate){
        this.date = newDate;
    }
    getScene(){
       return this.scene;
    }
    setScene(newScene){
        this.scene = newScene;
    }
    getQuantity(){
        return this.quantity;
    }
    setQuantity(newQuantity){
        this.quantity = newQuantity;
    }
    getImage(){
        return this.image;
    }
    setImage(newImage){
        this.image = newImage;
    }
    getPrice(){
        return this.price;
    }
    setPrice(newPrice){
        this.price = newPrice;
    }
}