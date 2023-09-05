import { IBadge } from "./badge.interface";
import { Icon } from "./icon.enum";
import { User } from "./user.interface";
export class BadgeGold implements IBadge{

    badge: Icon | null = Icon.BADGE_GOLD;

    check(user: User): boolean {

        return user.solution_count >= 50;
    }
}