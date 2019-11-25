export class FilterModel {
    action: string;
    type: string;
    location: string;
    price_min? : number;
    price_max? : number;
    rooms?: number;
    bathrooms?: number;
    sale: boolean


    constructor(sale = null, type = null, location = null) {
        this.sale = sale;
        this.type = type;
        this.location = location;
    }
}