export interface DataResult {
    name: Name;
    email: string;
    cell: string;
    gender: string;
    dob: Dob;
}
export interface UsersList {
    id: string;
    name: string;
    email: string;
    cell: string;
    gender: string;
    age: string;
    [key: string]: string; // prevenir un error 
}

interface Name {
    first: string;
    last: string;
}

interface Dob {
    age: string;
}