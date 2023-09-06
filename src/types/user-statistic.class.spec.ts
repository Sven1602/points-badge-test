import { UserBadge
 } from "./user-badge";
import { UserStatistic } from "./user-statistic.class";
import { Icon } from "./icon.enum";
import { getUsersBadge } from "..";

describe('calculateStatistics', () => {

  it(`count users`, function () {

    let userBadges = getUserBadges();
    let testObject = getObject();
    testObject.calculateStatistic(userBadges);

    expect(testObject.count).toEqual(6);
  });

  it(`average userCounts`, function () {

    let userBadges = getUserBadges();
    let testObject = getObject();
    testObject.calculateStatistic(userBadges);

    expect(testObject.average_user_count).toEqual(300);
  });

  it(`top 5`, function () {

    let userBadges = getUserBadges();
    let testObject = getObject();
    testObject.calculateStatistic(userBadges);

    expect(testObject.top_5_user[0].username).toEqual('user 2');
    expect(testObject.top_5_user[1].username).toEqual('user 1');
    expect(testObject.top_5_user[2].username).toEqual('user 3');
    expect(testObject.top_5_user[3].username).toEqual('user 5');
    expect(testObject.top_5_user[4].username).toEqual('user 6');

    expect(testObject.top_5_user.length).toEqual(5);
  });

  it(`most given badge`, function () {

    let userBadges = getUserBadges();
    let testObject = getObject();
    testObject.calculateStatistic(userBadges);

    expect(testObject.most_badge).toEqual(Icon.BADGE_GOLD);
  });
});

function getObject(): UserStatistic {

  return new UserStatistic();
}

function getUserBadges(): Array<UserBadge>{

  let userBadges = new Array<UserBadge>();
  let user1 = {
    id: '1',
    username: 'user 1',
    solution_count: 500
  };
  let user2= {
    id: '2',
    username: 'user 2',
    solution_count: 1000
  };
  let user3 = {
    id: '3',
    username: 'user 3',
    solution_count: 200
  };
  let user4 = {
    id: '4',
    username: 'user 4',
    solution_count: 10
  };
  let user5 = {
    id: '5',
    username: 'user 5',
    solution_count: 50
  };
  let user6 = {
    id: '6',
    username: 'user 6',
    solution_count: 40
  };
  userBadges.push(new UserBadge(user1, getUsersBadge(user1)));
  userBadges.push(new UserBadge(user2, getUsersBadge(user2)));
  userBadges.push(new UserBadge(user3, getUsersBadge(user3)));
  userBadges.push(new UserBadge(user4, getUsersBadge(user4)));
  userBadges.push(new UserBadge(user5, getUsersBadge(user5)));
  userBadges.push(new UserBadge(user6, getUsersBadge(user6)));

  return userBadges;
}
