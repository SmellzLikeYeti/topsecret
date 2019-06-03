class Link {
  next;
  constructor(name) {
    this.name = name;
  }
}

class LinkedList {
  firstLink;

  constructor() {
    firstLink = null;
  }

  isEmpty() {
    return firstLink === null;
  }

  insertFirstLink(name) {
    newLink = new Link(name);
    newLink.next = firstLink;
    firstLink = newLink;
  }
}
