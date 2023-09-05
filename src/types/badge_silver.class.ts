import { IBadge } from "./badge.interface";
import { Icon } from "./icon.enum";
import { User } from "./user.interface";
export class BadgeSilver implements IBadge{

    badge: Icon | null = Icon.BADGE_SILVER;

    check(user: User): boolean {

        return user.solution_count >= 25 && user.solution_count < 50;
    }
}