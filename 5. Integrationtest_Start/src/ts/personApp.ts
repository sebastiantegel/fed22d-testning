import { IPerson } from "./models/IPerson";
import { getPersons } from "./services/personService";

export async function init() {
  let persons: IPerson[] = await getPersons();

  for (let i = 0; i < persons.length; i++) {
    let name = document.createElement("h3");
    name.innerHTML = persons[i].name;

    document.body.appendChild(name);
  }
}
