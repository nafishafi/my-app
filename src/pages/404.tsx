import styles from "@/styles/404.module.scss"

const Cusmtom404 = () => {
    return (
        <div className={styles.error}>
            <div className="flex flex-col items-center justify-center h-screen">
                <img src="/not_found.png" alt="404" className={styles.error__image}/>
                <h1 className="text-4xl font-bold">Page Not Found</h1>
            </div>
        </div>
    );
}

export default Cusmtom404;