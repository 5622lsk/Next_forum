import { connectDB } from "@/util/database";

export default async function Home() {
  const db = (await connectDB).db("next-study");
  let result = await db.collection("post").find().toArray();
  console.log(result);

  return <div>하이</div>;
}
