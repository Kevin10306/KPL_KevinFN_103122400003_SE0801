 /*/ useEffect(() => {
        const handleRoute = () => {
            if (router.pathname === "/dashboard") loadSchedules();
        };
        router.events.on("routeChangeComplete", handleRoute);
        return () => router.events.off("routeChangeComplete", handleRoute);
    }, [router, loadSchedules]); */