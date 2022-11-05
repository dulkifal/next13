// import styles from '../../global.css'

async function getNote(noteID:string) {
    const res = await fetch( `http://127.0.0.1:8090/api/collections/posts/records/${noteID}`,
      { next:  {revalidate: 10} }  );
    const data = await res.json( );
    return data;


}


export default async function NotePage({params}:any) {
   
  const note = await getNote(params.id);
  return (
    <div>
      <h1>Note</h1>
      <div  >
        <h2>{note.title}</h2>
        <p>{note.posts}</p>
        <p>{note.created}</p>
        </div>
    </div>
  );
}
