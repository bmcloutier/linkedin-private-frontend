export function ExperiencesIndex({ experiences }) {
  return (
    <div>
      <h1>Experience</h1>
      {experiences.map((experience) => (
        <div key={experience.id}>
          <h2>
            {experience.company_name} - {experience.job_title}
          </h2>
          <h3>
            {experience.start_date} - {experience.end_date}
          </h3>
          <p>{experience.details}</p>
          <hr />
        </div>
      ))}
    </div>
  );
}
