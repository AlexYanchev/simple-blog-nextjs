export default async function AllLastComments() {
  //   const lastComments = comments.lastComments;
  const lastComments = [
    { id: 1, postId: 1, text: 'Комментарий к посту 1' },
    { id: 2, postId: 2, text: 'Комментарий к посту 2' },
  ];

  return (
    <div>
      <ul>
        {lastComments.map((comment) => {
          return <li key={comment.id}>{comment.text}</li>;
        })}
      </ul>
    </div>
  );
}
