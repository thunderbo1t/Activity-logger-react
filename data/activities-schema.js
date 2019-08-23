import Realm from 'realm';

const Activity = {
  name: 'Activity',
  properties: {
    name: 'string',
    type: 'string',
    goalTime: 'float',
  },
};

const ActivityLog = {
  name: 'ActivityLog',
  properties: {
    name: 'string',
    type: 'string',
    startTime: 'date',
    endTime: 'date',
    duration: 'int',
  },
};

const CurrentActivity = {
  name: 'CurrentActivity',
  properties: {
    name: 'string',
    type: 'string',
    startTime: 'date',
  },
};

const CalendarActivity = {
  name: 'CalendarActivity',
  primaryKey: 'id',
  properties: {
    id: {type: 'string', indexed: true},
    name: 'string',
    startTime: 'date',
    endTime: 'date',
  },
};

export default new Realm({
  deleteRealmIfMigrationNeeded: true,
  schema: [Activity, CalendarActivity, ActivityLog, CurrentActivity],
});
