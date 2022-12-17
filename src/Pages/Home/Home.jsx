import Header from '../../Layout/Header/Header';
import Input from '../../Conponents/Input/Intup';
import Button from '../../Conponents/Button/Button';
import Card from '../../Conponents/Card/Card';
import styles from './Home.module.css';
import { FaPlus } from "react-icons/fa";
import { useState } from 'react';

function Home() {
    const [studentName, studentSetName] = useState('');
    const [students, setStudents] = useState([]);
    
    function handleAddName() {
        const newStudent = {
            name: studentName
        }
        setStudents([...students, newStudent])
        studentSetName('')
    }

    function handleRemoveStudent(id) {
        setStudents(students.filter((e, index) => index !== id))
        
    }

    return(
        <div className={ styles.conteiner }>
            <Header />
            <h1>Lista de alunos do curso</h1>

            <div>
                <Input 
                type='text'
                name='name'
                placeholder='nome do aluno'
                value={studentName}
                handleOnChange={(e)=> studentSetName(e.target.value)}
                />

                <Button 
                icon={ <FaPlus/> }
                handleOnClick={handleAddName}/>
            </div>

            <div className={ styles.cards }>
                {
                  students.map((student, index) => 
                  <Card 
                  key={index}
                  text={student.name}
                  handleOnClick={handleRemoveStudent}
                  idUser={index}
                  />)
                }
            </div>
            
        </div>
    )
}
export default Home;