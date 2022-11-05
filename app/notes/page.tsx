import Link from "next/link";
import PocktBase from "pocketbase";
import CreateNote from "./CreateNote";

async function getNotes() {
  const db = new PocktBase("http://127.0.0.1:8090");
  const data = await db.records.getList("posts");
  // const res = await fetch( 'http://127.0.0.1:8090/api/collections/posts/records?page=1&perPage=30',
  // { cache: 'no-cache' }  );
  // const data = await res.json( );

  return data?.items as any[];
}

export default async function NotesPage() {
  const notes = await getNotes();
  return (
    <div>
      <h1>Notes</h1>
      <div>
        {notes?.map((note) => {
          return <Note key={note.id} note={note} />;
        })}
      </div>
      <CreateNote />
    </div>
  );
}

function Note({ note }: any) {
  const { id, title, posts, created } = note || {};
  return (
    <Link href={`/notes/${id}`}>
      <div>
       
        <h2>{title}</h2>
        <p>{posts}</p>
        <p>{created}</p>
      </div>
    </Link>
  );
}
