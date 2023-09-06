import { Icon } from "./icon.enum";
import { UserBadge } from "./user-badge";
import { User } from "./user.interface";

export class UserStatistic{

    count: number;
    average_user_count: number;
    top_5_user: Array<User>;
    most_badge: Icon | null;

    constructor(){
    }

    private calculateAverage(array: number[]): number {
        const sum = array.reduce((value1: number, value2: number): number => value1 + value2);
        return sum / array.length;
    };

    private getCountIcons(badge: Icon, userBadges: Array<UserBadge>): number{

        let filtered = userBadges.filter(x => x.calculatedBadge === badge);

        if(filtered.length > 0){
            return filtered.length;
        }else{
            return 0;
        }
    }

    private getMostGivenBadge(userBadges: Array<UserBadge>) : Icon{

        let countBadgeGold = this.getCountIcons(Icon.BADGE_GOLD, userBadges);
        console.log('Count Gold: ' + countBadgeGold);
        let countBadgeSilver = this.getCountIcons(Icon.BADGE_SILVER, userBadges);
        console.log('Count Silver:'  + countBadgeSilver);
        let countBadgeBronze = this.getCountIcons(Icon.BADGE_BRONZE, userBadges);
        console.log('Count Bronze:' + countBadgeBronze);
       
        const dicBadgeMap = new Map();
        dicBadgeMap.set(Icon.BADGE_GOLD, countBadgeGold);
        dicBadgeMap.set(Icon.BADGE_SILVER, countBadgeSilver);
        dicBadgeMap.set(Icon.BADGE_BRONZE, countBadgeBronze);

        //display Item
        console.log([...dicBadgeMap.entries()].reduce((a, e ) => e[1] > a[1] ? e : a));
        // display Key
        let badge = [...dicBadgeMap.entries()].reduce((a, e ) => e[1] > a[1] ? e : a)[0] 
        console.log(badge);
        return badge;
    }

    calculateStatistic(userBadges: Array<UserBadge>): void{

        this.count = userBadges.length;
        let counts = userBadges.map(x => x.user.solution_count);
        //console.log(this.counts);
        this.top_5_user = userBadges.map(x => x.user);
        // sort desc
        this.top_5_user = this.top_5_user.sort((a,b) => 0 - (a.solution_count > b.solution_count ? 1 : -1));
        // get top 5 with highest solution_count
        this.top_5_user = this.top_5_user.slice(0, 5);
        console.log(this.top_5_user.length);
        //console.log(this.top_5_users);
        this.average_user_count = this.calculateAverage(counts);
        this.most_badge = this.getMostGivenBadge(userBadges);
    }

    displayStatistic(): void{

        console.log('There are: ' + this.count + ' users.');
        console.log('Average Usercount: ' + this.average_user_count);
        console.log('Top 5 Users:');
        this.top_5_user.forEach(user=>{
            console.log(user.username);
        })
        console.log('Most given badge: ' + this.most_badge);
    }
}