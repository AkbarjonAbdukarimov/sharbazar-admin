import CategoryForm from './CategoryForm'
import { useParams } from 'react-router-dom'

export default function EditCategory() {
    const { id } = useParams()
    return (
        <div><CategoryForm formType='edit' requestPath={'/categories/edit/' + id?.toString()} id={id} /></div>
    )
}
