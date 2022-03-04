import {fireEvent, waitFor, render, screen} from '@testing-library/react';
import ToDoList from "./ToDoList";

test('Mocken von http hat geklappt', async() => {
    jest.spyOn(global, 'fetch').mockImplementation(() => {
        return Promise.resolve({
            status: 200,
            json: () => Promise.resolve({
                info: {},
                results: [
                    {
                        jobId: '1',
                        jobToDo: 'Einkaufen',
                        jobStatus: 'OPEN',
                        description: 'Milch ist aus'
                    },
                    {
                        jobId: '2',
                        jobToDo: 'Putzen',
                        jobStatus: 'OPEN',
                        description: 'Bad'
                    },
                    {
                        jobId: '3',
                        jobToDo: 'Garten düngen',
                        jobStatus: 'DONE',
                        description: 'Obstbäume'
                    }]
            })
        } as Response);
    });

    render(<ToDoList/>);
    await waitFor(() => {
        expect(screen.getAllByTestId('todolist').length).toBe(3);
    });
})
