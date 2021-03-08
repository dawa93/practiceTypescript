{
  // intersection type : &\
  type Students = {
    name: string;
    score: number;
  };
  type Worker = {
    employeedId: number;
    work: () => void;
  };

  let internWork = (person: Students & Worker) => {
    console.log(person.name, person.score, person.employeedId, person.work());
  };

  internWork({ name: 'DH', score: 10, employeedId: 1, work: () => {} });
}
