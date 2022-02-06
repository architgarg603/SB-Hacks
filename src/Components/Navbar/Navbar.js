import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import logo from '../../Assets/logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';

const pages = ['Home', 'Wallet', 'Habbit Tracker', 'Food Tracker', 'NotesHub'];
const settings = ['Profile', 'Account', 'Dashboard', 'Logout'];

const Navbar = () => {
    const history = useNavigate();
    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [user, setUser] = React.useState({})
    const location = useLocation();
    const path = (location.pathname);
    const handleOpenNavMenu = (event) => {
        setAnchorElNav(event.currentTarget);
    };
    const handleOpenUserMenu = (event) => {
        setAnchorElUser(event.currentTarget);
    };

    const handleCloseNavMenu = (link) => {
        setAnchorElNav(null);
        console.log(link);
        if (link == "Home") history("/")
        if (link == "Wallet") history("/wallet")
        if (link == "Habbit Tracker") history("/habbit")
        if (link == "Food Tracker") history("/food")
        if (link == "NotesHub") history("/notes")

    };

    const handleCloseUserMenu = () => {
        setAnchorElUser(null);
    };
    let token = localStorage.getItem("token");




    return (
        <AppBar position="static" sx={{ backgroundColor: "transparent", zIndex: "100", boxShadow: "none", position: "absolute", top: "0", left: "0" }}>
            <Container maxWidth="xl" >
                <Toolbar disableGutters >
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: 'none', md: 'flex' }, color: "black" }}
                    >
                        <Link to="/home">
                            <img src={logo} style={{ height: "25px", marginTop: "8px", width: "100px" }} />
                        </Link>
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            color="inherit"
                        >
                            <MenuIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'left',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            sx={{
                                display: { xs: 'block', md: 'none' },
                            }}
                        >
                            {(path == "/home" || path == "/login" || path == "/signup") ?
                                pages.map((page) => (
                                    <MenuItem key={page} onClick={() => handleCloseNavMenu(page)} sx={{ color: "#51B1F7", display: "flex", alignItems: "center", height: "70px" }}>
                                        <Typography textAlign="center">{page}</Typography>
                                    </MenuItem>
                                ))
                                : null}
                        </Menu>
                    </Box>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}
                    >
                        <Link to="/home">
                            <img src={logo} style={{ height: "25px", marginTop: "8px", width: "100px" }} />
                        </Link>
                    </Typography>
                    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                         {(path == "/home" || path == "/login" || path == "/signup") ?
                        pages.map((page) => (
                            <Button
                                key={page}
                                onClick={() => handleCloseNavMenu(page)}
                                sx={{ my: 2, color: 'black', display: 'block' }}
                            >
                                {page}
                            </Button>
                        )):null}
                    </Box>
                    {token ?
                        <Box sx={{ flexGrow: 0, display: "flex", alignItems: "center" }}>
                            <div style={{ marginRight: "20px", color: "white", fontSize: "large" }}>{user?.name}</div>
                            <Avatar alt="Remy Sharp" src={token} />
                        </Box> :
                        <div style={{
                            display: "flex"

                        }}>
                            <Link to="/login">
                                <div style={{
                                    marginRight: "20px", display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%"
                                }}>
                                    Login
                                </div>
                            </Link>
                            <Link to="/signup">
                                <div style={{
                                    color: "black",
                                    width: "120px",
                                    height: "40px",
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    backgroundColor: "white",
                                    borderRadius: "20px",
                                    border: "1px solid black"
                                }}>Signup</div>
                            </Link>
                        </div>}
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default Navbar;