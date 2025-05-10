/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

type productType = {
    id: number;
    name: string;
    price: number;
    size: string;
};

const ProductPage = () => {
    const [isLogin, setIsLogin] = useState(true);
    const [products, setProducts] = useState([]);
    const { push } = useRouter();
    useEffect(() => {
        if(!isLogin) {
            push("/auth/login");
        }
    }, []);

    // CLient side Rendering
    useEffect(() => {
        fetch("/api/product")
            .then((res) => res.json()).then((response) => {
                setProducts(response.data);
            })
    }, []);
    return (
        <div>
            <h1>Product Page</h1>
            {products.map((product: productType) => (
                <div key={product.id}>
                    {product.name}
                </div>
            ))}
        </div>
    );
}

export default ProductPage;