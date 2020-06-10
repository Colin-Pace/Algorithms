// Create a queue called animal shelter that can enqueue cats and dogs and dequeue either the eldest animal or the eldest cat or dog.

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}


class Queue {
  constructor() {
    this.head = null;
    this.tail = null;
    this.eldestAnimal = null;
    this.eldestCat = null;
    this.eldestDog = null;
  }

  enqueue(data, type, age) {
    let node = new Node(data);
    if (type === "dog") node.type = "dog";
    else node.type = "cat";
    node.age = age;

    if (this.head === null || this.head === undefined) {
      this.head = node;
      this.tail = node;
      this.eldestAnimal = node;
      if (node.type === "cat") this.eldestCat = node;
      else this.eldestDog = node;

    } else {
      this.tail.next = node;
      this.tail = node;

      if (node.age > this.eldestAnimal.age) this.eldestAnimal = node;

      if (node.type === "dog") {
        if (this.eldestDog === null || this.eldestDog.age < node.age) {
          this.eldestDog = node;
        }
      }

      if (node.type === "cat") {
        if (this.eldestCat === null || this.eldestCat.age < node.age) {
          this.eldestCat = node;
        }
      }
    }
  }

  dequeueAny() {
    if (!this.head) throw "No animals in shelter.";
    else if (!this.head.next) {
      let result = this.head;
      this.head = null;
      this.tail = null;
      return result;

    } else {
      let fast = this.head.next;
      let slow = this.head;

      if (slow.age === this.eldestAnimal.age) {
        this.head = fast;
        slow.next = null
        this.findNewEldestAnimal();
        if (slow.type === "cat") this.findNewEldestCat();
        else this.findNewEldestDog();
        return slow;

      } else {
        while (fast.age !== this.eldestAnimal.age) {
          fast = fast.next;
          slow = slow.next;
        }

        if (fast.next === null) {
          this.tail = slow;
          slow.next = null;
          this.findNewEldestAnimal();
          if (fast.type === "cat") this.findNewEldestCat();
          else this.findNewEldestDog();
          return fast;

        } else {
          slow.next = fast.next;
          fast.next = null;
          this.findNewEldestAnimal();
          if (fast.type === "cat") this.findNewEldestCat();
          else this.findNewEldestDog();
          return fast;
        }
      }
    }
  }

  findNewEldestAnimal() {
    let runner = this.head;
    this.eldestAnimal = runner;
    while (runner) {
      if (this.eldestAnimal.age < runner.age) {
        this.eldestAnimal = runner;
        runner = runner.next;
      } else runner = runner.next;
    }
  }

  dequeueCat() {
    if (!this.head) throw "No cats in shelter.";
    else if (this.eldestCat === null) throw "No cats in shelter";
    else if (!this.head.next) {
      let result = this.head;
      this.head = null;
      this.tail = null;
      return result;

    } else {
      let fast = this.head.next;
      let slow = this.head;

      if (slow.age === this.eldestCat.age) {
        this.head = fast;
        slow.next = null;
        this.findNewEldestCat();
        return slow;

      } else {
        while (fast.age !== this.eldestCat.age) {
          fast = fast.next;
          slow = slow.next;
        }

        if (fast.next === null) {
          this.tail = slow;
          slow.next = null;
          this.findNewEldestCat();
          return fast;

        } else {
          slow.next = fast.next;
          fast.next = null;
          this.findNewEldestCat();
          return fast;
        }
      }
    }
  }

  findNewEldestCat() {
    let runner = this.head;
    this.eldestCat = null;
    while (runner) {
      if (runner.type === "cat") {
        if (this.eldestCat === null) this.eldestCat = runner;
        else if (this.eldestCat.age < runner.age) this.eldestCat = runner;
      }
      runner = runner.next;
    }
  }

  dequeueDog() {
    if (!this.head) throw "No dogs in queue.";
    else if (this.eldestDog === null) throw "No dogs in shelter";
    else if (!this.head.next) {
      let result = this.head;
      this.head = null;
      this.tail = null;
      return result;
    }

    else {
      let fast = this.head.next;
      let slow = this.head;

      if (slow.age === this.eldestDog.age) {
        this.head = fast;
        slow.next = null;
        this.findNewEldestDog();
        return slow;

      } else {
        while (fast.age !== this.eldestDog.age) {
          fast = fast.next;
          slow = slow.next;
        }

        if (fast.next === null) {
          this.tail = slow;
          slow.next = null;
          this.findNewEldestDog();
          return fast;

        } else {
          slow.next = fast.next;
          fast.next = null;
          this.findNewEldestDog();
          return fast;
        }
      }
    }
  }

  findNewEldestDog() {
    let runner = this.head;
    this.eldestDog = null;
    while (runner) {
      if (runner.type === "dog") {
        if (this.eldestDog === null) this.eldestDog = runner;
        else if (this.eldestDog.age < runner.age) this.eldestDog = runner;
      }
      runner = runner.next;
    }
  }
}


const animalShelter = new Queue;

animalShelter.enqueue("a", "dog", 10);
animalShelter.enqueue("b", "cat", 7);
animalShelter.enqueue("c", "cat", 9);
animalShelter.enqueue("d", "dog", 13);
animalShelter.enqueue("e", "dog", 2);
animalShelter.enqueue("f", "cat", 3);

console.log(animalShelter.dequeueAny());
