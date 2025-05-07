/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

const ProductPage = () => {
    const [isLogin, setIsLogin] = useState(false);
    const { push } = useRouter();
    useEffect(() => {
        if(!isLogin) {
            push("/auth/login");
        }
    }, []);
    return (
        <div>
            <h1>Product Page</h1>
            <p>This is the product page.</p>
        </div>
    );
}

export default ProductPage;