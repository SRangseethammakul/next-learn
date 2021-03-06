import Link from "next/link";
import styles from "../../../styles/Home.module.css";
function About({ abilities }) {
  return (
    <>
      <p>fefe</p>
      <ul>
        {abilities &&
          abilities.map((ability, index) => (
            <Link
              className={styles.grid}
              href={{
                pathname: `/blogs/${ability.id}`,
              }}
              style={{ cursor: "pointer" }}
              as={`/blogs/${ability.id}`}
              key={ability.id}
            >
              <div className={styles.card} style={{ cursor: "pointer" }}>
                <li>
                  <h3>{ability.title}</h3>
                  <h4>{ability.detail}</h4>
                </li>
              </div>
            </Link>
          ))}
      </ul>
    </>
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
