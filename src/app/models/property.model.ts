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
    room: number;
    bathroom: number;
    address: string;
    square_meters: number;
    heating:boolean;
    community_fees: number;
    orientation: string;
    furnished: boolean;
    equipped_kitchen: boolean;
    floor_number: number;
    common_zones: string;
    pets: boolean;
    contract_time: string;
    bond: string;

    constructor(title: string, description: string, kind: string, price: number, state: string, sale: boolean, property_id: string, images: any, room: number,
        bathroom:number, address:string, square_meters: number, heating: boolean, community_fees: number, orientation: string, furnished: boolean,
        equipped_kitchen: boolean, floor_number: number, common_zones: string, pets: boolean, contract_time: string, bond: string) {
        this.title = title;
        this.description = description;
        this.kind = kind;
        this.price = price;
        this.state = state;
        this.sale = sale;
        this.property_id = property_id;
        this.images = images;
        this.room = room;
        this.bathroom = bathroom;
        this.address = address;
        this.square_meters = square_meters;
        this.heating = heating;
        this,community_fees = community_fees;
        this.orientation = orientation;
        this.furnished = furnished;
        this.equipped_kitchen = equipped_kitchen;
        this.floor_number = floor_number;
        this.common_zones = common_zones;
        this.pets = pets;
        this.contract_time = contract_time;
        this.bond = bond;



    }
}