import { Alert, Snackbar } from '@mui/material'
import { FunctionComponent, useEffect, useState } from 'react'
import IError from '../interfaces/IError'

const Errors: FunctionComponent<{ errs: IError[] | undefined }> = ({ errs }) => {
    useEffect(() => {
        setOpen(true)
    }, [errs])
    const [open, setOpen] = useState<boolean>(true)
    if (!errs) {
        return
    }
    return (

        <div className="Shoxrux" style={{ paddingTop: "64px" }}>
            <Snackbar
                open={open}
                autoHideDuration={8000}
                onClose={() => setOpen(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}>
                <Alert severity="error">{errs.length > 0 ? errs[0].message : 'Server Error'}</Alert>
            </Snackbar>
        </div>
    )
}
export default Errors
