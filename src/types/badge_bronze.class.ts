import { IBadge } from "./badge.interface";
import { Icon } from "./icon.enum";
import { User } from "./user.interface";
export class BadgeBronze implements IBadge{

    badge: Icon | null = Icon.BADGE_BRONZE;

    check(user: User): boolean {

        return user.solution_count >= 5 && user.solution_count < 25;
    }
}