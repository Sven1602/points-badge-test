import { User } from './types/user.interface';
import { Icon } from './types/icon.enum';

export const getUsersBadge = ( user: User ): Icon | null => {
  let badge: Icon | null = null;
  switch ( true ) {
    case ( user.solution_count > 1 && user.solution_count < 5 ):
      badge = Icon.BADGE_STARTER;
      break;
    case ( user.solution_count >= 5 && user.solution_count < 25 ):
      badge = Icon.BADGE_BRONZE;
      break;
    case ( user.solution_count >= 25 && user.solution_count < 50 ):
      badge = Icon.BADGE_SILVER;
      break;
    case ( user.solution_count >= 50 && user.solution_count <= 100):
      badge = Icon.BADGE_GOLD;
      break;
    case ( user.solution_count > 100 && user.solution_count <= 2000):
        badge = Icon.BADGE_PLATINUM;
        break;
    case ( user.solution_count > 2000):
        badge = Icon.BADGE_GOD_LIKE;
        break;
    case ( user.solution_count < 0):
        badge = Icon.BADGE_BAD_ASS;
        break;
  }
  return badge;
};
