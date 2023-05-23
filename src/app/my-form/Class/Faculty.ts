export class Faculty {
    name: string = "";
    dekan: string = "";
    phoneNumber: string = ""
    address: string = ""
    professors: string[] = []
    constructor(name: string, dekan: string, phoneNumber: string, address: string, professors: string[]) {
        this.name = name;
        this.dekan = dekan;
        this.phoneNumber = phoneNumber;
        this.address = address;
        this.professors = professors;
    }
}