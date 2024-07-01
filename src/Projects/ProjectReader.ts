import Project from "./Project";

export default class ProjectReader {
  get(): Project[] {
    return [new Project("Randomizer")];
  }
}
