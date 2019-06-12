import { Type, Annual } from './constant';

class Member {
    // type = null;
    // avenue = 0;

    constructor(object) {
        const { name, type, joinAt } = object;
        this.name = name;
        this.type = type;
        this.joinAt = joinAt || new Date();
        this.annual = 2;
    }

    isAnnual() {
        const current = new Date();
        if (current.getFullYear() - this.joinAt.getFullYear() >= Annual)
            return true;
        return false;
    }
}

module.exports.Member = Member;