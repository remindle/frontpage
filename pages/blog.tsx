import Link from '../components/link';
import Navigation from '../components/navigation';
import { getAllPosts } from '../utils/mdx';

export type Frontmatter = {
  slug: string;
  published: boolean;
  title: string;
  description: string;
  date: string;
  category: string;
  image: string;
};

type Post = {
  code: string;
  slug: string;
  frontmatter: Frontmatter;
};
const Blog: React.FC<{ posts: Post[] }> = ({ posts }) => {
  return (
    <>
      <Navigation />
      <main className="flex flex-col flex-grow justify-center">
        <section className="py-20">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto mb-20 text-center">
              <span className="text-xs text-primary font-semibold">What&apos;s new at Remindle</span>
              <h2 className="mt-8 mb-10 text-4xl font-semibold font-heading">{ posts.length > 0 ? `✍️ All latest Posts` : `Nothing published yet` }</h2>
              <p className="text-xl text-gray-500">{ posts.length > 0 ? `Tech, development, you name it!` : `Come back soon!` }</p>
            </div>
            {posts.map((post, index) => (
              <Link href={`posts/${ post.slug }`} key={index} className="flex flex-wrap items-center -mx-4 mb-16">
                <>
                  <div className="w-full lg:w-2/5 px-4">
                    <div className="text-left">
                      <span className="inline-block mb-3 text-xs px-2 py-1 bg-secondary rounded uppercase text-white font-semibold">{ post.frontmatter.category }</span>
                      <h2 className="mb-4 text-3xl font-semibold font-heading">{ post.frontmatter.title }</h2>
                      <span className="inline-block mb-6 text-xs text-gray-500">{ post.frontmatter.date }</span>
                      <p className="text-xl text-gray-500">{ post.frontmatter.description }</p>
                    </div>
                  </div>
                  <div className="order-first lg:order-last w-full lg:w-3/5 px-4 mb-8 lg:mb-0">
                    <div className="h-96">
                      <img className="w-full h-full object-cover rounded-lg" src={ post.frontmatter.image } alt="article image" />
                    </div>
                  </div>
                </>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getAllPosts();

  return {
    props: { posts },
  };
};

export default Blog;