import { User } from './types/user.interface';
import { Icon } from './types/icon.enum';
import { BadgeList } from './badge_list.class';

/*
export const getUsersBadge = ( user: User ): Icon | null => {
  let badge = null;
  switch ( true ) {
    case ( user.solution_count >= 5 && user.solution_count < 25 ):
      badge = Icon.BADGE_BRONZE;
      break;
    case ( user.solution_count >= 25 && user.solution_count < 50 ):
      badge = Icon.BADGE_SILVER;
      break;
    case ( user.solution_count >= 50 ):
      badge = Icon.BADGE_GOLD;
      break;
  }
  return badge;
};
*/

// Version 1 with if/else Statements
export const getUsersBadgeVers1 = ( user: User ): Icon | null => {
  let badge: Icon | null = null;

  if(user.solution_count >= 5 && user.solution_count < 25){
    badge = Icon.BADGE_BRONZE;
  }else if(user.solution_count >= 25 && user.solution_count < 50){
    badge = Icon.BADGE_SILVER;
  }else if(user.solution_count >= 50){
    badge = Icon.BADGE_GOLD;
  }
  return badge;
};

// Version 2 as Chain of Responsibility
export const getUsersBadgeVers2 = ( user: User ): Icon | null => {
  let badge: Icon | null = null;

  let badgeList = new BadgeList();
  badgeList.badges.forEach((item)=>
    {
      if(item.check(user)){
        badge = item.badge;
      }
    }
  )
  return badge;
};
