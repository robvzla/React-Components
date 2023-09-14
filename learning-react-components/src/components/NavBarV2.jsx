import { AppBar, Button, Container, CssBaseline, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import logo from "../images/logo.png"


const NavBarV2 = () => {
    return (
        <CssBaseline>
            <AppBar color='primary' position='relative'>
                <Toolbar>
                    {/* <IconButton disableRipple={true} sx={{ flexGrow: 1 }}>
                        <img src={logo} alt="Main logo" style={{ width: '180px' }} />
                    </IconButton> */}

                    <Typography variant='h4' component='div' sx={{ flexGrow: 1 }}>LOGO</Typography>

                    <Stack direction='row' spacing={1}>
                        <Button color='inherit'>Home</Button>
                        <Button color='inherit'>Explore</Button>
                        <Button color='inherit'>About</Button>
                        <Button color='inherit'>Contact</Button>
                        <Button color='inherit'>Login</Button>

                    </Stack>
                </Toolbar>
            </AppBar>
        </CssBaseline>
    );
}

export default NavBarV2;