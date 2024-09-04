export function PersonsShow({ person, onUpdate }) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    onUpdate(person.id, params, () => event.target.reset());
  };
  return (
    <div>
      <h1>Person information</h1>
      <p>Name: {person.name}</p>
      <p>Email: {person.email}</p>
      <p>Phone_number: {person.phone_number}</p>
      <p>Short_bio: {person.short_bio}</p>
      <p>LinkedIn_url: {person.linkedin_url}</p>
      <p>Twitter_handle: {person.twitter_handle}</p>
      <p>Personal_blog: {person.personal_blog}</p>
      <p>Online_resume_url: {person.online_resume_url}</p>
      <p>Github_url: {person.github_url}</p>
      <p>Photo: {person.photo}</p>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input defaultValue={person.name} name="name" type="text" />
        </div>
        <div>
          Email: <input defaultValue={person.email} name="email" type="text" />
        </div>
        <div>
          Phone_number: <input defaultValue={person.phone_number} name="phone_number" type="text" />
        </div>
        <div>
          Short_bio: <input defaultValue={person.short_bio} name="short_bio" type="text" />
        </div>
        <div>
          LinkedIn_url: <input defaultValue={person.linkedin_url} name="linkedin_url" type="text" />
        </div>
        <div>
          Twitter_handle: <input defaultValue={person.twitter_handle} name="twitter_handle" type="text" />
        </div>
        <div>
          Personal_blog: <input defaultValue={person.personal_blog} name="personal_blog" type="text" />
        </div>
        <div>
          Online_resume_url: <input defaultValue={person.online_resume_url} name="online_resume_url" type="text" />
        </div>
        <div>
          Github_url: <input defaultValue={person.github_url} name="github_url" type="text" />
        </div>
        <div>
          Photo: <input defaultValue={person.photo} name="photo" type="text" />
        </div>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}
