const path = require("path");
const fs = require("fs/promises");

const contactsPath = path.resolve("./db/contacts.json");

async function listContacts() {
  const contacts = await fs.readFile(contactsPath);
  return JSON.parse(contacts);
}

async function getContactById(contactId) {
  const contacts = await listContacts();
  const filereadCintact = contacts.find(({ id }) => id === contactId);
  return filereadCintact;
}

async function removeContact(contactId) {
  const contacts = await listContacts();
  const contactDelete = contacts.filter((el) => el.id !== contactId);
  await fs.writeFile(contactsPath, JSON.stringify(contactDelete));
}

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const contactIds = contacts.map((item) => +item.id);
  const newContact = {
    id: String(Math.max(...contactIds) + 1),
    name,
    email,
    phone,
  };
  contacts.push(newContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts));
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};
