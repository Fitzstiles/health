import Link from "next/link";

const About = () => {
  return (
    <div>
      <h1>About</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Enim provident
        nesciunt, quae omnis dolores eius repudiandae animi, sit, atque illo
        aspernatur error repellat? A provident vitae excepturi voluptates,
        doloremque dignissimos.
      </p>
      <Link href='/'>Go back home</Link>
    </div>
  );
};

export default About;
