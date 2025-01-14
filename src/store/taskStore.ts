import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface Task {
	id: number;
	text: string;
	completed: boolean;
}

interface TaskStore {
	tasks: Task[];
	addTask: (text: string) => void;
	deleteTask: (id: number) => void;
	toggleTask: (id: number) => void;
}

const useTaskStore = create<TaskStore>()(
	persist(
		set => ({
			tasks: [],

			addTask: text =>
				set(state => ({
					tasks: [
						...state.tasks,
						{ id: state.tasks.length + 1, text, completed: false },
					],
				})),

			deleteTask: id =>
				set(state => ({
					tasks: state.tasks.filter(task => task.id !== id),
				})),

			toggleTask: id =>
				set(state => ({
					tasks: state.tasks.map(task =>
						task.id === id ? { ...task, completed: !task.completed } : task
					),
				})),
		}),
		{
			name: 'task-storage',
		}
	)
);

export default useTaskStore;
