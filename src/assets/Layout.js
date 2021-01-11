import Head from 'next/head'


const Layout = (props) => (
	<div>
        <Head>
        


        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"/>
        <link  rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
        <link  rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
        <link rel="manifest" href="/manifest.json"/>
        <link rel="manifest" href="/site.webmanifest"/>
       
        </Head>
     
        {props.children}
   
    <script src="js/bootstrap.bundle.min.js"></script>
    <script src="js/jquery.min.js"></script>
    <script src="js/waypoints.min.js"></script>
    <script src="js/jquery.easing.min.js"></script>
    <script src="js/wow.min.js"></script>
    <script src="js/imagesloaded.pkgd.min.js"></script>
    <script src="js/isotope.pkgd.min.js"></script>
    <script src="js/jquery.magnific-popup.min.js"></script>
    <script src="js/default/dark-mode-switch.js"></script>
    <script src="js/jquery.dataTables.min.js"></script>
    <script src="js/default/active.js"></script>
    <script src="js/default/clipboard.js"></script>
    <script src="js/active.js"></script>

    <script src="js/scripts.bundle"></script>
    <script src="js/vendors.bundle"></script>

    </div>
);

export default Layout