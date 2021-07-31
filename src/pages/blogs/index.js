import Link from "next/link";
function About({ abilities }) {
  return (
    <div>
      <ul>
        {abilities &&
          abilities.map((ability, index) => (
            <Link
              href={{
                pathname: `/blogs/${ability.id}`
              }}
              as={`/blogs/${ability.id}`}
              key={ability.id}
            >
              <div>
                <li>
                  <h3>{ability.title}</h3>
                  <h4>{ability.detail}</h4>
                </li>
              </div>
            </Link>
          ))}
      </ul>
    </div>
  );
}

// This function gets called at build time
export async function getStaticProps() {
  const res = await fetch("https://api.codingthailand.com/api/course");
  const posts = await res.json();
  const { data } = posts;
  return {
    props: { abilities: data },
  };
}

export default About;
