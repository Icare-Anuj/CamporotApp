export class PropertyModel {
    title: string;
    description: string;
    kind: string;
    price: number;
    state: string;
    sale: boolean;
    property_id : string;
    images: any;
    priceToString?: string;
    imageMain: string;

    constructor(title: string, description: string, kind: string, price: number, state: string, sale: boolean, property_id: string, images: any) {
        this.title = title;
        this.description = description;
        this.kind = kind;
        this.price = price;
        this.state = state;
        this.sale = sale;
        this.property_id = property_id;
        this.images = images;

    }
}