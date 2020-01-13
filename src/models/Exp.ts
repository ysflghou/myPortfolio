class Exp {
  id: number;
  poste: string;
  company: string;
  location: string;
  fromDate: string;
  toDate: string;
  description: string;
  link: string;
  constructor(
    id: number,
    poste: string,
    company: string,
    location: string,
    fromDate: string,
    toDate: string,
    description: string,
    link: string
  ) {
    this.id = id;
    this.poste = poste;
    this.company = company;
    this.location = location;
    this.fromDate = fromDate;
    this.toDate = toDate;
    this.description = description;
    this.link = link;
  }
  static default(): Exp {
    return new Exp(0, "", "", "", "", "", "", "");
  }
}
export default Exp;
