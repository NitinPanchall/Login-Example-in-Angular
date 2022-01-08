export class Registration {
    constructor(
        public firstName: string = "",
        public lastName: string = "",
        public dob: any = null,
        public doj: any = null,
        public email: string = "",
        public password: string = "",
        public company: string = "Select company"
    ) { }
}