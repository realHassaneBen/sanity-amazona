import {
    Button,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Typography,
} from '@mui/material';
import React from 'react';
import NextLink from 'next/link';
import { urlForThumbnail } from '../utils/image';

const ProductItem = ({ product }) => (
    <Card>
        <NextLink href={`/product/${product.slug.current}`} passHref>
            <>
                <CardActionArea>
                    <CardMedia
                        component="img"
                        image={urlForThumbnail(product.image)}
                        title={product.name}
                    ></CardMedia>
                    <CardContent>
                        <Typography>{product.name}</Typography>
                        <Typography>
                            {product.rating} ({product.reviews} reviews)
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Typography>${product.price}</Typography>
                    <Button size="smal" color="primary">
                        Add to Cart
                    </Button>
                </CardActions>
            </>
        </NextLink>
    </Card>
);

export default ProductItem;
