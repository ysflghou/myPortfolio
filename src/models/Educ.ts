class Educ {
  id: number;
  title: string;
  school: string;
  location: string;
  fromDate: string;
  toDate: string;
  constructor(
    id: number,
    title: string,
    school: string,
    location: string,
    fromDate: string,
    toDate: string
  ) {
    this.id = id;
    this.title = title;
    this.school = school;
    this.location = location;
    this.fromDate = fromDate;
    this.toDate = toDate;
  }
  static default(): Educ {
    return new Educ(0, "", "", "", "", "");
  }
}
export default Educ;
