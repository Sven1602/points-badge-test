import { User } from './types/user.interface';
import { Icon } from './types/icon.enum';

export async function getUsersBadge(user: User): Promise<Icon | null> {
  
  let badge: Icon | null = null;
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
}
