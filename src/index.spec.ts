import { getUsersBadgeVers1, getUsersBadgeVers2 } from './index';
import { Icon } from './types/icon.enum';
import { User } from './types/user.interface';

describe('getUsersBadgeVers1', () => {

  it(`get Gold`, function () {
    expect(getUsersBadgeVers1(getUserMock(100))).toEqual(Icon.BADGE_GOLD);
    expect(getUsersBadgeVers1(getUserMock(50))).toEqual(Icon.BADGE_GOLD);
    expect(getUsersBadgeVers1(getUserMock(1000000))).toEqual(Icon.BADGE_GOLD);
  });

  it(`get Silver`, function () {
    expect(getUsersBadgeVers1(getUserMock(25))).toEqual(Icon.BADGE_SILVER);
    expect(getUsersBadgeVers1(getUserMock(49))).toEqual(Icon.BADGE_SILVER);
    expect(getUsersBadgeVers1(getUserMock(30))).toEqual(Icon.BADGE_SILVER);
  });

  it(`get Bronze`, function () {
    expect(getUsersBadgeVers1(getUserMock(5))).toEqual(Icon.BADGE_BRONZE);
    expect(getUsersBadgeVers1(getUserMock(24))).toEqual(Icon.BADGE_BRONZE);
    expect(getUsersBadgeVers1(getUserMock(10))).toEqual(Icon.BADGE_BRONZE);
  });

  it(`get no Icon`, function () {
    expect(getUsersBadgeVers1(getUserMock(4))).toEqual(null);
    expect(getUsersBadgeVers1(getUserMock(-100))).toEqual(null);
    expect(getUsersBadgeVers1(getUserMock(0))).toEqual(null);
  });

});

describe('getUsersBadgeVers2', () => {

  it(`get Gold`, function () {
    expect(getUsersBadgeVers2(getUserMock(100))).toEqual(Icon.BADGE_GOLD);
    expect(getUsersBadgeVers2(getUserMock(50))).toEqual(Icon.BADGE_GOLD);
    expect(getUsersBadgeVers2(getUserMock(1000000))).toEqual(Icon.BADGE_GOLD);
  });

  it(`get Silver`, function () {
    expect(getUsersBadgeVers2(getUserMock(25))).toEqual(Icon.BADGE_SILVER);
    expect(getUsersBadgeVers2(getUserMock(49))).toEqual(Icon.BADGE_SILVER);
    expect(getUsersBadgeVers2(getUserMock(30))).toEqual(Icon.BADGE_SILVER);
  });

  it(`get Bronze`, function () {
    expect(getUsersBadgeVers2(getUserMock(5))).toEqual(Icon.BADGE_BRONZE);
    expect(getUsersBadgeVers2(getUserMock(24))).toEqual(Icon.BADGE_BRONZE);
    expect(getUsersBadgeVers2(getUserMock(10))).toEqual(Icon.BADGE_BRONZE);
  });

  it(`get no Icon`, function () {
    expect(getUsersBadgeVers1(getUserMock(4))).toEqual(null);
    expect(getUsersBadgeVers1(getUserMock(-100))).toEqual(null);
    expect(getUsersBadgeVers1(getUserMock(0))).toEqual(null);
  });

});

function getUserMock(count: number): User {
  return {
    id: '___',
    username: '___',
    solution_count: count
  };
}
