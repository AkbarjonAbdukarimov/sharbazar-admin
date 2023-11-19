import AdminForm from './AdminForm'

function NewAdmin() {
    return (
        <AdminForm formType='new' requestPath={'/admins/new'} />
    )
}

export default NewAdmin