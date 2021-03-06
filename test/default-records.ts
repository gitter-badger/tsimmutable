import { parseUserRecord, allRecords }  from './models-imm';

import * as Immutable from 'immutable';

let user = parseUserRecord({
    profile: {
        firstName: 'Anakin',
        lastName: 'Skywalker'
    },
    login: 'anakin1990',
    friends: [{
        profile: {
            firstName: 'Dart',
            lastName: 'Vader'
        },
        login: 'vader1990'
    }]
}, allRecords)

console.log(`${user.profile.firstName} ${user.profile.lastName}`)
console.log(`${user} ${user.profile.lastName}`)
