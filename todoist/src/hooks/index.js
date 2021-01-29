import { useState, useEffect} from 'react';
import { firebase } from '../firebase'

const collatedTasks = () => {};

export const useTasks = selectedProject => {
    const [tasks,setTasks] = useState([]);

    useEffect(() => {
        let unsuscribe = firebase
            .firestore()
            .collection('tasks')
            .where('userId','==','1');
        unsuscribe = selectedProject && !collatedTasks(selectedProject) ?
            (unsuscribe = unsuscribe.where('projectId','==',selectedProject))
            : selectedProject === 'TODAY'
            ? (unsuscribe = unsuscribe.where(
                'date',
                    '==',
                    moment().format('DD/MM/YYYY')
                ))
                : selectedProject === 'INBOX' || selectedProject === 0
                ? (unsuscribe = unsuscribe.where('date','==',''))
                    : unsuscribe;
    }, [selectedProject]);

};
