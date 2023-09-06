import { User } from './types/user.interface';
import { Icon } from './types/icon.enum';
import { getAllUser } from './user-store';
import { UserBadge } from './types/user-badge';
import { UserStatistic } from './types/user-statistic.class';

export const getUsersBadge = ( user: User ): Icon | null => {
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
};

export const getUsersWithStatistics = (): void => {
  let userBadges = new Array<UserBadge>();
  getAllUser().then(users => {
    users.forEach(user => {
      let badge = getUsersBadge(user);
      let userBadge = new UserBadge(user, badge);
      userBadges.push(userBadge);
    });
    let userStatistic = new UserStatistic();
    userStatistic.calculateStatistic(userBadges);
    userStatistic.displayStatistic();
  });
};


