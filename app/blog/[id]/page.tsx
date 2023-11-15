import {Metadata} from "next";

type Props = {
    params:{
        id:string
    }
}
async function getData(id:string){
    const responce = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
        next:{
            revalidate:60
        }
    })
    return responce.json();
}
export async function generateMetadata({params:{id}}:Props):Promise<Metadata>{
    return {
        title:id
    }
}
   export default async function PostDetails ({params:{id}}:Props){
    const post = await getData(id)
        return(
            <>
                <h1>Post Details {id}</h1>
               <h2> {post.title}</h2>
                <p>
                    {post.body}
                </p>
            </>

        )
    }
