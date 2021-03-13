import { IorederDetails } from "./ioreder-details";

export interface Iorder {
    userEmail: string,
    order: IorederDetails[],
    deliveryfee: number,
    totalprice: number,
    resturant: string
}
