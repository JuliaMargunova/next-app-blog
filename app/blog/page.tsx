import Link from "next/link";

async function getData(){
    const responce = await fetch("https://jsonplaceholder.typicode.com/posts", {
        next:{
            revalidate:60
        }
    })
    return responce.json();
}

export default async function Blog (){
const posts = await getData()
    console.log(posts)
    return(<>
            <h1>Blog Page</h1>
            <h2>jhghjjds</h2>
            <ul>
                {posts.map((post: any) => (
                    <li key={post.id}>
                        <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
        </>
)
}
