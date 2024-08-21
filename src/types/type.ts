export interface Experience {
  Id: string;
  CompanyName: string;
  City: string;
  Role: string;
  Start: string;
  End: string;
  Description: string;
  Technologies: string[];
}

export interface IProject {
  Id: string;
  Name: string;
  Company: string;
  Image?: string;
  Description: string;
  Technologies: string[];
  Role: string;
}
