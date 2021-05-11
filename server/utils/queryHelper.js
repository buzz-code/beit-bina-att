import Group from "../models/group.model";
import Teacher from "../models/teacher.model";
import AttType from "../models/att-type.model";
import User from "../models/user.model";
import StudentGroup from "../models/student-group.model";
import Lesson from "../models/lesson.model";

export function getUserByPhone(phone_number) {
    return new User().where({ phone_number })
        .fetch()
        .then(res => res.toJSON());
}

export function getTeacherByUserIdAndPhone(user_id, phone) {
    return new Teacher().where({ user_id, phone })
        .fetch({ require: false })
        .then(res => res ? res.toJSON() : null);
}

export function getKlassByUserIdAndKlassId(user_id, id) {
    return new Group().where({ user_id, id })
        .fetch({ require: false })
        .then(res => res ? res.toJSON() : null);
}

export function getLessonByUserIdAndLessonId(user_id, id) {
    return new Lesson().where({ user_id, id })
        .fetch({ require: false })
        .then(res => res ? res.toJSON() : null);
}

export function getStudentsByUserIdAndKlassId(user_id, group_id) {
    return new StudentGroup().where({ user_id, group_id })
        .fetchAll({ withRelated: ['student'] })
        .then(res => res.toJSON())
        .then(res => res.map(item => item.student));
}

export function getAttTypesByUserId(user_id) {
    return new AttType().where({ user_id, is_active: true, is_for_teacher: true })
        .fetchAll()
        .then(res => res.toJSON());
}
