// This is the class and constructor used to create an object with a person's information.
class PersonInfo {
    constructor(id, gender, parents, children, siblings, spouses, bio) {
        this.id = id;
        this.gender = gender;

        this.parents = [];
        for (const parent of parents) {
            this.parents.push({ id: parent });
        }

        this.children = [];
        for (const child of children) {
            this.children.push({ id: child });
        }

        this.siblings = [];
        for (const sibling of siblings) {
            this.siblings.push({ id: sibling });
        }

        this.spouses = [];
        for (const spouse of spouses) {
            this.spouses.push({ id: spouse });
        }

        this.bio = bio;
    }
}

let data = [
    // This is the object that represents you
    new PersonInfo("Maggie", "female", ["Homer", "Marge"], [], ["Bart", "Lisa"], [], "I'm Homer"),

     // These two objects are your parents
    new PersonInfo("Homer", "male", [], ["Maggie", "Bart", "Lisa", ], [], ["Marge"], "I'm Homer"),
    new PersonInfo("Marge", "female", [], ["Maggie", "Bart", "Lisa", "Maggie"], [], ["Homer"], "I'm Marge."),

     // These objects are your siblings
    new PersonInfo("Bart", "male", ["Homer", "Marge"], [], ["Maggie", "Lisa"], [], "I'm Bart"),
    new PersonInfo("Lisa", "female", ["Homer", "Marge"], [], ["Maggie", "Bart"], [], "I'm Lisa."),
];

export default data;