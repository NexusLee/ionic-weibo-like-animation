export interface Joke {
  id: number;
  joke: string;
  categories: Array<string>;
}

export interface JokeResponse {
  type: string;
  value: Array<Joke>;
}



/*
export class Joke {
  ID: number;
  Title: string;
  Description: string;
  Starred = false;
  Done = false;
  Deleted = false;

  constructor(ID: number, Title: string, Description: string, Starred?: boolean, Done?: boolean, Deleted?: boolean) {
    this.ID = ID;
    this.Title = Title;
    this.Description = Description;
    this.Starred = Starred ? Starred : false;
    this.Done = Done ? Done : false;
    this.Deleted = Deleted ? Deleted : false;
  };

}
*/
