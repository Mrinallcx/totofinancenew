import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import styles from "./not-found.module.css";

export const metadata = {
  title: "Page Not Found — Toto Finance",
  description: "The page you are looking for does not exist.",
};

export default function NotFound() {
  return (
    <>
      <NavBar />
      <main className={styles.notFoundMain}>
        <section className={styles.card} aria-labelledby="not-found-title">
          <p className={styles.code}>404</p>
          <h1 id="not-found-title" className={styles.title}>
            Page not found
          </h1>
          <p className={styles.description}>
            The page you are trying to access does not exist or has been moved to a new URL.
          </p>
          <div className={styles.actions}>
            <a href="/" className={styles.primaryAction}>
              Go to homepage
            </a>
            <a href="/insights" className={styles.secondaryAction}>
              Browse insights
            </a>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
