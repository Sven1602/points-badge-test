import { getUsersBadge } from './index';
import { Icon } from './types/icon.enum';
import { User } from './types/user.interface';

describe('getUsersBadgeVers', () => {

  it(`get Gold`, function () {
    expect(getUsersBadge(getUserMock(100))).toEqual(Icon.BADGE_GOLD);
    expect(getUsersBadge(getUserMock(50))).toEqual(Icon.BADGE_GOLD);
  });

  it(`get Silver`, function () {
    expect(getUsersBadge(getUserMock(25))).toEqual(Icon.BADGE_SILVER);
    expect(getUsersBadge(getUserMock(49))).toEqual(Icon.BADGE_SILVER);
    expect(getUsersBadge(getUserMock(30))).toEqual(Icon.BADGE_SILVER);
  });

  it(`get Bronze`, function () {
    expect(getUsersBadge(getUserMock(5))).toEqual(Icon.BADGE_BRONZE);
    expect(getUsersBadge(getUserMock(24))).toEqual(Icon.BADGE_BRONZE);
    expect(getUsersBadge(getUserMock(10))).toEqual(Icon.BADGE_BRONZE);
  });

  it(`get Bad Ass`, function () {
    expect(getUsersBadge(getUserMock(-1))).toEqual(Icon.BADGE_BAD_ASS);
    expect(getUsersBadge(getUserMock(-100))).toEqual(Icon.BADGE_BAD_ASS);
  });

  it(`get Starter`, function () {
    expect(getUsersBadge(getUserMock(2))).toEqual(Icon.BADGE_STARTER);
  });

  it(`get God like`, function () {
    expect(getUsersBadge(getUserMock(2001))).toEqual(Icon.BADGE_GOD_LIKE);
    expect(getUsersBadge(getUserMock(1000000))).toEqual(Icon.BADGE_GOD_LIKE);
  });

  it(`get Platinum`, function () {
    expect(getUsersBadge(getUserMock(101))).toEqual(Icon.BADGE_PLATINUM);
  });

  it(`get no Icon`, function () {
    expect(getUsersBadge(getUserMock(0))).toEqual(null);
    expect(getUsersBadge(getUserMock(1))).toEqual(null);
  });

});

function getUserMock(count: number): User {
  return {
    id: '___',
    username: '___',
    solution_count: count
  };
}
