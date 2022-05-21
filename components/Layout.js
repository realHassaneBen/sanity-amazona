import { createTheme } from '@mui/material/styles';
import {
    AppBar,
    CssBaseline,
    Link,
    ThemeProvider,
    Toolbar,
    Typography,
    Box,
    Container,
} from '@mui/material';
import Head from 'next/head';
import NextLink from 'next/link';
import classes from '../utils/classes';

export default function Layout({ title, description, children }) {
    const theme = createTheme({
        components: {},
        typography: {
            h1: {
                fontSize: '1.6rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
            h2: {
                fontSize: '1.4rem',
                fontWeight: 400,
                margin: '1rem 0',
            },
        },
        palette: {
            mode: 'light',
            primary: { main: '#f0c000' },
            secondary: { main: '#208080' },
        },
    });
    return (
        <>
            <Head>
                <title>
                    {title ? `${title} - Sanity Amazona` : `Sanity Amazona`}
                    {description && (
                        <meta name="description" content={description}></meta>
                    )}
                </title>
            </Head>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <AppBar position="static" sx={classes.appbar}>
                    <Toolbar sx={classes.toolbar}>
                        <NextLink href="/" passHref>
                            <Link>
                                <Typography sx={classes.brand}>
                                    amazona
                                </Typography>
                            </Link>
                        </NextLink>
                    </Toolbar>
                </AppBar>
                <Container component="main" sx={classes.main}>
                    {children}
                </Container>
                <Box component="footer" sx={classes.footer}>
                    <Typography>
                        All rights reserved. Sanity Amazona.
                    </Typography>
                </Box>
            </ThemeProvider>
        </>
    );
}
