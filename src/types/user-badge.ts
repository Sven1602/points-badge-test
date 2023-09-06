import { Icon } from "./icon.enum";
import { User } from "./user.interface";

export class UserBadge{

    user: User;
    calculatedBadge: Icon | null;

    constructor(user: User, calculatedBadge: Icon | null){

        this.user = user;
        this.calculatedBadge = calculatedBadge;
    }
}