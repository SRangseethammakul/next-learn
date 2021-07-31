function Blog({ data }) {
  return (
    <div>
      {data &&
        data.map((course, index) => {
          return (
            <div key={index}>
              <h2>{course.ch_id}</h2>
              <h2>{course.course_id}</h2>
              <h2>{course.ch_title}</h2>
              <h2>{course.ch_dateadd}</h2>
              <h2>{course.ch_view}</h2>
              <hr></hr>
            </div>
          );
        })}
    </div>
  );
}

export async function getStaticPaths() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://api.codingthailand.com/api/course");
  const courses = await res.json();
  const { data: datas } = courses;
  // Get the paths we want to pre-render based on posts
  const paths = datas.map((result) => ({
    params: { id: result.id.toString() },
  }));

  // We'll pre-render only these paths at build time.
  // { fallback: false } means other routes should 404.
  return { paths, fallback: false };
}

// This also gets called at build time
export async function getStaticProps({ params }) {
  // params contains the post `id`.
  // If the route is like /posts/1, then params.id is 1
  const res = await fetch(
    `https://api.codingthailand.com/api/course/${params.id}`
  );
  const post = await res.json();
  const { data } = post;
  // Pass post data to the page via props
  return { props: { data } };
}

export default Blog;
