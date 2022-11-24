const contacts = require("./contacts");
const { program } = require("commander");

program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "contacts id")
  .option("-n, --name <type>", "contacts name")
  .option("-e, --email <type>", "contacts email")
  .option("-p, --phone <type>", "contacts phone");

program.parse();
const argv = program.opts();

async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      const allContactsList = await contacts.listContacts();
      console.log(allContactsList);
      break;

    case "get":
      const contact = await contacts.getContactById({ id });
      console.log(contact);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(newContact);
      break;

    case "remove":
      const removeContact = await contacts.removeContact({ id });
      console.log(removeContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
