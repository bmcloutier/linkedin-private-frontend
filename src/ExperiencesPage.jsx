import { ExperiencesIndex } from "./ExperiencesIndex";

export function ExperiencesPage() {
  const experiences = [
    {
      id: 1,
      start_date: "01/01/2020",
      end_date: "Present",
      job_title: "Professional Dude",
      company_name: "Big Company",
      details: "I did a lot of stuff.",
    },
    {
      id: 2,
      start_date: "01/01/2018",
      end_date: "12/31/2019",
      job_title: "Junior Dude",
      company_name: "Little Company",
      details: "I did a few things.",
    },
  ];
  return (
    <main>
      <ExperiencesIndex experiences={experiences} />
    </main>
  );
}
