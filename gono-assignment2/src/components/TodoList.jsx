export default function TodoList(data)
{
    // id, text, completed
    return (
    <div className="todo">
      {data.list.map((li) => (
        <div key={li.id}>
          <input type="checkbox" id={`todo${li.id}`} name={`todo${li.id}`} value={li.text} defaultChecked={li.completed} />
          <label htmlFor={`todo${li.id}`}>{li.text}</label>
        </div>
      ))}
    </div>
  );
}