export default function MainContent() {
  return (
    <main className="main-content">
      <div className="main-content_title">
        <h1>Ragul Kumar V</h1>
        <h2>Frontend Developer</h2>
        <h3>ragul.website</h3>
      </div>
      <button type="button" className="w-100 btn btn-light">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-envelope mx-2"
          viewBox="0 0 16 16"
        >
          <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
        </svg>
        Email
      </button>
      <div className="main-content_content">
        <h1>About</h1>
        <p>
          I am a frontend developer with a particular interest in making things
          simple and automating daily tasks. I try to keep up with security and
          best practices, and am always looking for new things to learn.
        </p>
        <h1>Interests</h1>
        <p>Sports. Gadgets. Nature. Songs. Internet fanatic. Traveller.</p>
      </div>
    </main>
  );
}
