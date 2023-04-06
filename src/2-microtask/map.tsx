import React from 'react'

export type NewComponentPropsType = {
    student: Array<StudentType>
}

type StudentType = {
    id: number,
    name: string,
    age: number
}
export const NewComponent = (props: NewComponentPropsType) => {

    const topCars = [
        {manufacturer: 'BMW', model: 'X7'},
        {manufacturer: 'Porsche', model: 'Panamera'},
        {manufacturer: 'Toyota', model: 'Camry'},
    ]

    return (
        <>
            <ul>
                {props.student.map((objectFromStudentArray, index) => {
                    return (
                        <>
                            <li key={objectFromStudentArray.id}>
                                <span> name: {objectFromStudentArray.name}</span>
                                <span> age: {objectFromStudentArray.age}</span>
                            </li>
                        </>
                    )
                })}
            </ul>

            <table>
                {topCars.map((el, i) => {
                    return (
                        <>
                            <tr>
                                <th>manufacturer</th>
                                <th>model</th>
                            </tr>
                            <tr>
                                <td>{el.manufacturer}</td>
                                <td>{el.model}</td>
                            </tr>
                        </>
                    )
                })}
            </table>
        </>
    )
}