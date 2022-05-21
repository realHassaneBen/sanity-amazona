import { Typography } from '@mui/material';
import Head from 'next/head';
import Layout from '../components/Layout';

export default function Home() {
    return (
        <Layout>
            <div>
                <Head>
                    <title>Sanity Amazona</title>
                    <meta
                        name="description"
                        content="The ecommerce website by next and sanity"
                    />
                    <link rel="icon" href="/favicon.ico" />
                </Head>
                <Typography component="h1" variant="h1">
                    Sanity Amazona
                </Typography>
            </div>
        </Layout>
    );
}
