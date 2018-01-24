import { Group } from "./group";

export interface User{
     username:string,
     password:string,
     role:string,
     groups:[Group]
}