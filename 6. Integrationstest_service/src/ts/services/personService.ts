import axios, { AxiosResponse } from "axios";
import { IPerson } from "../models/IPerson";

export async function getPersons(endpoint: string): Promise<IPerson[]> {
  try {
    // (2)   (6)                    (3 -> 4)
    let response = await axios.get<IPerson[]>(
      "http://api.company/persons/" + endpoint
    );
    //              (7)
    return response.data;
  } catch {
    return [];
  }
}

export async function getPersonsByAge(age: number): Promise<IPerson[]> {
  if (age > 0) {
    let response = await axios.get<IPerson[]>("..." + age);
    return response.data;
  }

  return [];
}
