
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { useContext, useState } from 'react';
import axios, { AxiosError } from 'axios';
import AdminContext from '../../context/AdminContext';
import Errors from '../Errors';
import IError from '../../interfaces/IError';

const defaultTheme = createTheme();

export default function SignIn() {
    const context = useContext(AdminContext)
    let setAdmin:Function;
    if(context){
        setAdmin=context.setAdmin
    }
    const [err, setError] = useState<IError[] | undefined>()
    const [_open, setOpen] = useState(false);
  
    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);

        try {
            const res = await axios.post('/admins/login', {
                email: data.get('email'),
                password: data.get('password')
            })

            setAdmin(res.data)
            // localStorage.setItem('admin', )
            localStorage.setItem("admin", JSON.stringify(res.data))
            
        } catch (error) {
            if (error instanceof AxiosError) {

                const { errors } = error.response!.data

                setError([...errors]
                )
                setOpen(true)
            }

        }



    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Container component="main" maxWidth="xs">

                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign in
                    </Typography>
                    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                        />
                        <TextField
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                        />
                        <FormControlLabel
                            control={<Checkbox value="remember" color="primary" />}
                            label="Remember me"
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign In
                        </Button>
                        <Errors errs={err} />

                    </Box>
                </Box>


            </Container>
        </ThemeProvider>
    );
}