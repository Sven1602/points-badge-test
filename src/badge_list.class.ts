
import { IBadge } from "./types/badge.interface";
import { BadgeBronze } from "./types/badge_bronze.class";
import { BadgeGold } from "./types/badge_gold.class";
import { BadgeSilver } from "./types/badge_silver.class";

export class BadgeList {

    private bronze = new BadgeBronze();
    private gold = new BadgeGold();
    private silver = new BadgeSilver();
    badges: Array<IBadge> = [this.bronze, this.gold, this.silver];
}