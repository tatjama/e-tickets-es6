export class Author{
    constructor(name, surname, book){
        this.name = name;
        this.surname = surname;
        this.book = book;
    }
    getName(){
        return this.name;
    }
    setName(newName){
        this.name = newName;
    }
    getSurname(){
        return this.surname;
    }
    setSurname(newSurname){
        this.surname = newSurname;
    }
    getBook(){
        return this.book;
    }
    setBook(newBook){
        this.book = newBook;
    }
}