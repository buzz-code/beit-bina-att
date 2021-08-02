import bookshelf from '../../common-modules/server/config/bookshelf';
import User from './user.model';

const TABLE_NAME = 'groups';

/**
 * Group model.
 */
class Group extends bookshelf.Model {

    /**
     * Get table name.
     */
    get tableName() {
        return TABLE_NAME;
    }

    // get hasTimestamps() {
    //     return true;
    // }

    user() {
        return this.belongsTo(User);
    }
}

export default Group;