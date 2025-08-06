let obj_student = {
    stud1: null,
    id: null,
    registration: function(name, id) {
        this.stud1 = name;
        this.id = id;
        console.log(`Student ${this.stud1} with ID ${this.id} registered successfully.`);
    }
};

module.exports = {obj_student};