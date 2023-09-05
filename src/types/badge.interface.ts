import { Icon } from "./icon.enum";
import { User } from "./user.interface";

export interface IBadge{

    badge: Icon | null;

    check(user: User): boolean;
}