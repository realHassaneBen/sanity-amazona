import { Alert, CircularProgress, Grid, Typography } from '@mui/material';
import Head from 'next/head';
import { useEffect, useState } from 'react';
import Layout from '../components/Layout';
import ProductItem from '../components/ProductItem';
import client from '../utils/client';

export default function Home() {
    const [state, setState] = useState({
        products: [],
        error: '',
        loading: true,
    });
    const { products, error, loading } = state;
    useEffect(() => {
        const fetchData = async () => {
            try {
                const products = await client.fetch(`*[_type=="product"]`);
                setState({ products, loading: false });
            } catch (error) {
                console.log(error);
                setState({ error: error.message, loading: false });
            }
        };
        fetchData();
    }, []);
    return (
        <Layout>
            {loading ? (
                <CircularProgress />
            ) : error ? (
                <Alert variant="danger"> {error}</Alert>
            ) : (
                <Grid container spacing={3}>
                    {products.map((product) => (
                        <Grid item md={4} key={product._id}>
                            <ProductItem product={product} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Layout>
    );
}
