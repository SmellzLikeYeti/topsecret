class Link {
  constructor(name) {
    this.name = name;
    this.next = null;
  }

  display() {
    console.log(`LINK ${name}`);
  }
}

class LinkedList {
  firstLink = null;
  constructor() {
    this.firstLink = null;
  }

  isEmpty() {
    return firstLink === null;
  }

  insertFirstLink(name) {
    var newLink = new Link(name);
    newLink.next = firstLink;
    firstLink = newLink;
  }

  removeFirst() {
    var linkRef = firstLink;
    if (!isEmpty) {
      firstLink = firstLink.next;
    } else {
      console.log("Empty linked list");
    }

    return linkRef;
  }

  display() {
    var thelink = firstLink;

    while (thelink != null) {
      thelink.display();

      thelink = thelink.next;
    }
  }

  find(value) {
    var theLink = firstLink;
    if (!isEmpty()) {
      while (theLink.name !== value) {
        if (theLink.next === null) {
          return null;
        } else {
          theLink = theLink.next;
        }
      }
    } else {
      console.log(`Empty linked list`);
    }

    return thelink;
  }

  remove(value) {
    var currentLink = firstLink;
    var previousLink = firstLink;

    while (currentLink.name !== value) {
      if (currentLink.next === null) {
        return null;
      } else {
        previousLink = currentLink;
        currentLink = currentLink.next;
      }
    }
    if (currentLink === firstLink) {
      firstLink = firstLink.next;
    } else {
      previousLink.next = currentLink.next;
    }

    return currentLink;
  }
}

var newLinkedList = new LinkedList();
newLinkedList.insertFirstLink("Keith");
newLinkedList.insertFirstLink("Emily");
newLinkedList.insertFirstLink("Hailey");
newLinkedList.insertFirstLink("Maddie");

newLinkedList.display();
