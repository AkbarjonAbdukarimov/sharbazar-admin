
import AdminForm from './AdminForm'
import { useParams } from 'react-router-dom'

function EditAdmin() {
    const {id}=useParams()
    return (
        <AdminForm formType='edit' requestPath={'/admins/edit/'+id} id={id} />
    )
}

export default EditAdmin