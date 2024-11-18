const FetchTasks = async (setTaskList) => {
  try {
    const responce = await fetch("./todos.json");
    const data = await responce.json();
		setTaskList(data);
  } catch (error) {
		console.error("Error massage", error);
		}
 };

export default FetchTasks;