import CategoryForm from './CategoryForm';

export default function NewCategory() {

    return (
        <div><CategoryForm formType='new' requestPath={'/categories/new'} /></div>
    )
}
