const FetchTasks = async (setTaskList) => {
  try {
    const response = await fetch("/todos.json");
    if(!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();
    const formattedTasks = data.map(task => ({
      value: task.title,
      description: task.description,
      completed: task.completed,
      id: task.id
    }))
		setTaskList(data);
  } catch (error) {
		console.error("Error massage", error);
		}
 };

export default FetchTasks;