/* eslint-disable require-jsdoc */
"use strict";

// eslint-disable-next-line no-redeclare
class Node {
    constructor(value, c) {
        this.value = value;
        this.left = null;
        this.right = null;
        this.compartor=c;
    }
    max() {
        if (this.right !== null) {
            return this.right.max();
        }
        else {
            return this.value;
        }
    }

    readIntoArray() {
        if (this.left !== null) {
        this.left.readIntoArray();
        }

        return this.value;
        if (this.right !== null) {
        this.right.readIntoArray();
        }
        }

    min() {
        if (this.left !== null) {
            return this.left.min();
        }
        else {
            return this.value;
        }
    }

    add(element) {
        if (element > this.value) {
            if (this.right === null) {
                this.right = new Node(element);
            }
            else {
                this.right.add(element);
            }
        }
        else {
            if (this.left === null) {
                this.left = new Node(element);
            }
            else {
                this.left.add(element);
            }
        }
    }

   

    contains(element) {
        if (element === this.value) {
            return true;
        }
        if (element > this.value) {
            if (this.right === null) {
                return false;
            }
            else {
                return this.right.contains(element);
            }
        }
        else {
            if (this.left === null) {
                return false;
            }
            else {
                return this.left.contains(element);
            }
        }
    }
    remove(parent, element) {
        if (element < this.value) {
            if (this.left === null) {
                return false;
            }
            else {
                return this.left.remove(this, element);
            }
        }
        else if (element > this.value) {
            if (this.right === null) {
                return false;
            }
            else {
                return this.right.remove(this, element);
            }
        }
        else { //if (element === this.value) {
            // simply remove this node if it doesn't have children 
            if (this.left === null && this.right === null) {
                if (parent.left === this) {
                    parent.left = null;
                }
                else if (parent.right === this) {
                    parent.right = null;
                }
            }
            // if there is one child, put it in our place
            else if (this.left !== null && this.right === null) {
                this.value = this.left.value;
                this.right = this.left.right;
                this.left = this.left.left;
                return true;
            } else if (this.right !== null && this.left === null) {
                this.value = this.right.value;
                this.left = this.right.left;
                this.right = this.right.right;
                return true;
            } else if (this.left !== null && this.right !== null) {
                // if there are two children copy the largest of the small and prune that
                let largest = this.left.max();
                this.value = largest;
                this.left.remove(this, largest);
            }
            return true;
        } // end of "if this is the value to remove"
    } // end of remove method
} // end of Node class

class RootNode extends Node {
    constructor() {
        super(null);
    }

    add(element) {
        if (this.value === null) {
            this.value = element;
            return;
        }
        return super.add(element);
    }

    
    remove(element) {
        if (this.value === element && this.left === null && this.right === null) {
            this.value = null;
            return true;
        }
        else {
            return super.remove(this, element);
        }
    }
}

// eslint-disable-next-line no-unused-vars
class BinarySearchTree {
    constructor(c) {
        this.root = new RootNode();
        this.compartor=c
    }
    min() {
        if (this.value === null) {
            return null;
        }
        return this.root.min();
    }
    add(element) {
        this.root.add(element);
    }

    insertAll(array) {
        for (let i = 0; i < array.length; i++) {
            this.root.add(array[i])
        }
    }

    readIntoArray() {
        return this.root.readIntoArray();
        }

    contains(element) {
        return this.root.contains(element);
    }
    remove(element) {
        return this.root.remove(element);
    }
}


/**
* Employee class
*/
class Employee {
    /**
    *
    * @param {String} name name of employee
    * @param {Number} salary monthly salary
    * @param {Number} year hired on year
    * @param {Number} month hired on month
    * @param {Number} day hired on day
    */
    constructor(name, salary, year, month, day) {
    this.name = name;
    this.salary = salary;
    this.hireDate = new Date(year, month - 1, day);
    }

    nameComparator(empA, empB) {
        if (empA.name > empB.name) {
            return 1;
        }
        if (empA.name < empB.name) {
            return -1;
        }
        return 0;
    }

    }
    
    let employees = [
    new Employee("George", 40000, 1996, 11, 5),
    new Employee("Dave", 50000, 2000, 1, 3),
    new Employee("Richard", 45000, 2001, 2, 7)
    ];


